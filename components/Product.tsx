import Image from "next/image";
import { urlFor } from "../sanity";
import { LocationMarkerIcon, CashIcon } from "@heroicons/react/outline";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../redux/favoriteSlice";
import toast from "react-hot-toast"
import Link from "next/link";

interface Props {
    product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();

  // Payload addItemToFavorite
  const addItemToFavorite = () => {
    dispatch(addToFavorite(product));

    toast.success(`${product.title} اتحط في الاعلانات المحفوظة`, {
      position: "top-center",
      className: "text-red-600"
    });
  };


  return (
    <div className={productWrapper}>
        <div className="relative h-64 w-full md:h-60">
            <Image 
            objectFit="cover" 
            layout="fill" 
            alt="صورة العقار" 
            src={urlFor(product.images[0]).url()} 
            />
              <div className="price flexCenter w-full absolute -bottom-2">
                <span className={priceWrapper}>
                    <span className="pr-4">
                    {product.price}
                    : <CashIcon className="w-6 inline-block text-lg" /> 
                    </span>
                    <span> 
                    {product.categoryTitle}
                    : <LocationMarkerIcon className="w-6 inline-block text-lg" /> 
                    </span>
                </span>
            </div>
        </div>

        <div className="details text-right">
          <Link href={`/project/${product.slug.current}`} >
            <div className={productTitleWrapper} >
                {product.title}
            </div>
          </Link>
          <div className="moreDetails flex-col xl:flex-row lg:flex-row flexCenter rtl">
            عدد الغرف : {product.rooms} 
            |
            الحمامات : {product.bathrooms}
            <Button title="احفظ الأعلان" margin="mr-4" onClick={addItemToFavorite} />
          </div>
        </div>
    </div>
  )
}

// Some Styling Variables For Clean Code
const productWrapper = 'flex relative h-fit w-[320px] flex-col space-y-3 productShadow select-none rounded-xl bg-[#fff] md:h-[450px] md:w-[400px]'
const priceWrapper = 'text-white inline-block py-1 px-5 shadow rounded-full bg-[#f10025]'
const productTitleWrapper = 'rtl text-2xl p-3 cursor-pointer transition-all hover:text-[#f10025]'

export default Product