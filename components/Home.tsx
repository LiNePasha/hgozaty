import Image from 'next/image';
import SearchForm from './SearchForm';


function Home() {

  return (
    <div 
      className='flex flex-col justify-center relative items-center heightCalc bg-black'>
        <Image 
          src='/homes.jpg' 
          alt='صورة عقارات' 
          objectFit='cover' 
          layout='fill' 
          className='opacity-70' 
        />
        <div className='absolute text-center z-10 w-3/4 '>
            <h1 className='text-5xl text-white'>ابحث عن بيتك الجديد</h1>
            <SearchForm />
        </div>
    </div>
  )
}

export default Home;

