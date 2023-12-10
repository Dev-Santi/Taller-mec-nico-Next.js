import { PageTitle } from "@/components/PageTitle/PageTitle";

export default function Contactanos() {
  const inputStyle = "border-b-[1px] text-lg pl-4 pb-1 font-light ";

  return (
    <>
      <PageTitle>Contáctanos</PageTitle>
      <div className='bg-white py-24'>
        <section className='flex flex-col md:flex-row justify-center gap-16'>
          <Card title='Llámanos' p1='Tel: +52-1-33-12345678' p2='E-Mail: info@misitio.com' />
          <Card title='Visítanos' p1='Av. Fray Antonio Alcalde 10' p2='13154 Montevideo, Uruguay' />
          <Card title='Horarios' p1='Lun - Vie: 7:00 - 22:00' p2='Dom: 7:00 - 15:00' />
        </section>
      </div>

      <div className='bg-white'>
        <form className='flex flex-col px-10 pb-16 gap-6 max-w-[60rem] mx-auto'>
          <div className='flex flex-col gap-6 md:flex-row'>
            <input
              className={inputStyle + "md:w-[50%]"}
              type='text'
              placeholder='Nombre'
              required
            />
            <input
              className={inputStyle + "md:w-[50%]"}
              type='email'
              placeholder='Email'
              required
            />
          </div>

          <input className={inputStyle} type='text' placeholder='Asunto' required />
          <textarea
            className={inputStyle + "resize-none w-full"}
            rows={5}
            placeholder='Mensaje'
            required
          />
          <button className='border-[1px] px-4 py-1 w-fit mx-auto' type='submit'>
            Enviar
          </button>
        </form>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6545.199917734919!2d-56.16031966750504!3d-34.89139051640009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80ff63f150bf%3A0xbc4e8fde2cd2ae77!2sDr.%20Manuel%20Albo%20%26%20Av.%20Italia%2C%2011600%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1702220627668!5m2!1ses!2suy'
        className='w-full border-y-[1px] mx-auto'
        height='600'
        loading='lazy'
      ></iframe>
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
