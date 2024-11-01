import shopNow from '../../assets/sideImg.png';
import Woman from '../../assets/girl.png';

const ShopandMission = () => {
    return (
        <section className='my-20 max-lg:mt-12 max-lg:w-[92%] max-lg:mx-auto'>
            <div className='w-9/12 mx-auto mb-16 max-lg:mt-10 max-lg:w-[90%]'>
                <hr />
            </div>
            <div className="flex gap-3 max-lg:flex-col-reverse">
                <div className='relative '>
                    <img src={shopNow} alt="Shop Now Image" className='scale-[.96]' />
                    <div className='bg-white italic text-italic absolute bottom-7 right-[-10px] px-4 py-6 pr-20 rounded-md shadow-companies text-sm flex flex-col gap-1 max-lg:static max-lg:px-6'>
                        <p>😊  Promotes calm and relaxation.</p>
                        <p>💤  Inhalation allows for a rapid effect.</p>
                        <p>✅  100% drug-free, plant-based ingredients.</p>
                        <p>‍⚕️  3rd-party lab tested.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-7 w-[29%] mt-24 max-lg:mt-5 max-lg:mb-7  max-lg:w-[92%] max-lg:mx-auto">
                    <h1 className="text-2xl font-bold">Shop Now</h1>
                    <p className='leading-6 text-sideColor'>Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</p>
                    <div>
                        <button className="bg-btnColor text-white px-14 py-2.5 text-sm rounded-md">Visit Shop</button>
                    </div>
                </div>
            </div>

            <div className="flex w-[88%] ml-auto mt-16 gap-10 max-lg:flex-col max-lg:mt-4 max-lg:w-[92%] max-lg:mx-auto">
                <div className="flex flex-col gap-7 mt-12 w-[67%] max-lg:w-[100%] max-lg:mx-auto">
                    <h1 className="text-2xl font-bold ">Our Mission</h1>
                    <p className='leading-6 text-sideColor w-[87%] max-lg:w-[100%]'>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That&apos;s why we created products that aim to -
                        <div className='mt-7'>
                            <p>✓ Promote Calm</p>
                            <p>✓ Support Sleep</p>
                            <p>✓ Reduce Stress</p>
                            <p>✓ Aid Relaxation</p>
                        </div>
                    </p>
                </div>
                <div className='w-full'>
                    <img src={Woman} alt="Woman Image" className='object-cover h-[500px] w-full cover max-lg:h-[380px]' />
                </div>

            </div>
        </section>
    )
}

export default ShopandMission
