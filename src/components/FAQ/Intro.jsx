import { IoMdSearch } from 'react-icons/io';

const Intro = () => {
  return (
    <div>
      <header className="bg-semiWhite  h-[85vh] z-[-11] bg-fixed bg-no-repeat w-full bg-cover bg-center relative">
        <div className="pt-[11em] w-9/12 mx-auto max-lg:w-[92%] max-lg:pt-[10em] max-md:pt-[10em]">
          <div className="w-[75%] flex flex-col gap-5 max-lg:w-[92%] max-lg:mx-auto">
            <p>We&apos;re here to help you</p>
            <h1 className="font-bold text-5xl max-lg:text-5xl">How can we assist?</h1>
            <div className="flex relative cursor-pointer">
              <input type="text" className="rounded-md pl-16 cursor-pointer max-lg:w-full py-3 w-full" placeholder="Search FAQs here" />
              <div className="absolute flex items-center gap-3 top-[0%] left-[0] translate-x-6 translate-y-2/4">
                <span><IoMdSearch className='w-[25px] h-[25px]'/></span>
                {/* <p>Search FAQs here</p> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Intro
