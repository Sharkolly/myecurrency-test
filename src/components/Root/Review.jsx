import stars from '../../assets/Group 18.svg';

const Review = () => {
    return (
        <section className='w-9/12 mx-auto mt-20'>
            <div className='flex gap-6 max-lg:flex-col'>
                <div className="px-6 pb-6 bg-semiWhite rounded-md w-[45%] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.</p>
                    <h2 className='font-bold text-md text-italic mb-2'>John Matthews</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
                <div className="px-6 pb-6 bg-semiWhite rounded-md w-[45%] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.</p>
                    <h2 className='font-bold text-md text-italic mb-2'>Eunice Oliver</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
                <div className="px-6 pb-6 bg-semiWhite rounded-md w-[45%] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>It&apos;s a really good product and helps me sleep better at night!</p>
                    <h2 className='font-bold text-md text-italic mb-2'>Laura Davies</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
                <div className="px-6 pb-6 bg-semiWhite rounded-md w-[45%] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>Helps me relax and remember to breathe. Stress level definitely goes down</p>
                    <h2 className='font-bold text-md text-italic mb-2'>Jane Bocks</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
            </div>
                {/* <div className='mt-16 max-lg:mt-10'>
                    <hr />
                </div> */}
        </section>
    )
}

export default Review
