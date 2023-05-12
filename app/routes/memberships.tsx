import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import MembershipCard from "~/components/MembershipCard";
import {
  getMemberships,
  updateUserMembership,
} from "~/models/membership.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import invariant from "tiny-invariant";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({ memberships: await getMemberships() });
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const membershipId = formData.get("memberships");

  const userId = formData.get("userId");

  console.log({ membershipId, userId });

  invariant(
    typeof membershipId === "string",

    "membershipId must be present and a string value"
  );

  invariant(
    typeof userId === "string",

    "userId must be present and a string value"
  );

  await updateUserMembership({ userId, membershipId });

  return null;
}

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  const user = useUser();
  const submit = useSubmit();

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget, { replace: true });
  };

  return (
    <div className=" bg-gray-800 p-4">
      <div className="mt-16 md:mt-28">
        <div className="mx-8 flex justify-center  bg-rose-900 lg:mx-40">
          <h1 className=" mx-1 my-2 text-center text-4xl text-white lg:my-4 lg:text-6xl">
            Membership{" "}
          </h1>
        </div>

        <Form method="post" onChange={(event) => handleChange(event)}>
          <div className="h-full ">
            <ul className="mx-auto max-w-xl items-center justify-center  p-4 md:flex">
              {memberships.map(({ id, level, description, price }) => (
                <MembershipCard
                  key={id}
                  userMembershipId={user.membershipId}
                  userId={user.id}
                  membershipId={id}
                  level={level}
                  description={description}
                  price={price}
                />
              ))}
            </ul>
          </div>
        </Form>
      </div>
    </div>
  );
}
