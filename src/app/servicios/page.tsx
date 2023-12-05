import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Servicios() {
  return (
    <>
      <PageTitle>Servicios</PageTitle>
      <div className='bg-white'>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-start w-fit mx-auto py-24'>
          <Card number='01' title='Revisión de aceite'>
            Aseguramos el correcto funcionamiento y la salud de tu motor con una revisión minuciosa
            de aceite.
          </Card>
          <Card number='02' title='Revision de suspensión'>
            Mantén un manejo suave y confortable. Nuestra revisión de suspensión garantiza un
            rendimiento óptimo de tu vehículo, incluso en terrenos irregulares.
          </Card>
          <Card number='03' title='Revisión de frenos'>
            La seguridad comienza con frenos confiables. Nuestra revisión de frenos exhaustiva
            identifica y aborda cualquier problema.
          </Card>
          <Card number='04' title='Alineación de ruedas'>
            Mejora la estabilidad y el desgaste uniforme de tus neumáticos con nuestro servicio de
            alineación de ruedas.
          </Card>
          <Card number='05' title='Cambio de batería'>
            Potencia tu viaje con una batería en condiciones óptimas. Nuestro servicio de cambio de
            batería garantiza que tu vehículo arranque.
          </Card>
          <Card number='06' title='Servicio general de averías'>
            Para cualquier problema que encuentre tu vehículo, nuestro servicio general de averías
            es la solución integral.
          </Card>
        </section>
      </div>
    </>
  );
}

function Card({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='w-fit p-4 flex flex-col gap-4 items-center justify-center text-center'>
      <span className='text-7xl font-semibold text-orange-200'>{number}</span>
      <h2 className='text-xl font-bold max-w-[18rem]'>{title}</h2>
      <p className='mt-2 font-light max-w-[15rem]'>{children}</p>
    </div>
  );
}

/* 
- Revisión de aceite y frenos
- Revision de suspensión
- Revisión de frenos
- Alineación de ruedas
- Cambio de batería
- Servicio general de averías
*/
