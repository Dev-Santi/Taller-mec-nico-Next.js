"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  let display = "hidden md:block";
  isActive && (display = "block");
  return (
    <div>
      <button onClick={handleClick} className='relative z-50 text-4xl cursor-pointer md:hidden'>
        {isActive ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>
      <nav
        className={
          "md:h-full top-0 right-0 bg-white border-l-2 h-screen border-gray-100 pl-12 pr-12 pt-36 absolute md:static md:border-none md:p-0 " +
          display
        }
      >
        <ul className='flex flex-col md:flex-row text-2xl md:text-base gap-6 md:gap-12'>
          <li
            onClick={handleClick}
            className={usePathname() == "/" ? "text-orange-200" : "hover:text-orange-100"}
          >
            <Link href='/'>Inicio</Link>
          </li>
          <li
            onClick={handleClick}
            className={usePathname() == "/servicios" ? "text-orange-200" : "hover:text-orange-100"}
          >
            <Link href='/servicios'>Servicios</Link>
          </li>
          <li
            onClick={handleClick}
            className={usePathname() == "/nosotros" ? "text-orange-200" : "hover:text-orange-100"}
          >
            <Link href='/nosotros'>Nosotros</Link>
          </li>
          <li
            onClick={handleClick}
            className={
              usePathname() == "/contactanos" ? "text-orange-200" : "hover:text-orange-100"
            }
          >
            <Link href='/contactanos'>Contáctanos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
