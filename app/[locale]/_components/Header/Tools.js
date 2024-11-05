"use client";
import Image from "next/image";
import MenuIcon from "@/app/[locale]/_components/MenuIcon";
import Menu from "@/app/[locale]/_components/Menu";
import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import ruFlag from "@/public/svg/flags/flag-for-russia-svgrepo-com.svg";
import uzFlag from "@/public/svg/flags/flag-for-uzbekistan-svgrepo-com.svg";
import globus from "@/public/svg/header/globus.svg";
import phone_green from "@/public/svg/phone-green.svg";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "framer-motion";
import TypeService from '../Modal/TypeService'

export default function Tools({ navOptions, locale }) {
  const availableLocales = ["uz", "ru"];
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations();

  const pathname = usePathname();

  // Отключение скролла при открытом Menu
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenMenu = () => {
    setMenu(true);    // Открываем меню
  };

  const handleCloseMenu = () => {
    setMenu(false);   // Закрываем меню
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex gap-5 max-mdx:gap-2 justify-between self-stretch my-auto">
      <div className="flex gap-2 text-base items-center whitespace-nowrap my-1 xl:flex-row-reverse">

        <div className="flex gap-0 justify-center px-2 mdx:px-3 max-mdx:py-2 border-solid text-[#00863E]">

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full items-center bg-white text-base font-medium text-[#00863E]"
                onClick={toggleDropdown}
              >
                <Image priority src={globus} width={25} height={25} alt="globus icons" quality={100} className="mr-[8px]" />
                {locale.toUpperCase()}
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 flex flex-col gap-2 ml-3 w-full">
                  {availableLocales.map((lng) => (
                    <Link
                      key={lng}
                      href={pathname}
                      locale={lng}
                      style={{ marginLeft: 10, color: locale === lng ? "red" : "black" }}
                      className="hover:font-bold transition-all duration-300 flex gap-2 items-center"
                    >
                      {lng === "uz" ? (
                        <Image src={uzFlag} height={100} width={100} quality={100} alt="Uz Flag" className="w-4 h-4" />
                      ) : (
                        <Image src={ruFlag} height={100} width={100} quality={100} alt="Ru Flag" className="w-4 h-4" />
                      )}
                      {lng.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
        <div href="tel:+998781131343" className="border p-[10px] hidden mdl:block xl:hidden ">
            <Image src={phone_green} height={100} width={100} quality={100} alt="phone" className="w-[30px] h-[30px]" />
          </div>
        <div className="flex items-center gap-4 max-mdx:gap-1 my-auto">
          <button onClick={openModal} className="hidden mdx:block bg-[#00863E] hover:bg-[#398f61] w-full px-[52px] max-w-[200px] mdx:h-[50px] font-extrabold">
            <p className="text-white">{t("Header.button")}</p>
          </button>
        </div>

        <div onClick={handleOpenMenu} className="block lg:hidden">
          <MenuIcon />
        </div>
        <div href="tel:+998781131343" className="border p-[10px] hidden xl:block">
            <Image src={phone_green} height={100} width={100} quality={100} alt="phone" className="w-[30px] h-[30px]" />
          </div>
      </div>

      <AnimatePresence>
        {menu && (
          <Menu
            menu={menu}
            closeMenu={handleCloseMenu}
            navOptions={navOptions}
            locale={locale}
          />
        )}
      </AnimatePresence>
      {isModalOpen && <TypeService closeModal={closeModal} />}
    </div>
  );
}
