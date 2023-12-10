import Link from "next/link";
import Button from "../Button";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { oswald } from "@/fonts";

export default function Footer() {
  return (
    <footer>
      <section className='flex flex-col text-center gap-8 items-center justify-center md:flex-row md:justify-between py-12 px-12 text-3xl max-w-[85rem] mx-auto'>
        <h2 className='font-bold'>¿Necesita ayuda? ¡Llámanos ahora!</h2>
        <Button href='https://wa.me/+59897111899'>Contáctanos</Button>
      </section>
      <section className='bg-gray-200 text-white flex flex-col px-12 pt-14'>
        <div className='max-w-[80rem] w-full mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 justify-between'>
            <div className='my-4'>
              <h2 className='font-semibold text-xl py-4'>Los servicios</h2>
              <ul className=' flex flex-col gap-4 text-lg'>
                <li>- Revisión de aceite</li>
                <li>- Revision de suspensión</li>
                <li>- Revisión de frenos</li>
                <li>- Alineación de ruedas</li>
                <li>- Cambio de batería</li>
                <li>- Servicio general de averías</li>
              </ul>
            </div>
            <div className='my-4'>
              <h2 className='font-semibold text-xl py-4'>Horarios</h2>
              <p className='text-lg'>Lun - Vie: 07:00 - 22:00</p>
              <p className='text-lg'>Dom: 07:00 - 15:00</p>
              <div className='flex mt-3 gap-4 text-3xl'>
                <Link
                  className='hover:text-orange-200'
                  target='_blank'
                  href='https://wa.me/+59897111899'
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  className='hover:text-orange-200'
                  target='_blank'
                  href='https://www.instagram.com/santii.larrosa/'
                >
                  <FaInstagram />
                </Link>
                <Link
                  className='hover:text-orange-200'
                  target='_blank'
                  href='https://www.facebook.com/'
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
            <div className='my-4 max-w-[18rem]'>
              <h2 className='font-semibold text-xl py-4'>Contáctanos</h2>
              <p className='text-lg'>
                Av. 18 de julio y Carlos Quijano 6012 11100 Montevideo, Uruguay.
              </p>
              <p className='text-lg mt-4'>Tel: +598-111-899</p>
              <p className='text-lg'>info@miTallerMecanico.com.uy</p>
              <div className='mb-10 mt-12'>
                <Link href='/'>
                  <h2 className={"text-3xl font-extrabold tracking-[0.4rem] " + oswald.className}>
                    <span className='text-orange-200'>DR</span>AUTOS
                  </h2>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <span className='block md:mt-12 mb-4 bg-gray-100 w-full h-[1px]'></span>

            <p className='text-center font-extralight'>@Copyright 2023</p>
            <p className='text-center mb-2 font-extralight'>
              Creado por{" "}
              <Link
                target='_blank'
                className='underline'
                href='https://www.linkedin.com/in/santiago-larrosa-bauz%C3%A1-99b740251/'
              >
                Santiago Larrosa
              </Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
