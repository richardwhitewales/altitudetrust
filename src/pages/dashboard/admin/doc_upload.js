import Head from 'next/head'
import { getWSSchema, getWPSchema, getLBSchema } from '@/components/schema';
import DocUpload from '@/components/dashboard/admin/content/doc_upload'
import Sidebar from '@/components/dashboard/admin/navigation/sidebar';
import Navbar from '@/components/dashboard/admin/navigation/navbar';

export default function DocUploadPage() {
    // page default data
    const pageName = "Altitudetrust - Admin Doc Upload";
    const pageDesc = "Welcome To Altitudetrust Get Started PROFESSIONAL BANKING SERVICE Most of our online content and services are available in English. We do have English content to get you started and are continuously striving to improve the online experience for our international customers. Need a Loan ? Sign Up Why Bank with US? Besides saving fixed investments";
    const baseURL = "https://altitudetrust.com";
    const pageURL = "https://altitudetrust.com/dashboard/doc_upload";

    // web site schema
    const wSSchema = getWSSchema(baseURL);

    // web page schema
    const wPSchema = getWPSchema(
        pageName,
        pageDesc,
        baseURL,
        [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Admin Doc Upload",
                "item": pageURL
            }
        ]
    );

    // local business schema
    const lBSchema = getLBSchema(
        pageName,
        {
            streetAddress: "76 Wellington St, Leeds LS1 4DL, UK",
            addressLocality: "Wellington St",
            addressRegion: "Leeds",
            postalCode: "4DL",
            addressCountry: "UK"
        },
        "+44-741-837-1280",
        "info@altitudetrust.com",
        baseURL,
        `${baseURL}/logo.png`,
        "Cash, Credit Card, Transfer",
        "NGN, USD, EURO",
        "Mo-Fr 09:00-17:00",
        {
            latitude: "53.796695",
            longitude: "1.553294"
        }
    );

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={pageDesc} />
                <meta name="keywords" content="Bank Accounts, Mortgages, Loans and Savings" />
                <meta name="theme-color" content="#161A1E" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta name="author" content="Altitudetrust Limited" />
                <title>{pageName}</title>

                <meta property="og:title" content={pageName} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:image:width" content="1277" />
                <meta property="og:image:height" content="473" />
                <meta property="og:url" content={baseURL} />
                <meta property="og:description" content={pageDesc} />
                <meta property="og:site_name" content={pageName} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wSSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wPSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lBSchema) }} />
            </Head>

            <main className="d-flex" style={{ paddingTop: "6.5rem" }}>
                <Sidebar />
                <Navbar />
                <DocUpload />
            </main>
        </>
    )
}
