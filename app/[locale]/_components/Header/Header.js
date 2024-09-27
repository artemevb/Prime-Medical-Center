import Navigation from "@/app/[locale]/_components/Header/Navigation";
import Logo from "@/app/[locale]/_components/Header/Logo";
import Tools from "@/app/[locale]/_components/Header/Tools";
import { useTranslations } from 'next-intl';

function Header({ locale }) {
  const t = useTranslations('Header');

  const navOptions = [
    { id: 1, name: t('services_url'), url: '/services' },
    { id: 2, name: t('doctors'), url: '/doctors' },
    { id: 3, name: t('about'), url: '/about' },
    { id: 4, name: t('news'), url: '/news' },
    { id: 5, name: t('contacts'), url: '/contacts' }
  ];

  return (
    <header className="flex justify-center h-[90px] max-mdx:h-[70px] border items-center px-4 lg:px-16 py-3 bg-white z-10 relative transition-all duration-150">
      <div className="flex gap-5 max-mdx:gap-2 justify-between items-center w-full max-w-[1440px] relative transition-all duration-150">
        <Logo />
        <Navigation locale={locale} navOptions={navOptions} />
        <Tools locale={locale} navOptions={navOptions} />
      </div>
    </header>
  );
}

export default Header;
