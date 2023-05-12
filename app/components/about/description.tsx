type DescriptionProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  description1?: string;
  headingClassName?: string;
  paragraphClassName?: string;
  className?: string;
  Links?: string;
  LinkRef?: string;
  LinkClasses?: string;
};

const Description = ({
  imageUrl,
  imageAlt,
  title,
  description,
  description1,
  headingClassName,
  paragraphClassName,
  className,
  Links,
  LinkRef,
  LinkClasses,
}: DescriptionProps) => {
  return (
    <div className="mx-10 h-[720px] shadow-md lg:shadow-none">
      <div className={` lg:flex lg:justify-evenly ${className}`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="lg:h-[402px] lg:w-[516px]"
        />
        <div className=" h-auto items-center justify-center bg-gray-600 lg:h-[477px] lg:w-[602px]">
          <h1
            className={`mx-8 mb-3 items-center justify-center text-center text-4xl text-gray-200 lg:text-6xl ${headingClassName}`}
          >
            {title}
          </h1>
          <div
            className={`mb-3 mt-3 h-auto bg-gray-700 py-3 ${paragraphClassName}`}
          >
            <p className="mx-8 mb-3 mt-3  text-lg text-gray-400 lg:text-3xl">
              {description}
            </p>
            {description1 && (
              <p className="mx-8   mb-3 mt-3 text-lg text-gray-400 lg:text-3xl">
                {description1}
                <a className={LinkClasses} href={LinkRef}>
                  {Links}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
