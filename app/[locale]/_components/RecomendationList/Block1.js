import Image from "next/image";
import food from "@/public/svg/instructions/fluent_food.svg";
import alcohol from "@/public/svg/instructions/alcohol.svg";
import sport from "@/public/svg/instructions/fluent_sport.svg";
import medicine from "@/public/svg/instructions/medicine.svg";
import arrow from "@/public/svg/arrow-left-green.svg";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Block1({ locale }) {
    const t = useTranslations('Recommendations');

    return (
        <div className='w-full max-w-[1440px] mx-auto px-2 mb-[90px] mdx:mb-[150px] 2xl:mb-[190px]'>
            <Link href={"/"}>
                <button className="flex flex-row items-center justify-center gap-2 text-[16px] mdx:text-[20px] font-bold text-[#00863E]">
                    <Image
                        quality={100}
                        src={arrow}
                        alt={t('altBack')}
                        objectFit="contain"
                        className="rounded-full w-[25px] h-[25px]"
                    />
                    {t('back')}
                </button>
            </Link>
            <h2 className='text-[30px] mdx:text-[35px] mdl:text-[40px] xl:text-[50px] font-semibold text-black'>
                {t('title')}
            </h2>
            <div className="grid gap-[12px] mdl:grid-cols-2 2xl:grid-cols-4 mt-[30px] mdx:mt-[40px] xl:mt-[50px]">
                <div className="border p-[25px] mdx:p-[35px] flex flex-col">
                    <Image
                        quality={100}
                        src={food}
                        alt={t('altFood')}
                        objectFit="contain"
                        className="rounded-full w-[40px] h-[40px]"
                    />
                    <h5 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[25px] xl:mt-[40px]">
                        {t('fasting')}
                    </h5>
                    <p className="text-[16px] mdx:text-[18px] font-medium text-[#323232] mt-[10px]">
                        {t('fastingDesc')}
                    </p>
                </div>
                <div className="border p-[25px] flex flex-col">
                    <Image
                        quality={100}
                        src={sport}
                        alt={t('altSport')}
                        objectFit="contain"
                        className="rounded-full w-[40px] h-[40px]"
                    />
                    <h5 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[25px] xl:mt-[40px]">
                        {t('exercise')}
                    </h5>
                    <p className="text-[16px] mdx:text-[18px] font-medium text-[#323232] mt-[10px]">
                        {t('exerciseDesc')}
                    </p>
                </div>
                <div className="border p-[25px] flex flex-col">
                    <Image
                        quality={100}
                        src={alcohol}
                        alt={t('altAlcohol')}
                        objectFit="contain"
                        className="rounded-full w-[40px] h-[40px]"
                    />
                    <h5 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[25px] xl:mt-[40px]">
                        {t('alcohol')}
                    </h5>
                    <p className="text-[16px] mdx:text-[18px] font-medium text-[#323232] mt-[10px]">
                        {t('alcoholDesc')}
                    </p>
                </div>
                <div className="border p-[25px] flex flex-col">
                    <Image
                        quality={100}
                        src={medicine}
                        alt={t('altMedicine')}
                        objectFit="contain"
                        className="rounded-full w-[40px] h-[40px]"
                    />
                    <h5 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold text-[#00863E] mt-[25px] xl:mt-[40px]">
                        {t('medicine')}
                    </h5>
                    <p className="text-[16px] mdx:text-[18px] font-medium text-[#323232] mt-[10px]">
                        {t('medicineDesc')}
                    </p>
                </div>
            </div>
        </div>
    );
}
