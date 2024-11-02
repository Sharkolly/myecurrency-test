import { Link } from "react-router-dom";
import { FaCaretRight } from 'react-icons/fa';
import CEO from '../../assets/160-1600378_transparent-happy-person-png-happy-man-face-png 1.png'

const AboutProduct = () => {
  return (
    <section className="mt-[8em] w-9/12 mx-auto flex gap-72 items-center max-lg:flex-col max-lg:mt-[2em] max-lg:gap-8" >
      <div className="flex flex-col gap-5">
        <p className='text-sideColor text-sm '>Our Amazing Story</p>
        <h1 className="text-2xl font-bold mb-4">10k+ Happ<span className="bg-yellowUnderneath pb-3">y Customers</span> </h1>
        <p className='text-sideColor text-sm'>There&apos;s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
        <div className="flex items-center gap-1">
          <FaCaretRight />
          <Link className="underline font-bold">More Know About us </Link>
        </div>
      </div>

      <div className="bg-semiWhite pt-10 pb-5 px-7 w-8/12 shadow-james max-lg:w-full">
        <p className="italic text-italic font-700">I&apos;m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. </p>

        <div className="flex gap-5 mt-24 items-center">
          <div className="">
            <img src={CEO} alt="CEO image" className="w-[60px] h-[60px] rounded-full" />
          </div>
          <div>
            <h2 className="font-bold text-italic">James Milner</h2>
            <p className="text-sm text-jamesRank">CEO, Techbias</p>
          </div>

        </div>
        <div className="flex justify-center gap-5 my-3">
          <div className="w-2 h-2 rounded-full bg-semiCircle"></div>
          <div className="w-2 h-2 rounded-full bg-semiCircle"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutProduct
