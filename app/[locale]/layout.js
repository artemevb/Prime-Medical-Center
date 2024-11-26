import './_styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/app/[locale]/_components/Header/Header";
import Footer from "@/app/[locale]/_components/Footer/Footer";
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const metadata = {
    title: "PRIME MEDICAL CENTER - бывший Guncha Med: гастроэнтерологический центр",
    description:
      "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
    keywords:
      "guncha med гастроэнтерологический центр prime medical center центр гастроэнтерологии клиника частная клиника анализы ташкент клиника ташкент",
    openGraph: {
      title: "Главная",
      description:
        "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
      url: "https://pmcenter.uz",
      type: "website",
      images: [
        {
          url: "https://pmcenter.uz/Prime_MedicalCenter.png",
          width: 800,
          height: 600,
          alt: "Prime Medical Center",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Главная",
      description:
        "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
      images: ["https://pmcenter.uz/Prime_MedicalCenter.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  return metadata;
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

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

        {/* Yandex.Metrika counter */}
        <script type="text/javascript">
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
        </script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/99047563" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>

        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R8ZJVFVMJJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8ZJVFVMJJ');
          `}
        </script>
      </Head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
