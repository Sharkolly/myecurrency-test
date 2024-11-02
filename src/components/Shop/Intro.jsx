const Intro = () => {
  return (
    <header className="h-[85vh] z-[-11] bg-fixed bg-no-repeat w-full bg-cover bg-center relative shop" style={{ backgroundImage: 'url(/man.png)' }}>
      <div className="pt-[11em] w-9/12 mx-auto max-lg:w-[92%] max-lg:pt-[20em] max-md:pt-[18em]">
        <div className="w-[55%] flex flex-col gap-5 max-lg:w-[92%] max-lg:mx-auto">
          <p>We&apos;re here to help you</p>
          <h1 className="font-bold text-5xl max-lg:text-5xl">Relax & Rest</h1>
        </div>
      </div>
    </header>
  )
}

export default Intro
