'use client';
import Image from 'next/image';
import GreenArrow from '@/public/svg/arrow-right-green-news.svg';
import { useTranslations } from 'next-intl';

export default function NewCardMain({ title, body, date, imageSrc }) {
    const t = useTranslations('News.Main');

    return (
        <div className="w-full bg-white h-full flex flex-col justify-between">

            <div className="relative w-full aspect-w-4 aspect-h-4 overflow-hidden">
                <Image
                    src={imageSrc}
                    layout="fill" 
                    objectFit="cover" 
                    quality={100}
                    alt="News Image"
                    className="object-cover"
                />
            </div>
            <div className="w-full flex flex-col flex-grow justify-between mt-[10px] xl:mt-[15px]">

                <div className="line-clamp-4">
                    <h3 className="text-[20px] mdx:text-[24px] xl:text-[26px] font-bold mt-0 lh line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-[15px] mdx:text-[16px] xl:text-[18px] lh font-medium text-[#666] mt-[8px] line-clamp-2">
                        {body}
                    </p>
                </div>


                <div className="flex flex-row gap-[5px] items-center mt-[10px]">
                    <p className="text-[#00863E] xl:text-[20px] text-[16px] mdx:text-[18px] font-bold">
                        {t('button')}
                    </p>
                    <Image
                        src={GreenArrow}
                        width={25}
                        height={25}
                        quality={100}
                        alt="Green Arrow"
                        className="w-[25px] h-[25px]"
                    />
                </div>
            </div>
        </div>
    );
}
