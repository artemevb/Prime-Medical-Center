import { useTranslations } from "next-intl";

export default function Test14C({ locale }) {
    const t = useTranslations('Recommendations.Recommendations_2');

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 mb-[90px] md:mb-[150px] 2xl:mb-[190px]">
            <div>
                {/* Main Title */}
                <h2 className="text-[25px] mdx:text-[35px] xl:text-[45px] font-semibold">
                    {t('title')}
                </h2>

                {/* Description */}
                {/* <p className="text-[#323232] text-[15px] mdx:text-[18px] font-medium max-w-[710px] mt-[10px] mdx:mt-[15px] xl:mt-[20px]">
                    {t('description')}
                </p> */}

                {/* Reliability Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('reliability.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('reliability.item1')}</li>
                    <li>{t('reliability.item2')}</li>
                </ul>

                {/* Speed Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('speed.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('speed.item1')}</li>
                    <li>{t('speed.item2')}</li>
                </ul>

                {/* Methodology Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('methodology.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('methodology.item1')}</li>
                    <li>{t('methodology.item2')}</li>
                </ul>

                {/* Preparation Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('preparation.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('preparation.item1')}</li>
                    <li>{t('preparation.item2')}</li>
                    <li>{t('preparation.item3')}</li>
                    <li>{t('preparation.item4')}</li>
                </ul>

                {/* Contraindications Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('contraindications.title')}
                </h3>
                <ul className="list-disc list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('contraindications.item1')}</li>
                    <li>{t('contraindications.item2')}</li>
                </ul>

                {/* Sample Collection Section */}
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[40px] mdx:mt-[50px] xl:mt-[60px]">
                    {t('sampleCollection.title')}
                </h3>
                <ol className="list-decimal list-inside mt-[10px] mdx:mt-[15px] text-[#323232] font-medium text-[15px] mdx:text-[18px] ml-[8px]">
                    <li>{t('sampleCollection.step1')}</li>
                    <li>{t('sampleCollection.step2')}</li>
                    <li>{t('sampleCollection.step3')}</li>
                </ol>
            </div>
        </div>
    );
}
