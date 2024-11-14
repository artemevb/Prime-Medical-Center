'use client'

import newsPhoto from '@/public/images/News/image-full.png'
import Image from 'next/image'
import { useTranslations } from "next-intl"
import OtherNewsList from '../NewsMain/OtherNewsList'

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

    return (
        <div className="w-full max-w-[1440px] mx-auto flex gap-6 3xl:gap-[50px] max-3xl:px-4">
            {/* Основное содержимое новости */}
            <div className="w-full 2xl:max-w-[1035px]">
                <div className="mt-4">
                    {newsItem.createdDate && (
                        <p className="font-medium text-[16px] mdx:text-[18px] xl:text-[20px] text-[#00863E]">
                            {new Date(newsItem.createdDate).toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
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
                        <Image
                            src={newsItem.head.photo.url || newsPhoto}
                            width={1000}
                            height={1000}
                            quality={100}
                            alt={`Изображение для ${newsItem.head.heading}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                {/* Отображение массива optionList */}
                {newsItem.optionList?.map((item, index) => (
                    <div className="mt-[35px] xl:mt-[70px]" key={index}>
                        {item.title && (
                            <h3 className="text-[20px] mdx:text-[26px] font-bold text-[#252324]">
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
                                <Image
                                    src={item.photo.url}
                                    width={500}
                                    height={500}
                                    quality={100}
                                    alt={`Изображение для ${item.title}`}
                                    className="w-full h-auto max-w-[832px] max-h-[450px] 5xl:max-w-[1000px] object-cover rounded-xl"
                                />
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
