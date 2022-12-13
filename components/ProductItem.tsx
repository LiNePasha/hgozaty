import Image from 'next/image';
import NextLink from 'next/link'
import { urlFor } from '../sanity';

interface Props {
    product: Product;
}

function ProductItem({ product }: Props) {
    return (
    <div>
        <NextLink href={`/product/${product.slug.current}`} passHref >
            <div>
                <div className='cardMedia'>
                    <Image src={urlFor(product.images[0]).url()} layout="fill" alt="اتيىت" />
                    <h4>
                        {product.title}
                    </h4>
                </div>
                <div className="cardContent">
                    <h4>{product.title}</h4>
                </div>
            </div>
        </NextLink>
    </div>
    )
}

export default ProductItem