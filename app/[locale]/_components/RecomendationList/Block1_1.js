import { useTranslations } from "next-intl";

export default function Block1({ locale }) {
    const t = useTranslations('Recommendations.Recommendations_1');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 mb-[90px] md:mb-[150px] 2xl:mb-[190px]">
            <div >
                <h2 className="text-[25px] mdx:text-[35px] xl:text-[45px] font-semibold">{t('instruction.title')}</h2>
                <p className="text-[#323232] text-[15px] mdx:text-[18px] font-medium max-w-[710px] mt-[10px] mdx:mt-[15px] xl:mt-[20px]">
                    {t('instruction.description')}
                </p>

                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('preparation.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('preparation.item1')}</li>
                    <li>{t('preparation.item2')}</li>
                    <li>{t('preparation.item3')}</li>
                    <li>{t('preparation.item4')}</li>
                </ul>

                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('collection.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('collection.item1')}</li>
                    <li>{t('collection.item2')}</li>
                    <li>{t('collection.item3')}</li>
                    <li>{t('collection.item4')}</li>
                </ul>

                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('procedure.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('procedure.item1')}</li>
                    <li>{t('procedure.item2')}</li>
                    <li>{t('procedure.item3')}</li>
                </ul>
            </div>
        </div>
    );
}
