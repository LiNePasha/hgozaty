import React from 'react';
import { GetServerSideProps } from 'next';
import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';
import Header from '../../components/Header';
import Head from 'next/head';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import SearchForm from '../../components/SearchForm';
import SeoTags from '../../components/SeoTags';

interface Props {
    products: Product[];
    searchValue : string;
}

function Search({products, searchValue}: Props) {

    const filterProducts = (
            products.filter((ele) => 
            ele.description.includes(searchValue) 
            || 
            ele.categoryTitle.includes(searchValue))
)
console.log(searchValue == 'all' );

    return (
    <>
    <SeoTags 
        title={`بحث علي ${searchValue}`} 
        description="حجوزاتي شركة كبيرة في مجال كذا وكل حاجة" 
    />

    <Header />

    <section className='bg-[#f2ede2]'>
        <SearchForm />
    </section>

    <section className='rtl p-4 bg-[#f2ede2] text-right'>
        نتائج البحث عن '{searchValue}'  
    </section>

    <section className='flex justify-center bg-[#f2ede2]'>
            {
                filterProducts.length !== 0 && searchValue !== ''
                ? 
                <div className={productWrapper}>
                    {
                    filterProducts.map(product => (
                        <Product product={product} key={product._id} />
                    ))
                    }
                </div>
                : 
                searchValue == 'all' 
                ?
                <div className={productWrapper}>
                    {
                    products.map(product => (
                        <Product product={product} key={product._id} />
                    ))
                    }
                </div>
                :
                <div className='rtl m-4 text-right'
                >لا يوجد نتائج لهذا البحث جرب البحث بكلمات أخرى
                </div>
            }
    </section>

    <Footer 
    fixHight={
        filterProducts.length !== 0 && searchValue !== ''
        ? 
        false
        : 
        searchValue == 'all'
        ?
        false
        :
        true
        } />
    </>
)}

export default Search;

// Some Styling Variables For Clean Code
const productWrapper = 'my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'

// Backend Code To Fetch Products From Sanity Api [only data needed]
export const getServerSideProps: GetServerSideProps = async (context) => {

    const products = await sanityClient.fetch(
      groq`*[_type == "product"]
      {
        _id,
        _createdAt,
        slug,
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
      }
      `);

    // Condition If Params Not Fount In Slug[Api] => Return TO ERROR Page
    if(!context.query.value) {
        return {
            notFound: true
        }
    }

    return{
      props: {
        products,
        searchValue: context.query.value
      },
    }
  }