import Image from "next/image";
import { urlFor } from "../sanity";
import toast from "react-hot-toast";
import { removeFromFavorite } from "../redux/favoriteSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

interface Props {
    items: Product[];
    id: string;
}

function FavoriteProduct({id, items}: Props) {
    const dispatch = useDispatch()
    const removeItemFromFavorite = () => {
        dispatch(removeFromFavorite({ id }));

        toast.error(`${items[0].title} انت حذفت`, {
            position: "top-center"
        })
    }

    return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
        <div className="relative h-44 w-44">
            <Image objectFit="cover" layout="fill" alt="" src={urlFor(items[0].images[0]).url()}/>
        </div>

        <div className="flex flex-1 items-end lg:items-center">
            <div className="felx-1 space-y-4">
                <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
                    <h4 className="font-semibold lg:w-96">
                        {items[0].title}
                    </h4>
                </div>

                <Link href={`/project/${items[0].slug.current}`} >
                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        انظر معلومات
                    </p>
                </Link>

            </div>
            <div className="flex flex-col items-end space-x-4">
                <h4 className="text-xl text-center font-semibold lg:text-2xl">
                    بسعر يبدء من 
                        <div>
                            {items[0].price}
                        </div>
                    جنيه مصري
                    </h4>
                <button 
                    onClick={removeItemFromFavorite}
                    className='text-blue-500 hover:underline'
                >حذف</button>
            </div>
        </div>  
    </div>
  )
}

export default FavoriteProduct;