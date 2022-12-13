import React from 'react';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";

interface Props {
    fixHight?: boolean
}
function Footer({fixHight}: Props) {
  return (
    <div>
        <div className={
        `bg-[#680000e6] text-[#FFF] py-[10px] px-0 text-base rtl flexCenter
        ${fixHight 
            ? 
            'xl:absolute lg:absolute md:absolute w-full bottom-0' 
            : 
            null
        }`
        }>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-box">
                            <h2 className='text-[#ffffff]'>عن الشركة</h2>
                            <p className='text-[#bbb]'>نفخر بتقديم خدماتنا الاستشارية والبيعية في مجال الاستثمار والتطوير العقاري لأكثر من 30.000 عميل في مصر خلال السنوات الست الماضية، وذلك منذ انطلاقنا في عام 2333.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-box">
                            <h2>تواصل معنا</h2>
                            <ul className='text-[#bbb]'>
                                <li> 
                                    <a className='flexCenter' 
                                    href="#" 
                                    target="_blank">
                                        <LocationMarkerIcon className='w-[2rem]' />
                                        مركز قريش التجارى , شارع قريش , السعودية
                                    </a>
                                </li>
                                <li>
                                    <a className='flexCenter' href="tel:#">
                                        <PhoneIcon className='w-[2rem]' />
                                        #3456
                                    </a>
                                </li>
                                <li>
                                    <a className='flexCenter' href="mailto:#">
                                        <MailIcon className='w-[2rem]' /> 
                                        #.COM
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h2>روابط مهمة</h2>
                            <ul className="text-[#bbb]">
                                <li>
                                    <a href="https://mybookings-travel.com/">حجوزاتي ترافل</a>
                                </li>
                                <li>
                                    <a href="#">مشروعات تجارية</a>
                                </li>
                                <li>
                                    <a href="#">مشروعات ساحلية</a>
                                </li>
                                <li>
                                    <a href="#">التواصل معنا</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer