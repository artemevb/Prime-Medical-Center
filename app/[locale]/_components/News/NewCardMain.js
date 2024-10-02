"use client"
import Image from "next/image";
import GreenArrow from "@/public/svg/arrow-right-green-news.svg";
import { useTranslations } from "next-intl";

export default function NewCard({ key, title, subtitle, date, imageSrc }) {
    const t = useTranslations('News.Main');

    return (
        <div className="w-full bg-white h-full flex flex-col justify-between">
            <Image
                src={imageSrc}
                width={500}
                height={500}
                quality={100}
                alt={`News Image ${key}`}
                className="w-full h-auto object-cover"
            />
            <div className="w-full flex flex-col flex-grow justify-between mt-[10px] xl:mt-[15px]">
                <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold mt-0">
                    {title}
                </h3>
                <p className="text-[15px] mdx:text-[16px] xl:text-[18px] lh font-medium line-clamp-3 text-[#666] mt-[8px]">
                    {subtitle}
                </p>
                <div className="flex flex-row gap-[5px] items-center mt-[10px]">
                    <p className="text-[#00863E] xl:text-[20px] text-[16px] mdx:text-[18px] font-bold">{t('button')}</p>
                    <Image
                        src={GreenArrow}
                        width={500}
                        height={500}
                        quality={100}
                        alt="Green Arrow"
                        className="w-[25px]"
                    />
                </div>
            </div>
        </div>
    );
}
