import Link from "next/link";

const MyNavLink = ({ href, children, pathName, className }) => {
  return (
    <Link
      href={href}
      className={`${pathName === href ? "font-bold text-purple-600" : ""} font-medium ${className}`}
    >
      <li>{children}</li>
    </Link>
  );
};

export default MyNavLink;
