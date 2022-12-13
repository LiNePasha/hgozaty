import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteItems } from "../redux/favoriteSlice";
import Button from '../components/Button';
import FavoriteProduct from '../components/FavoritetProduct';
import Footer from '../components/Footer';
import SeoTags from '../components/SeoTags';

function Favorite() {

  const items = useSelector(selectFavoriteItems);
  const router = useRouter();
  const [groupedItemsInFavorite, setGroupedItemsInFavorite] = useState(
    {} as { [key: string]: Product[] }
  )

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item)
      return results;
    }, {} as { [key: string]: Product[] })

    setGroupedItemsInFavorite(groupedItems)
  }, [items]);

  return (
    <div className='min-h-screen overflow-hidden bg-[#f2ede2]'>
      <SeoTags 
        title={`صفحة الاعلانات المحفوظة`} 
        description="حجوزاتي شركة كبيرة في مجال كذا وكل حاجة" 
      />

      <Header />
      <main className='mx-auto rtl max-w-5xl pb-24'>
        <div className='px-5 r'>
          <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>
            {items.length > 0 ? "اعلاناتك محفوظة" : "انت لا تملك اي اعلانات  محفوظة"}
          </h1>
          <p className="my-4">
            انت هنا ونحن هنا 
          </p>

          {items.length === 0 && (
            <Button title="شوف عقاراتنا" onClick={() => router.push(`/search?value=all`, undefined, { shallow: false })} />
          )}
        </div>

        {items.length > 0 && (
          <div className='mx-5 md:mx-8'>
            {Object.entries(groupedItemsInFavorite).map(([key, items]) => (
              <FavoriteProduct key={key} id={key} items={items} />
            ))}
          </div>
        )}
      </main>

      <Footer fixHight={items.length > 0 ? false : true}/>
    </div>
  )
}

export default Favorite;