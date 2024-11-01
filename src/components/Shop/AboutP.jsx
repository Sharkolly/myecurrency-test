import shopNow from '../../assets/sideImg.png';

const AboutP = () => {
  return (
    <section className=' max-lg:w-[92%] mt-16 max-lg:mt-10 max-lg:mx-auto'>
 
      <div className="flex gap-3 max-lg:flex-col-reverse">
        <div className='relative'>
          <img src={shopNow} alt="Shop Now Image" className='scale-[.96]' />
        </div>
        <div className="flex flex-col gap-7 w-[29%] mt-32 max-lg:mt-8 max-lg:mb-7 max-lg:w-[92%] max-lg:mx-auto">
          <h1 className="text-2xl font-bold">About Product</h1>
          <p className='leading-6 text-sideColor'>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
          <div className='bg-white italic text-italic pr-20 text-sm flex flex-col gap-1 max-lg:static max-lg:px-6 max-md:px-0'>
            <p>😊  Promotes calm and relaxation.</p>
            <p>💤  Inhalation allows for a rapid effect.</p>
            <p>✅  100% drug-free, plant-based ingredients.</p>
            <p>‍⚕️  3rd-party lab tested.</p>
          </div>
          <div>
            <div className='flex gap-12 items-center mb-3'>
              <p>Price</p>
              <p>Unit</p>
            </div>
            <div className='flex gap-6 items-center'>
              <h2 className='font-bold'>USD 50</h2>
              <input className='w-[80px] px-3 rounded-md border-mainColor h-[40px] border-2' type="number" />
            </div>
          </div>

          <div>
            <button className="bg-btnColor text-white px-14 py-2.5 text-sm rounded-md">Buy</button>
          </div>
        </div>
      </div>

      <div className='w-9/12 mx-auto mt-24 max-lg:mt-10 max-lg:w-[90%]'>
        <hr />
      </div>
    </section>
  )
}

export default AboutP
