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
