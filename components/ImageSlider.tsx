import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { urlFor } from '../sanity';

interface Props {
    product: Product;
}

function ImageSlider({product}: Props) {

  const images = product.images
  //indexs
    const [activeIndex , setActiveIndex] = useState(0)
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)

    //animation
    const [transLeft, setTransLeft] = useState(false)
    const [transRight, setTransRight] = useState(false)

    // Here Some Updates In Mounting...
    useEffect(() => {
      if(transRight){
        setTimeout(() => {
          setTransRight(false)
        }, 800)
      }

      if(transLeft){
        setTimeout(() => {
          setTransLeft(false)
          setIndex((index + 1) % images.length)
          setIndex1((index1 + 1) % images.length)
        }, 800)
      }
    }, [transLeft, transRight])

    //Handle Btns And Make Sure Im Have RIGHT [Index]
    const handlePrev = () => {
      setTransRight(true)
      setTransLeft(false)

      const nextIndex = index - 1;
      const nextIndex1 = index1 - 1;

      if (nextIndex < 0) {
        setIndex(images.length - 1)
      } else {
        setIndex(nextIndex)
      }

      if(nextIndex1 < 0){
        setIndex1(images.length - 1)
      } else {
        setIndex1(nextIndex1)
      }
    }

    const handleNext = () => {
      setTransLeft(true)
      setTransRight(false)
    }

    // WHEN Click Img Make Sure is right [image , animation]
    const handleImgClick = (indexImgClick: number) => {
      setActiveIndex(indexImgClick)
        console.log(indexImgClick);
      if(indexImgClick < index){
        setIndex(indexImgClick)
        setIndex1((indexImgClick + 1) % images.length)
        setTransRight(true)
        setTransLeft(false)
      } else {
        setIndex((indexImgClick - 1) % images.length)
        setIndex1((indexImgClick) % images.length)
        handleNext()
      }
    }

  return (
    <div className={sliderContainer}>
              <span className='h-auto w-auto p-3 font-extralight text-3xl'>
                {product.title}
              </span>
              
              <div className={sliderWrapper}>
              <Image 
                layout='fill' 
                objectFit='cover' 
                alt="" 
                src={urlFor(images[index == -1 ? 0 : index]).url()} 
                className={
                  `z-20 border-4 rounded-xl border-[#f10025] 
                  ${transLeft 
                    ? 
                    'transition duration-500 ease-linear transform -translate-x-full' 
                    : 
                    transRight 
                    ? 
                    'animate-slideLeft' 
                    : 
                    '' 
                    }`}/>
              <Image 
                layout='fill' 
                objectFit='cover' 
                alt="" 
                src={urlFor(images[index1]).url()} 
                className={
                  `z-0 border-4 rounded-xl border-[#f10025] 
                  ${transLeft 
                    ? 
                    'animate-slideRight' 
                    : 
                    transRight 
                    ? 
                    'transition duration-500 ease-linear transform translate-x-full' 
                    : 
                    '' 
                  }`}/>

                <div className={collectionWrapper}>
                  {images.map((el,indexImgClick) => {
                    return (
                      <div className='pl-3' key={product._id}>
                        <Image onClick={() => 
                          handleImgClick(indexImgClick)} 
                          className={`border-2 h-[70px]
                          ${
                            images[activeIndex] ===
                            images[indexImgClick] 
                            ? 
                            'border-red-500' 
                            : 
                            'opacity-70 border-gray-300'}
                          `}
                          src={urlFor(el).url()} 
                          alt="" 
                          width={80} 
                          height={100} />
                      </div>
                    )
                  })}
                </div>
                <div className="absolute top-[40%] flex justify-between z-40 w-full">
                  <button 
                  className='p-3 bg-[#f10025] text-white' 
                  onClick={handleNext}> 
                    التالي 
                    <ArrowSmRightIcon />
                  </button>
                  <button 
                  className='p-3 bg-[#f10025] text-white' 
                  onClick= {handlePrev}> 
                    السابق 
                    <ArrowSmLeftIcon />
                  </button>
                </div>
              </div>
            </div>
  )
}

// Some Styling Variables For Clean Code
const sliderContainer = 'flexCenter flex-col w-[100%] text-center pl-3 pr-3 sm:pl-8 sm:pr-8'
const sliderWrapper = 'imagee overflow-hidden relative z-20 w-[30rem] md:w-[50rem] rfv sm:w-[35rem] h-[20rem] md:h-[31rem] xl:p-0 md:p-0'
const collectionWrapper = 'absolute tost rounded-xl flex justify-center mt-8 bottom-0 z-30 w-full p-4 mx-auto'

export default ImageSlider;