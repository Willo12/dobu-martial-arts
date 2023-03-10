import { LoaderArgs } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return null;
};

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <main className=" relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className=" relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="sm:roudned-2xl relative shadow-xl sm:overflow-hidden"></div>
          </div>

          <div className="max-w-7xlxl mx-auto py-2 px-4 sm:px-6 lg:px-8"></div>
        </div>
      </main>
    </>
  );
}
