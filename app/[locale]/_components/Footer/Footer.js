import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import resultLogo from "@/public/svg/result-logo.svg";
import Logo_Footer from "@/public/images/Logo_Footer.png";

const FooterLink = ({ text }) => <div className="mt-5">{text}</div>;

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
      <div className="flex flex-col w-full bg-slate-50 max-md:max-w-full">
        <header className="flex justify-center items-center px-[16px] py-10 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
          <div className="flex justify-between gap-5 w-full max-w-[1434px] max-slg:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start">
              <Image
                src={Logo_Footer}
                width={500}
                height={500}
                alt="Prime logo"
                className="h-full max-h-10 w-auto"
              />

            </div>
            <div className="flex-auto max-w-full lg:flex lg:justify-end">
              <div className="flex lg:w-2/3 gap-5 max-mdl:flex-col max-md:gap-0">
                <FooterSection
                  locale={locale}
                  title={{ title: t("Footer.about"), url: "about" }}
                  links={[
                    { title: t("Footer.partners"), url: "partners" },
                    { title: t("Footer.sertificates"), url: "about/licences" },
                    { title: t("Footer.equipments"), url: "" },
                    { title: t("Footer.pricelist"), url: "analyze" },
                  ]}
                />
                <FooterSection
                  locale={locale}
                  title={{ title: t("Footer.for-legal"), url: "legal" }}
                  links={[
                    { title: t("Footer.preparation"), url: "instructions" },
                    { title: t("Footer.feedback"), url: "" },
                    { title: t("Footer.vacancy"), url: "vacancies" },
                  ]}
                />
              </div>
            </div>
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
