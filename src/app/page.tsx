import { AiFillStar, AiFillTool, AiOutlineCheck } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div
        className={`min-h-[calc(100vh-4rem)] bg-cover bg-[url("/motor.jpg")] bg-fixed grayscale-[40%]`}
      >
        <div className='flex flex-col items-center gap-12 justify-center min-h-[calc(100vh-4rem)] py-24 bg-[rgba(0,0,0,.40)]'>
          <h1 className='uppercase text-center text-4xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-widest'>
            mecánica de <br></br> confianza
          </h1>
          <Calidad />
        </div>
      </div>

      <div className='bg-gray-300 text-black'>
        <div className='text-center py-12 max-w-[85rem] px-8 mx-auto'>
          <h2 className='text-3xl font-bold uppercase mb-8'>
            Precios justos <br></br> calidad excepcional
          </h2>
          <p className='text-lg max-w-[60rem] mx-auto font-light'>
            En nuestro taller mecánico, nos dedicamos a más que simplemente reparar vehículos; nos
            esforzamos por brindar soluciones confiables y servicios de calidad que superan las
            expectativas.
          </p>
          <a className='block w-fit mx-auto text-orange-200 underline mt-4' href='/nosotros'>
            Leer más
          </a>
        </div>
      </div>
    </>
  );
}

function Calidad() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='bg-white flex flex-col items-center justify-center gap-6 font-semibold px-6 py-12'>
        <AiFillTool className='text-4xl' />
        <h3 className='text-xl md:text-2xl'>Mecánicos expertos</h3>
      </div>
      <div className='bg-gray-100 flex flex-col items-center justify-center gap-6 font-semibold px-6 py-12'>
        <AiFillStar className='text-4xl' />
        <h3 className='text-xl md:text-2xl'>Servicio de calidad</h3>
      </div>
      <div className='bg-gray-300 flex flex-col items-center justify-center gap-6 font-semibold px-6 py-12'>
        <IoMdCheckmark className='text-4xl' />
        <h3 className='text-xl md:text-2xl'>Precios razonables</h3>
      </div>
    </div>
  );
}
