import type { GetServerSideProps } from 'next';
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import ImageSlider from '../../components/ImageSlider';
import SeoTags from '../../components/SeoTags';

// TypeScript
interface Props {
    product: Product;
  }


export default function productScreen({product}: Props) {

    const inputRender = (placeholder: string, type: string) => {
      return (
        <input 
        className='pr-4 pl-4 py-2 w-[90%] mt-4 text-right' 
        placeholder={placeholder}
        type={type} 
        />
      )
    }

    return (
      <div className='bg-[#f2ede2]'>
      <SeoTags 
          title={`${product.title.split('|')[0]}`} 
          description="حجوزاتي شركة كبيرة في مجال كذا وكل حاجة" 
      />
      <Header />
        <main className={mainSlug}>
        
            <ImageSlider product={product} />
            <div className={containerContent}>
              <div className={rowContentDetails}>
              <div className='bg-white p-[30px] inline-block w-full min-h-[1px] leading-6 rounded-sm text-right mt-8'>
                  <span className='text-2xl p-4 inline-block'>ملخص</span>
                  <table>
                    <tbody>
                      <tr>
                          {/* split text with word "T" for show time and date */}
                          {Array.from(product._createdAt.split('T').map(ele => {
                              return (
                                ele.includes('Z') 
                                ? 
                                <td>في تمام الساعة {ele.split('Z')} مساءا</td> // time 
                                : 
                                <td className="title">تم تنزيل المشروع في {ele}</td> // date
                              )
                            }))}
                      </tr>
                      <tr>
                        <td className="title">غرف نوم :
                          {product.rooms}
                        </td>
                        <td>الحمامات : 
                          {product.bathrooms}
                        </td>
                      </tr>
                      <tr>
                        <td className="title">  مساحة الوحدات : 
                        {product.unitsSpace}
                        </td>
                        <td>أنواع الوحدات : 
                          {product.typesUnits}
                        </td>
                      </tr>
                      <tr>
                        <td className="title">  السعر يبدء من : 
                          {product.price} ج.م / الوحدة 
                        </td>
                        <td>نظام الدفع : 
                          {product.payment}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={detailsWrapper}>
                  <span className='text-2xl p-4 inline-block'>التفاصيل</span>
                  <p className='text-[#3c394a]'>
                    {product.description}
                  </p>
                </div>

                <div className={`detailsShadow mb-8 ${detailsWrapper}`}>
                  <span 
                  className='p-4 text-2xl inline-block'>خدمات ومميزات 
                  {product.title.split('|')[0]}
                  </span>
                  <ul 
                  className='text-[#3c394a] pr-8 list-arabic leading-8' 
                  >
                    {product.pro.map(el => <li>{el}</li>)}
                  </ul>
                </div>
              </div>

              <div className='w-[100%] xl:w-[33.33333333%] lg:w-[33.33333333%] text-center sidepar responsiveSticky'>
                <span 
                  className='p-3 inherit mb-4 bg-[#f10025] text-white rounded-t-md'
                  >
                  تواصل معنا
                </span>

                <form action="">
                  {/* here im render input as a jsx element in func */}
                  {inputRender("أسمك","text")}
                  {inputRender("بريدك الألكتروني","text")}
                  {inputRender("رقم تيلفونك","text")}
                  <textarea className="py-2 pr-4 form-control text-right mt-4" 
                  cols={31} 
                  rows={8} 
                  aria-required="true" 
                  placeholder='اكتب التفاصيل' >
                  </textarea>
                  <Button title="أرسال" />
                </form>

                <div className='mt-4'>
                  <h2>لدينا ايضا خدمات سياحة وسفر تقدر تدخل وتشوف</h2>
                  <a href="https://mybookings-travel.com/" target='_blank'>
                    <img src={`/travel.svg`} alt="" />
                  </a>
                </div>
              </div>
            </div>
        </main>

          <Footer />
        </div>
    )
}

// Some Styling Variables For Clean Code
const mainSlug = 'w-[auto] rtl xl:w[1170px] lg:w-[1150px] md:w-[auto] mr-auto ml-auto';
const containerContent = 'flex xl:items-start items-center lg:items-center sm:items-start responsiveFlex flex-col xl:justify-around mt-16'
const rowContentDetails = 'flexCenter flex-col w-[100%] xl:w-[66.66666667%] lg:w-[66.66666667%] sm:w-[100%] text-center pl-3 pr-3 sm:pl-8 sm:pr-8'
const detailsWrapper = 'bg-white p-[30px] inline-block w-full min-h-[1px] leading-6 rounded-sm text-right mt-8'

// Backend Code To Fetch Data From Sanity Api With Slug
export const getServerSideProps: GetServerSideProps = async (context) => {

    const product = await sanityClient.fetch(
      groq`*[_type == "product" && slug.current == "${context.params?.slug}" ][0] 
      {
        _id,
        _createdAt,
        bathrooms,
        categoryTitle,
        description,
        price,
        rooms,
        images,
        title,
        unitsSpace,
        typesUnits,
        payment,
        pro
      }
      `);

    // Condition If Params Not Fount In Slug[Api] => Return TO ERROR Page
    if(!product) {
        return {
            notFound: true
        }
    }

    return{
      props: {
        product,
      },
    }
  }