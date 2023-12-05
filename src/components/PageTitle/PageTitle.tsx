export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-[url("/carretera.jpg")] bg-center'>
      <div className='w-full bg-[rgba(0,0,0,0.3)]'>
        <h1 className='text-center text-white text-5xl sm:text-7xl font-semibold py-14 drop-shadow-lg'>
          {children}
        </h1>
      </div>
    </div>
  );
}
