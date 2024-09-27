import { useTranslations } from "next-intl";
const AboutService = () => {
    const t = useTranslations('Main');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            <div>
                <h2 className="text-[30px] font-semibold mdx:text-[40px] xl:text-[45px]">{t("about_company")}</h2>
                <h5 className="text-[15px] text-[#666] font-medium max-w-[380px] mdx:text-[18px]">{t("title_company")}</h5>
            </div>
            <div className="w-full h-full grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 gap-5 xl:mt-[40px] mt-[20px]">
                {/* Первый круг */}
                <div className="border rounded-full flex flex-col items-center justify-center min-h-[328px] aspect-square text-[#666666] p-4">
                    <span className="text-[35px] mdx:text-[40px] text-[#00863E] flex flex-col items-center font-semibold">
                        17
                        <span className="text-[20px] mdx:text-[26px] font-semibold">{t("years_of_work")}</span>
                    </span>
                    <p className="mt-2 max-w-[80%] text-center text-[16px] xl:text-[18px] font-medium">{t("description_work")}</p>
                </div>

                {/* Второй круг */}
                <div className="border rounded-full flex flex-col items-center justify-center min-h-[328px] aspect-square text-[#666666] p-4">
                    <span className="text-[35px] mdx:text-[40px] text-[#00863E] flex flex-col items-center font-semibold">
                        10
                        <span className="text-[20px] mdx:text-[26px] font-semibold">{t("doctors")}</span>
                    </span>
                    <p className="mt-2 max-w-[80%] text-center text-[16px] xl:text-[18px] font-medium">{t("description_doctors")}</p>
                </div>

                {/* Третий круг */}
                <div className="border rounded-full flex flex-col items-center justify-center min-h-[328px] aspect-square text-[#666666] p-4">
                    <span className="text-[35px] mdx:text-[40px] text-[#00863E] flex flex-col items-center font-semibold">
                        4
                        <span className="text-[20px] mdx:text-[26px] font-semibold ">{t("directions")}</span>
                    </span>
                    <p className="mt-2 max-w-[80%] text-center text-[16px] xl:text-[18px] font-medium">{t("description_directions")}</p>
                </div>

                {/* Четвёртый элемент с дополнительным текстом */}
                <div className="border rounded-full flex flex-col items-center justify-center min-h-[328px] aspect-square text-[#666666] p-4">
                    <span className="text-[35px] mdx:text-[40px] text-[#00863E] flex flex-col items-center font-semibold">
                        900+
                        <span className="text-[20px] mdx:text-[26px] font-semibold">{t("analyzes")}</span>
                    </span>
                    <p className="mt-2 max-w-[80%] text-center text-[16px] xl:text-[18px] font-medium">{t("description_analyzes")}</p>
                </div>
            </div>

        </div>
    );
};

export default AboutService;