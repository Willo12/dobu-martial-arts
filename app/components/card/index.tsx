import instructorGraphic from "~/assets/jpg/martial-arts-instructor.jpg";
import secondInstructorGraphic from "~/assets/jpg/second-instructor.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";

type CardProps = {
  fName: string;
  lName: string;
  image?: string;
  description: string;
  price: string;
  className?: string;
};

const Card = ({
  fName,
  lName,
  image,
  description,
  price,
  className,
}: CardProps) => {
  const secndInstruct = secondInstructorGraphic;
  return (
    <div className={`mt-10 mb-10 flex shadow-2xl${className}`}>
      <div className="w-64 rounded-md bg-gray-100 lg:flex lg:w-96 lg:items-center lg:justify-center">
        <div className="overflow-hidden rounded-t-md lg:rounded-l-md lg:rounded-r-none">
          <Parallax speed={-5}>
            <img
              className="scale-125  lg:scale-100 "
              src={image ? image : instructorGraphic}
              alt="Martial Arts Instructor"
            />
          </Parallax>
        </div>
        <div className="rounded-b-md bg-gray-100 lg:h-96 lg:rounded-r-md">
          <p className="ml-3 mt-4  text-xs font-light text-gray-500 lg:ml-6">
            INSTRUCTOR
          </p>
          <h1 className="ml-3 mt-1 font-serif text-2xl lg:ml-6 lg:text-3xl">
            {fName} {lName}
          </h1>
          <div className="mt-4 ml-3 mr-6 text-gray-400 lg:ml-6 lg:mr-6 lg:w-96">
            <p>
              {fName} {description}
            </p>
          </div>
          <div className="mt-6 ml-3 text-2xl font-bold text-green-700">
            <h1 className="font-serif">{price} per Session</h1>
          </div>
          <div className="mt-6 flex h-16 w-64 items-center justify-center lg:h-56 lg:w-full">
            <a href="memberships">
              <div
                className="mb-1 flex h-9 w-56 items-center justify-center rounded-sm
            bg-green-700 text-white transition-all last-of-type:mb-0 hover:scale-105
            hover:cursor-pointer hover:bg-green-900 lg:h-16 lg:w-96 lg:rounded-md"
              >
                <MembershipIcon
                  icon={<AiOutlineShoppingCart size={20} />}
                  className="mr-2"
                />

                <button className="mr-4">Manage Membership</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
type iconProps = {
  icon: any;
  className?: string;
};

const MembershipIcon = ({ icon, className }: iconProps) => {
  return <div className={`membership-icon ${className}`}>{icon}</div>;
};

export default Card;
