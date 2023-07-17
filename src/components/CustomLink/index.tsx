import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export const CustomLink: React.FC<LinkProps & { children: ReactNode }> = ({
  children,
  ...props
}) => (
  <Link className='uppercase hover:opacity-50 hover:font-bold' {...props}>
    {children}
  </Link>
);
