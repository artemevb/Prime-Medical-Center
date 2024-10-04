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
  description: "Prime Medical Center - Ваш надежный медицинский центр.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png',
  },
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  // Определяем заголовок страницы. Можно расширить для поддержки локалей.
  const pageTitle = metadata.title.default; // Здесь можно добавить динамическое название страницы
  const pageDescription = metadata.description; // Здесь можно добавить динамическое описание страницы

  return (
    <html lang={locale}>
      <Head>
        {/* Устанавливаем заголовок страницы */}
        <title>{pageTitle}</title>
        {/* Устанавливаем метатег description */}
        <meta name="description" content={pageDescription} />
        {/* Иконки сайта */}
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
