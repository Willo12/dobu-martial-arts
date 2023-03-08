import React from "react";
import handleLinkClick from "./index";

type NavbarLinkProps = {
  url: string;
  children: React.ReactNode;
  classname?: string;
  onClick?: () => void;
};

const NavabarLink = ({ children, url, classname }: NavbarLinkProps) => {
  return (
    <a
      href={url}
      onClick={handleLinkClick}
      className={`mt-1 block rounded py-2 px-2 font-semibold text-white hover:bg-slate-800 md:ml-4 ${classname}`}
    >
      {children}
    </a>
  );
};

export default NavabarLink;
