import Head from 'next/head'

interface Props {
    title: string;
    description: string;
}

// This Only Simple Tags For Seo
function SeoTags({title, description}: Props) {
  return (
    <Head>
        <meta charSet="UTF-8" />
        <title>{title} | حجوزاتي عقارات</title>
        <link rel="icon" href="/عقار.png" />
        <meta name="description" content={description} />
        <meta property="og:locale" content="ar_EG" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`حجوزاتي في الاصل شركة سياحة فتحت دخلت في مجال العقارات عام بلا بلا &hellip; استكشف العقارات &quot;${title}&quot`} />
        <meta property="og:url" content="url" /> {/* not yet */}
        <meta property="article:publisher" content="https://www.facebook.com/mybookingstravel" />
        <meta property="og:image" content="/عقار.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="380" />
        <meta property="og:image:type" content="image/jpg" />
    </Head>
  )
}

export default SeoTags