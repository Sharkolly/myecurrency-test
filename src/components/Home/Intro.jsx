import google from '../../assets/google2.0.0 1.png'
import Bloomberg from '../../assets/PngItem_2146723 1.png';
import Forbes from '../../assets/PngItem_272311 1.png';
import Sleep from '../../assets/Sleep-Review-Magazine-Logo 1.png';
import Influencive from '../../assets/Logo_Black_Large_Slogan_newfont2 1.png';

const Intro = () => {
    return (
        <header className="h-[85vh] z-[-11] bg-fixed bg-no-repeat w-full bg-cover bg-center relative home" style={{backgroundImage: 'url("./src/assets/homepage.png")'}}>
            <div className="pt-[11em] w-9/12 mx-auto max-lg:w-[92%] max-lg:pt-[12em] max-md:pt-[9.5em]">
                <div className="w-[55%] flex flex-col gap-5 max-lg:w-[92%] max-lg:mx-auto">
                    <p>We&apos;re here to help you</p>
                    <h1 className="font-bold text-5xl max-lg:text-5xl">Relax & Rest</h1>
                    <p>With the aid of our Melatonin Sleepstiq, we can assume you that you can get quality sleep.</p>
                    <div>
                        <button className="bg-btnColor text-white px-14 py-2.5 text-sm rounded-md">Visit Shop</button>
                    </div>
                </div>
            </div>
            <div className="bg-white flex gap-20 bg-white absolute bottom-[-2.5em] px-16 py-4 right-0 items-center shadow-companies max-lg:gap-10 max-lg:justify-end max-md:gap-5 max-lg:px-4 max-lg:bottom-0 max-lg:w-full">
                <img src={google} className='w-[150px] max-lg:w-[95px] max-md:w-[55px]' alt="google" />
                <img src={Forbes} className='w-[150px] max-lg:w-[95px] max-md:w-[55px]' alt="Fobes Image" />
                <img src={Bloomberg} className='w-[150px] max-lg:w-[95px] max-md:w-[55px]' alt="Bloomberg" />
                <img src={Sleep} className='w-[150px] max-lg:w-[95px] max-md:w-[55px]' alt="Sleep Review Image" />
                <img src={Influencive} className='w-[150px] max-lg:w-[95px] max-md:w-[55px]' alt="Influencive Image" />
            </div>
        </header>
    )
}

export default Intro
