import{ useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from './Button';
import { toast } from 'react-hot-toast';

function SearchForm() {
    const [firstname,setFirstName] = useState('')
    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(firstname != ''){
            router.push(`/search?value=${firstname}`, undefined, { shallow: false })
        }else {
            router.push(`/search?value=all`, undefined, { shallow: false })
        }
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)} className='rtl p-8'>
        <div 
        className="flex justify-between overflow-hidden
        bg-white shadow shadow-black
        ">
        
        <input  
        onChange={(event) => setFirstName(event.target.value)} 
        type="text" 
        placeholder='أبحث عن المنطقة ك  مثال "الساحل الشمالي"'
        className='block w-full flex-1 py-2 px-3 focus:outline-none' 
        />

        <Button 
        title="ابحث" 
        margin='m-1'
        />
        </div>
    </form>
)
}

export default SearchForm;