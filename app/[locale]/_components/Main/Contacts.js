import { useTranslations } from "next-intl";
import arrow from "@/public/svg/arrow-right-green.svg";
import Image from "next/image";
import logo from "@/public/images/Logoabs.png";

const Contacts = () => {
    const t = useTranslations('Main.Contacts');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px] mb-[100px] mdx:mb-[120px] xl:mb-[150px]">
            <h2 className="font-semibold text-[30px] mdx:text-[40px] xl:text-[45px] lh mb-[25px] xl:mb-[35px]">{t("title")}</h2>
            <div className="">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9aa481ad71a76bcfed7a8f63710fd88297c51cbc39862a89fe247b752f0e27b&amp;source=constructor" width="100%" height="400" frameborder="0" className="min-h-[250px] mdx:min-h-[400px] xl:min-h-[550px]"></iframe>
            </div>
            <div className="grid gap-[12px] xl:gap-[20px] mdl:grid-cols-2 xl:grid-cols-4 mt-[16px] xl:mt-[24px]">
                <div className='border pt-[25px] pl-[20px] flex flex-col justify-start min-h-[150px] mdl:min-h-[174px]'>
                    <h5 className="text-[18px] mdx:text-[20px] xl:text-[22px]">{t("subtitle-1")}</h5>
                    <p className="text-[#9C9C9C] text-[14px] mdx:text-[16px] mt-[5px]">{t("text-1")}</p>
                </div>
                <div className='border pt-[25px] pl-[20px] flex flex-col justify-start min-h-[150px] mdl:min-h-[174px]'>
                    <a href="tel:+998781131343" className="text-[18px] mdx:text-[20px] xl:text-[22px]">+998 (78) 113 13 43</a>
                    <p className="text-[#9C9C9C] text-[14px] mdx:text-[16px] mt-[5px]">{t("text-2")}</p>
                </div>
                <div className='border pt-[25px] pl-[20px] flex flex-col justify-start min-h-[150px] mdl:min-h-[174px]'>
                    <h5 className="text-[18px] mdx:text-[20px] xl:text-[22px] max-w-[40%]">{t("subtitle-3")}</h5>
                    <p className="text-[#9C9C9C] text-[14px] mdx:text-[16px] mt-[5px]">{t("text-3")}</p>
                </div>
                <div className='border pt-[25px] pl-[20px] flex flex-col justify-start min-h-[150px] mdl:min-h-[174px]'>
                    <a href="mailto:administrative@prime-medical.uz" className="text-[18px] mdx:text-[20px] xl:text-[22px]">administrative@prime-medical.uz</a>
                    <p className="text-[#9C9C9C] text-[14px] mdx:text-[16px] mt-[5px]">{t("text-4")}</p>
                </div>
            </div>

        </div>
    );
};

export default Contacts;
