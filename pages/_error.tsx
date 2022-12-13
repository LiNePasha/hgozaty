import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import SeoTags from "../components/SeoTags";

interface Props {
    res: {
        statusCode: string
    };
    err: {
        statusCode: string
    };
    statusCode: string
}

function Error({ statusCode }: Props) {
    const router = useRouter()

    const errorHandler = (errorText: string) => {
        return (
            <>
            <SeoTags 
                title={`ايرور الصفحة غير موجودة`} 
                description="حجوزاتي شركة كبيرة في مجال كذا وكل حاجة" 
            />
                <span className="text-2xl">
                    عذرا الصفحة الذي تبحث عنها غير موجودة او حدث شئ ما 
                    {errorText} 
                    {statusCode}
                </span>
                <Button 
                    margin="mt-4" 
                    title="اذهب الي الصفحة الرئيسية" 
                    onClick={() => {
                        router.push(`/`, undefined, { shallow: true })
                    }}
                />
            </>
        )
    }
    return (
        <>
        <Head>
        <title>Hgozaty</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="flexCenter flex-col h-[50vh]">
            {statusCode
                ? 
                <>
                    {errorHandler('ايرور كود')}
                </>
                : 
                <>
                    {errorHandler('غير معروف')}
                </>
            }
        </div>

        <Footer fixHight={true} />
        </>
    )
  }
  
  Error.getInitialProps = ({ res, err }: Props) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error;