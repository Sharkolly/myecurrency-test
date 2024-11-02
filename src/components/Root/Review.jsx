import stars from '../../assets/Group 18.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            // slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2,
            // slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1,
            // slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <section className='w-9/12 mx-auto mt-20 '>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                deviceType={['desktop', "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="px-6 pb-6 bg-semiWhite rounded-md py-4 w-[100%] z-[50] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.</p>
                    <h2 className='font-bold text-md text-italic mb-2'>John Matthews</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
                <div className="px-6 pb-6 bg-semiWhite rounded-md py-4 w-[100%] z-[50] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.</p>
                    <h2 className='font-bold text-md text-italic mb-2'>Eunice Oliver</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
                <div className="px-6 pb-6 bg-semiWhite rounded-md py-4 w-[100%] z-[50] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>It&apos;s a really good product and helps me sleep better at night!</p>
                    <h2 className='font-bold text-md text-italic mb-2'>Laura Davies</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
                <div className="px-6 pb-6 bg-semiWhite rounded-md py-4 w-[100%] z-[50] max-lg:w-full">
                    <p className='italic text-italic mt-4  text-sm h-[6.5rem]'>Helps me relax and remember to breathe. Stress level definitely goes down</p>
                    <h2 className='font-bold text-md text-italic mb-2'>Jane Bocks</h2>
                    <span className=''>
                        <img src={stars} alt="Stars Image" />
                    </span>
                </div>
            </Carousel>
            {/* <div className='mt-16 max-lg:mt-10'>
                    <hr />
                </div> */}
        </section>
    )
}

export default Review
