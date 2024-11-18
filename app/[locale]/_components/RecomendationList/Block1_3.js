import { useTranslations } from "next-intl";

export default function BloodTestGuidelines({ locale }) {
    const t = useTranslations('Recommendations.Recommendations_3');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 mb-[90px] md:mb-[150px] 2xl:mb-[190px]">
            <div>
                {/* Main Title */}
                <h2 className="text-[25px] mdx:text-[35px] xl:text-[45px] font-semibold">
                    {t('title')}
                </h2>

                {/* General Blood Test Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('generalTest.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('generalTest.item1')}</li>
                    <li>{t('generalTest.item2')}</li>
                    <li>{t('generalTest.item3')}</li>
                    <li>{t('generalTest.item4')}</li>
                </ul>

                {/* Biochemical, Sugar, Hormones Test Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('biochemicalTest.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('biochemicalTest.item1')}</li>
                    <li>{t('biochemicalTest.item2')}</li>
                    <li>{t('biochemicalTest.item3')}</li>
                    <li>{t('biochemicalTest.item4')}</li>
                    <li>{t('biochemicalTest.item5')}</li>
                    <li>{t('biochemicalTest.item6')}</li>
                    <li>{t('biochemicalTest.item7')}</li>
                    <li>{t('biochemicalTest.item8')}</li>
                </ul>
            </div>
        </div>
    );
}
