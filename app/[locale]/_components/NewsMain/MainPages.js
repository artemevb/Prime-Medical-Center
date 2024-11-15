'use client'

import newsPhoto from '@/public/images/News/image-full.png'
import Image from 'next/image'
import { useTranslations } from "next-intl"
import OtherNewsList from '../NewsMain/OtherNewsList'
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';

export default function MainPages({ newsItem, locale }) {
    const t = useTranslations('News.Main')

    const formatTextWithNewlines = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ))
    }
    function formatDate(date, locale) {
        if (locale === 'uz') {
            return format(new Date(date), 'd MMMM yyyy', { locale: uz });
        }
        return new Date(date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
    return (
        <div className="w-full max-w-[1440px] mx-auto flex gap-6 3xl:gap-[50px] max-3xl:px-4">
            {/* Основное содержимое новости */}
            <div className="w-full 2xl:max-w-[1035px]">
                <div className="mt-4">
                    {newsItem.createdDate && (
                        <p className="font-medium text-[16px] mdx:text-[18px] xl:text-[20px] text-[#00863E]">
                            {formatDate(newsItem.createdDate, locale)}
                        </p>
                    )}
                    {newsItem.head?.heading && (
                        <h1 className="text-[25px] font-bold text-black mb-2 mdx:text-[35px] xl:text-[40px] 2xl:text-[50px] leading-[1.10] mt-2">
                            {formatTextWithNewlines(newsItem.head.heading)}
                        </h1>
                    )}
                </div>

                {newsItem.head?.photo?.url && (
                    <div className="w-full max-xl:my-[25px] xl:mt-7 xl:mb-[40px] flex flex-row justify-center">
                        <div className="aspect-w-4 aspect-h-3 xl:aspect-h-2 w-full">
                            <Image
                                src={newsItem.head.photo.url || newsPhoto}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                alt={`Изображение для ${newsItem.head.heading}`}
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Отображение массива optionList */}
                {newsItem.optionList?.map((item, index) => (
                    <div className={index === 0 ? "mt-4" : "mt-[35px] xl:mt-[70px]"} key={index}>
                        {item.title && (
                            <h3
                                className={index === 0
                                    ? 'text-[25px] mdx:text-[35px] xl:text-[40px] 2xl:text-[50px] font-bold text-black leading-[1.10]'
                                    : 'text-[20px] mdx:text-[26px] font-bold text-[#252324]'
                                }
                            >
                                {formatTextWithNewlines(item.title)}
                            </h3>
                        )}
                        {item.body && (
                            <div className="text-[15px] mdx:text-[20px] py-[15px] font-semibold text-[#333333]">
                                {formatTextWithNewlines(item.body)}
                            </div>
                        )}
                        {item.photo?.url && (
                            <div className="mt-[30px] mb-[10px] flex flex-row justify-center">
                                <div className="aspect-w-4 aspect-h-3 xl:aspect-h-2 w-full">
                                    <Image
                                        src={item.photo.url}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                        alt={`Изображение для ${item.title}`}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}


            </div>

            {/* Боковая панель */}
            <div className="max-w-[345px] hidden 2xl:block py-[43px]">
                <div className="sticky top-16">
                    <h3 className="text-[24px] font-bold mb-4 text-[#00863E] border-b pb-[25px]">{t('walking')}</h3>
                    <div className="w-full grid grid-cols-1 gap-[30px]">
                        <OtherNewsList locale={locale} currentSlug={newsItem.slug} />
                    </div>
                </div>
            </div>
        </div>
    )
}
