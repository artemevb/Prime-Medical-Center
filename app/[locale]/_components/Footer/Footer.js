import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import resultLogo from "@/public/svg/result-logo.svg";
import Logo_Footer from "@/public/images/Logo_Footer.png";

const FooterLink = ({ text }) => <div className="mt-[8px] mdx:mt-[12px]">{text}</div>;

const FooterSection = ({ title, links, locale }) => (
  <div className="flex flex-col slg:w-6/12 max-md:ml-0 max-md:w-full">
    <nav className="flex flex-col grow text-xl text-neutral-900  max-slg:mt-10">
      <Link href={`/${locale}/${title.url}`}>
        <h3>{title.title}</h3>
      </Link>
      {links.map((link, index) => (
        <Link href={`/${locale}/${link.url}`} key={index}>
          <FooterLink text={link.title} />
        </Link>
      ))}
    </nav>
  </div>
);

function Footer({ locale }) {
  const t = useTranslations();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col w-full bg-[#F9F9F9] max-md:max-w-full">
        <header className="flex flex-col justify-center items-start xl:items-center px-[16px] py-10 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col self-start ">
            <div className="w-[40%]">
              <Image
                src={Logo_Footer}
                width={500}
                height={500}
                alt="Prime logo"
                className="h-full w-full "
              /></div>
            <div>
              <h4 className="text-[#000000] font-bold lh text-[20px] mdx:text-[24px] xl:text-[26px] pt-[30px] pb-[17px]">{t("Footer.telegram_info")}</h4>
              <button className=" bg-[#00863E] hover:bg-[#398f61] w-full px-[35px] mdx:px-[20px] mdx:max-w-[240px] min-h-[50px] hover:[#398f61]">
                <p className="text-white text-[14px] mdx:text-[16px] font-bold">Telegram</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 w-full max-w-[1434px] max-slg:flex-wrap max-md:max-w-full">
            <div className="flex-auto max-w-full lg:flex lg:justify-end">
              <div className="flex gap-5 justify-between max-mdl:flex-row max-md:gap-0">
                <FooterSection
                  locale={locale}
                  title={{ title: t("Footer.services") }}
                  links={[
                    { title: t("Footer.Navigation.laboratory"), url: "laboratory" },
                    { title: t("Footer.Navigation.consultation"), url: "consultation" },
                    { title: t("Footer.Navigation.services_1"), url: "#" },
                    { title: t("Footer.Navigation.services_2"), url: "#" },
                  ]}
                />
                <FooterSection
                  locale={locale}
                  title={{ title: t("Prime Medical Center") }}
                  links={[
                    { title: t("Footer.Navigation.about"), url: "about" },
                    { title: t("Footer.Navigation.doctors"), url: "doctos" },
                    { title: t("Footer.Navigation.news"), url: "news" },
                    { title: t("Footer.Navigation.contacts"), url: "contacts" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mt-[50px] flex flex-col">
            <h4 className="font-bold text-[18px] mdx:text-[20px] xl:text-[20px] mb-[16px]">{t("Footer.Navigation.contacts")}</h4>
            <a href="tel:+998781131343" className="hover:underline text-black  text-[16px] mdx:text-[20px] ">+998 (78) 113 13 43</a>
            <a href="mailto:administrative@prime-medical.uz" className="text-black text-[16px] mdx:text-[20px]  mt-[8px]">administrative@prime-medical.uz</a>
            <p className="text-[16px] mdx:text-[20px] max-w-[331px] mt-[8px]">{t("Footer.addresses")}</p>
          </div>
        </header>
        <footer className="flex flex-col items-center px-[16px] pb-2.5 w-full text-base text-red-400 bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1440px] max-md:max-w-full">
            <div className="shrink-0 h-px bg-neutral-200 max-md:max-w-full" />
            <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
              <p className="flex-auto my-auto text-[#B3B3B3]">© 2024 {t("Footer.info")}</p>
              <a
                target="_blank"
                href="https://result-me.uz/api/redirect?from=aW50ZXJsYWI="
              >
                <Image
                  src={resultLogo}
                  width={500}
                  height={500}
                  alt="Result logo"
                  className="h-full max-h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
