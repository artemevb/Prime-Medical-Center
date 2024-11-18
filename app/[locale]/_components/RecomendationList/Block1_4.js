import { useTranslations } from "next-intl";

export default function StoolCollectionGuidelines({ locale }) {
    const t = useTranslations('Recommendations.Recommendations_4');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 mb-[90px] md:mb-[150px] 2xl:mb-[190px]">
            <div>
                {/* Main Title */}
                <h2 className="text-[25px] mdx:text-[35px] xl:text-[45px] font-semibold">
                    {t('title')}
                </h2>

                {/* Exclusions Before Collection */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('exclusions.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('exclusions.item1')}</li>
                    <li>{t('exclusions.item2')}</li>
                    <li>{t('exclusions.item3')}</li>
                    <li>{t('exclusions.item4')}</li>
                    <li>{t('exclusions.item5')}</li>
                    <li>{t('exclusions.item6')}</li>
                </ul>

                {/* Collection Instructions */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('collectionInstructions.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('collectionInstructions.item1')}</li>
                    <li>{t('collectionInstructions.item2')}</li>
                    <li>{t('collectionInstructions.item3')}</li>
                    <li>{t('collectionInstructions.item4')}</li>
                    <li>{t('collectionInstructions.item5')}</li>
                </ul>
            </div>
        </div>
    );
}
