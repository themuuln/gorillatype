import { IoPerson } from "react-icons/io5";

import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} width={50} height={50} alt="logo" />
    </Link>
  );
};

const Navbar = () => {
  const buttonData = [
    { href: "/settings", icon: <IoMdSettings className="fill-white" /> },
    { href: "/profile", icon: <IoPerson className="fill-white" /> },
  ];

  return (
    <nav className="w-full fixed bg-transparent justify-between flex">
      <div className="container flex justify-between">
        <Logo />
        <div className="flex gap-4">
          {buttonData?.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
