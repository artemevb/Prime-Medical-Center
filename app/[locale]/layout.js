import './_styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/app/[locale]/_components/Header/Header";
import Footer from "@/app/[locale]/_components/Footer/Footer";
import Head from 'next/head';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const metadata = {
    title: "PRIME MEDICAL CENTER - бывший Guncha Med: гастроэнтерологический центр",
    description:
      "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
    keywords:
      "guncha med гастроэнтерологический центр prime medical center центр гастроэнтерологии клиника частная клиника анализы ташкент клиника ташкент",
    openGraph: {
      title: "PRIME MEDICAL CENTER - бывший Guncha Med: гастроэнтерологический центр",
      description:
        "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
      url: "https://pmcenter.uz",
      type: "website",
      images: [
        {
          url: "https://pmcenter.uz/images/Prime_MedicalCenter.png",
          width: 800,
          height: 600,
          alt: "Prime Medical Center",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PRIME MEDICAL CENTER - бывший Guncha Med: гастроэнтерологический центр",
      description:
        "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
      images: ["https://pmcenter.uz/images/Prime_MedicalCenter.png"],
    },
    alternates: {
      canonical: `https://pmcenter.uz`
    },
    robots: {
      index: true,
      follow: true
    },
  };

  return metadata;
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  // Define structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "PRIME MEDICAL CENTER",
    "alternateName": "Guncha Med",
    "url": "https://pmcenter.uz",
    "logo": "https://pmcenter.uz/images/Prime_MedicalCenter.png",
    "description": "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Узбекистан, Ташкент, Алмазарский район, ул.Беруни, д.1",
      "addressLocality": "Ташкент",
      "addressCountry": "UZ"
    },
    "telephone": "+998-78-113-13-43",
    "openingHours": "Mo-Fr 08:00-22:00",
    "sameAs": [
      "https://t.me/prime_medical_center",
      "https://www.instagram.com/prime_medical_center/",
      "https://www.youtube.com/@primemedicalcentertashkent?si=zsvKksa_R4qwUuPy",
      "https://www.facebook.com/people/Prime-Medical-Center/100085066009600/"
    ]
  };

  return (
    <html lang={locale}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://pmcenter.uz" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R8ZJVFVMJJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R8ZJVFVMJJ');
          `}
        </Script>

        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
            m[i].l=1*new Date(); 
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99047563, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/99047563" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}