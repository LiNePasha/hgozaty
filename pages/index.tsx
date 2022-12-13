import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import Header from '../components/Header';
import Product from '../components/Product';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import { urlFor } from '../sanity';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import SeoTags from '../components/SeoTags';

interface Props {
  categories: Category[];
  products: Product[];
}

const App = ({ categories , products}: Props) => {

  const showProducts = (category: number) => {
    // filter products by category number
    return products.filter(product => product.category._ref === categories[category]._id)
    .map(product => (
        <Product product={product} key={product._id} />
    ));
  }


  return (
    <>
     <SeoTags 
        title={`الصفحة الرئيسية`} 
        description="حجوزاتي شركة كبيرة في مجال كذا وكل حاجة" 
      />

      <Header />
      
    <main className='relative'>

      <section className={homeWrapper}>
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
      </section>

      <section className='py-10'>
        <SectionTitle title="العقارات حسب المنطقة" />
        <div className='flexCenter'>
          <div className={cityCardGrid}>
            {categories.map((category) => {
              return (
                <Link 
                  href={`/search?value=${category.title}`} 
                  key={category._id} 
                  className={cityCardWrapper}>
                  <div className="relative overflow-hidden h-80 w-[320px] md:w-[400px]">
                    <Image 
                      src={urlFor(category.images[0]).url()}  
                      objectFit='cover' 
                      layout="fill"
                      className='group-hover:scale-125 transition-transform' 
                      alt="صورة منتج"
                    /> 
                    <div className={imageOverlay}></div>
                    <div className={cityCardDetails}>
                      <h1 className='text-4xl font-bold text-white'>
                        {category.title}
                      </h1>
                      <span className={projectsSpan}>
                        {
                        products.filter(product => product.category._ref === category._id)
                        .length 
                        }
                        مشروع 
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className='bg-[#f2ede2] py-10'>
        <SectionTitle title="العقارات المميزة" />
        <div className='flex justify-center'>
          <div className={specialProductsGrid}>
              {showProducts(1)}
          </div>
        </div>
      </section>

      <section className='bg-[#f2ede2] py-10'>
        <SectionTitle title="هل أنت مستعد أن تنمو مع الأفضل في السوق العقاري؟" />
        <div className='flex flex-col items-center justify-center'>
          <div className='py-10 px-10 text-white flexCenter flex-col bg-[#680000e6]'>
            <span className="text-[#bbb]">دعونا نتحدث عن مستقبلك</span>
            <h4 className='leading-10 text-center'>        
              اكتشف ما يمكن أن تقدمه لك العلامة التجارية العقارية الرائدة في العالم
            </h4>
            <Button title="اتصل بنا" />
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  )
}

export default App;

// Some Styling Variables For Clean Code
const homeWrapper = 'flex flex-col justify-center relative items-center heightCalc bg-black'
const cityCardWrapper = 'group relative flexCenter h-fit flex-col space-y-3 overflow-hidden cursor-pointer select-none rounded-xl md:w-[400px] '
const cityCardGrid = 'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
const imageOverlay = 'absolute inset-0 bg-gradient-to-b from-black via-transparent to-black'
const cityCardDetails = 'absolute inset-0 flexCenter flex-col text-center translate-y-[50%] group-hover:translate-y-0 transition-all'
const projectsSpan = 'text-lg bg-[#f10025] rounded-full p-2 m-4 italic text-white mb-3 rtl'
const specialProductsGrid = 'my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'

// Backend Code To Fetch Products & Categories From Sanity Api [All Data]
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return{
    props: {
      categories,
      products,
    },
  }
}

