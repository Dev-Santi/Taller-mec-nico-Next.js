import { oswald } from "@/fonts";
import Link from "next/link";
import Menu from "./Menu";

export default function Navigation() {
  return (
    <div className='flex items-center justify-between gap-4 max-w-[85rem] mx-auto text-black px-12 py-5'>
      <Logo />
      <Menu />
      <Link
        href='https://wa.me/+59897111899'
        target='_blank'
        className='hidden text-lg font-bold md:block hover:text-orange-100'
      >
        +598-097-111-899
      </Link>
    </div>
  );
}

function Logo() {
  return (
    <div>
      <Link href='/'>
        <h2 className={"text-3xl font-extrabold tracking-[0.4rem] " + oswald.className}>
          <span className='text-orange-200'>DR</span>AUTOS
        </h2>
        <h3 className='text-lg font-light'>Servicio #1 en reparación</h3>
      </Link>

      <Link
        href='https://wa.me/+59897111899'
        target='_blank'
        className='text-lg font-bold md:hidden'
      >
        +598-097-111-899
      </Link>
    </div>
  );
}
