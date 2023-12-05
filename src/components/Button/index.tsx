import Link from "next/link";

export default function Button({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      target='_blank'
      className='bg-orange-200 border-[1px] border-gray-100 rounded-full px-6 py-2 text-white text-2xl hover:bg-gray-100 hover:border-[1px] hover:border-black hover:text-black'
    >
      {children}
    </Link>
  );
}
