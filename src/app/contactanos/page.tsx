import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Contactanos() {
  return (
    <>
      <PageTitle>Contáctanos</PageTitle>
      <div className='bg-white py-24'>
        <section className='flex flex-col md:flex-row justify-center gap-16'>
          <Card title='Llámanos' p1='Tel: +52-1-33-12345678' p2='E-Mail: info@misitio.com' />
          <Card
            title='Visítanos'
            p1='Av. Fray Antonio Alcalde 10'
            p2='44100 Guadalajara, Jal., México'
          />
          <Card title='Horarios' p1='Lun - Vie: 7:00 - 22:00' p2='Dom: 7:00 - 15:00' />
        </section>
      </div>

      <form></form>
    </>
  );
}

function Card({ title, p1, p2 }: { title: string; p1: string; p2: string }) {
  return (
    <div className='flex flex-col text-center px-4'>
      <h2 className='font-semibold text-3xl mb-4'>{title}</h2>
      <p className='text-xl font-light mb-1'>{p1}</p>
      <p className='text-xl font-light'>{p2}</p>
    </div>
  );
}
