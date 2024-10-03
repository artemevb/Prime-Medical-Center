import './_styles/globals.css';
// import 'antd/dist/reset.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/app/[locale]/_components/Header/Header";
import Footer from "@/app/[locale]/_components/Footer/Footer";

export const metadata = {
  title: {
    template: "%s",
    default: "Prime Medical Center"
  },
  description: "Prime Medical Center",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png',
  },
}


export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
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
