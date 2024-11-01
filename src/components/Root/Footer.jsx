import { Link } from 'react-router-dom';
import Logo from '../../assets/Group.png';
import facebook from '../../assets/Group 48.svg';
import twitter from '../../assets/Group 47.svg';
import google from '../../assets/Group 46.svg';
import linkedIn from '../../assets/Group 45.svg';

const Footer = () => {
  return (
    <footer className="bg-mainColor mt-24
    pb-10">
      <div className="w-10/12 mx-auto">
        <div className='flex justify-center py-6'>
          <img src={Logo} alt="Logo Image" />
        </div>
        <div className="flex gap-10 mt-4 max-lg:flex-col max-lg:gap-3">
          <div className='text-footerColor'>
            <h2 className='font-bold text-white mb-5'>COMPANY</h2>
            <div className="flex flex-col gap-3">
              <p className='text-sm'>About</p>
              <p className='text-sm'>Blog</p>
              <p className='text-sm'>Contact</p>
              <p className='text-sm'>Jobs</p>
            </div>

            <div className="hidden max-lg:block max-lg:my-5">
              <hr />
            </div>
          </div>
          <div className='text-footerColor'>
            <h2 className='font-bold text-white mb-5'>CONTACT</h2>
            <div className="flex flex-col gap-3">
              <p className='text-sm'>Phone</p>
              <p className='font-bold text-white text-sm'>+234 708 507 3128</p>
              <p className='text-sm'>Address</p>
              <p className='font-bold text-white text-sm'>16, Ogindipe Close, Upston Close</p>
            </div>

            <div className="hidden max-lg:block max-lg:my-5">
              <hr />
            </div>
          </div>

          <div className='text-white w-[38%] max-lg:w-full'>
            <div className='border-r-2 pr-12  border-r-footerBorder max-lg:border-none max-lg:pr-0'>
              <h2 className='font-bold  mb-5'>CONSUMER ADVISORY</h2>
              <p className='text-sm'>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
              </p>
            </div>
            <p className='text-sm mt-5'>By using our website or product, you agree to follow our <br className='max-lg:hidden' /> <Link to='/' className='text-footerTerms'>terms of service.</Link> </p>

            <div className="hidden max-lg:block max-lg:my-5">
              <hr />
            </div>
          </div>


          <div className='text-footerColor flex flex-col gap-5 w-[24%] max-lg:w-full max-lg:gap-4'>
            <h2 className='font-bold text-white mb-2'>GET IN TOUCH</h2>
            <p className='text-sm'>Feel free to get in touch with us via email</p>
            <h2 className='font-bold text-white text-xl'>hello@sleepstiq.com</h2>
            <div className='flex gap-4'>
              <img src={facebook} alt="Facebook Logo" />
              <img src={twitter} alt="Twitter Logo" />
              <img src={google} alt="Google Logo" />
              <img src={linkedIn} alt="LinkedIn Logo" />
            </div>

            <p className='text-sm mt-5'>&copy; 2020@sleepstiq. All RIghts Reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer