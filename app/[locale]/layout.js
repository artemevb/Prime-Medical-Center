import './_styles/globals.css';
// import 'antd/dist/reset.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/app/[locale]/_components/Header/Header";
import Footer from "@/app/[locale]/_components/Footer/Footer";
import Head from 'next/head'; // Импортируем компонент Head для метатегов

export const metadata = {
  title: {
    template: "%s | Prime Medical Center",
    default: "Prime Medical Center"
  },
  description: "Prime Medical Center - центр гастроэнтерологии и медицины. Оказываем широкий спектр услуг для вашего здоровья.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png',
  },
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  const pageTitle = metadata.title.default;
  const pageDescription = metadata.description;

  return (
    <html lang={locale}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
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
