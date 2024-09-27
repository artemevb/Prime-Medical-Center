import { useTranslations } from "next-intl";
const AboutService = () => {
    const t = useTranslations('Main');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            <div>
                <h2 className="text-[30px] font-semibold mdx:text-[40px] xl:text-[45px]">{t("about_company")}</h2>
                <h5 className="text-[15px] text-[#666] font-medium max-w-[380px] mdx:text-[18px]">{t("title_company")}</h5>
            </div>
            
        </div>
    );
};

export default AboutService;