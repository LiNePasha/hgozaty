import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';

function Header() {
  const admin = false;
  return (
    <header className='hgozaty-header justify-around bg-[#f2ede2]'>
        <div className='flexCenter'>
          <Link href='/'>
            <div className='flexCenter pl-8 cursor-pointer '>
                <Image src='/عقار.png' alt='hgozaty logo' width={60} height={60} />
                <h1 className='text-2xl'>حجوزاتي عقارات</h1>
            </div>
          </Link>
          <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
              <a className='pl-8 headerLink'>الرئيسية</a>
              <a className='headerLink'>صفحة 2</a>
              <a className='headerLink'>صفحة 3</a>
              <a className='headerLink'>صفحة 4</a>
          </div>
        </div>
        
        <div className='flexCenter'>
          <Link href='/saved-hgozaty'>
            <div className='relative cursor-pointer pl-3'>
              <HeartIcon className='headerIcon'/>
            </div>
          </Link>
          {
            admin 
            ? 
            <Link href='/login' className='headerLink'>تسجيل الدخول</Link>
            : 
            null
          }
        </div>
    </header>
  )
}


export default Header