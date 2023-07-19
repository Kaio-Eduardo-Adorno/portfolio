"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { Link } from "react-scroll";

export const HeaderLink: React.FC<{ href: string; children: ReactNode }> = ({
  children,
  href,
  ...rest
}) => {
  const router = useRouter();
  const setRouterPath = () => {
    router.push(href, { scroll: false });
  };
  return (
    <Link
      to={href.replace("/#", "")}
      spy={true}
      smooth={true}
      duration={500}
      offset={-140}
      onSetActive={setRouterPath}
      className='uppercase cursor-pointer hover:opacity-50 hover:font-bold leading-freedom'
      {...rest}
    >
      {children}
    </Link>
  );
};
