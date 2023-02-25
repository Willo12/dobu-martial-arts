import { Link } from "@remix-run/react";
import React from "react";

type NavbarLinkProps = {
  url: string;
  children: React.ReactNode;
  classname?: string;
};

const NavabarLink = ({ children, url, classname }: NavbarLinkProps) => {
  return (
    <Link
      to={url}
      className={`mt-1 block rounded py-2 px-2 font-semibold text-white hover:bg-slate-800 md:ml-4 ${classname}`}
    >
      {children}
    </Link>
  );
};

export default NavabarLink;
