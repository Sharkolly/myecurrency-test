import down from '../../assets/firstImgSlider.png';
import up from '../../assets/secondImgSlider.png';
import stars from '../../assets/Group 18.svg';

const ProductReviews = () => {
  return (
    <section className="w-9/12 mx-auto mt-16 max-lg:w-[85%]">
      <h1 className="text-italic font-bold text-2xl mb-12">Product Reviews</h1>
        <div className="flex gap-8 max-lg:flex-col">
          <div className='bg-white w-[26%] shadow-companies rounded-md max-lg:w-full max-lg:mx-auto'>
            <img src={down} alt="Pen Image" className='w-full' />
            <div className="px-6 pb-6">
              <p className='italic text-italic mt-4 text-sm h-[7.5rem]'>Works great! Just use it and then relax, I fall asleep with no problem every time I use it.</p>
              <h2 className='font-bold text-md text-italic mb-2'>Racheal Dill</h2>
              <span className=''>
                <img src={stars} alt="Stars Image" />
              </span>
            </div>
          </div>
          <div className='bg-white w-[26%] shadow-companies rounded-md max-lg:mx-auto  max-lg:w-full'>
            <img src={up} alt="Pen Image" className='w-full' />
            <div className="px-6 pb-6">
              <p className='italic text-italic mt-4  text-sm h-[7.5rem]'>It really helps me fall right to sleep compared to melatonin pills.</p>
              <h2 className='font-bold text-md text-italic mb-2'>Javier Mendez</h2>
              <span className=''>
                <img src={stars} alt="Stars Image" />
              </span>
            </div>
          </div>
          <div className='bg-white w-[26%] shadow-companies rounded-md max-lg:mx-auto  max-lg:w-full'>
            <img src={up} alt="Pen Image" className='w-full' />
            <div className="px-6 pb-6">
              <p className='italic text-italic mt-4  text-sm h-[7.5rem]'>I&apos;ve tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.</p>
              <h2 className='font-bold text-md text-italic mb-2'>Naomi Nwazurike</h2>
              <span className=''>
                <img src={stars} alt="Stars Image" />
              </span>
            </div>
          </div>
          <div className='bg-white w-[26%] shadow-companies rounded-md max-lg:mx-auto  max-lg:w-full'>
            <img src={down} alt="Pen Image" className='w-full' />
            <div className="px-6 pb-6">
              <p className='italic text-italic mt-4  text-sm h-[7.5rem]'>I have been falling asleep faster and sleeping thru the night.</p>
              <h2 className='font-bold text-md text-italic mb-2'>Nate Jacobs</h2>
              <span className=''>
                <img src={stars} alt="Stars Image" />
              </span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProductReviews
