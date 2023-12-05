import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Nosotros() {
  return (
    <>
      <PageTitle>Nosotros</PageTitle>
      <div className='bg-white'>
        <section className=' text-center max-w-[50rem] mx-auto text-lg py-24 '>
          <p>
            Bienvenido a <span className='text-orange-200 font-bold'>Dr</span>
            <span className='font-bold'>Autos</span>, donde la pasión por la excelencia en el
            servicio se encuentra con la experiencia mecánica de confianza. Nos enorgullece ser tu
            destino confiable para todas tus necesidades automotrices.
          </p>
          <br />
          <p>
            Entendemos que cada vehículo es único y que cada cliente tiene necesidades específicas.
            Nuestra misión es ofrecer un servicio personalizado y eficiente que no solo repare
            automóviles, sino que construya relaciones sólidas basadas en la confianza y la
            transparencia.
          </p>
          <br />
          <p>
            Contamos con un equipo de mecánicos altamente capacitados y apasionados por su trabajo.
            Nos esforzamos por mantenernos actualizados con las últimas tecnologías y técnicas de la
            industria para garantizar que tu vehículo reciba el mejor cuidado posible. Ya sea una
            simple revisión de aceite, una compleja reparación de frenos o un servicio general de
            averías, nos dedicamos a abordar cada tarea con atención meticulosa y habilidad técnica.
          </p>
        </section>
      </div>
    </>
  );
}
