import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Wpp() {
  return (
    <Link
      target='_blank'
      href='https://wa.me/+59897111899'
      className='rounded-full shadow-[0_6px_0_0_rgba(0,0,0,0.4)] fixed bottom-0 right-0 translate-x-[-2rem] translate-y-[-2rem] '
    >
      <div className='text-4xl opacity-[70%] transition-all hover:bg-white md:opacity-100 hover:text-green-600 rounded-full p-3 w-fit md:text-5xl text-white bg-green-500'>
        <FaWhatsapp />
      </div>
    </Link>
  );
}
