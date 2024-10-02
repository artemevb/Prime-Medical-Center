'use client'
// import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import NewCardMain from '../Main/NewCardMain'
import { useTranslations } from "next-intl";

import Image from "next/image";
import Doctor1 from "@/public/images/Main/slieder1.png";
import Doctor2 from "@/public/images/Main/slider2.png";

export default function List({ locale }) {
    const t = useTranslations('News');
    const params = useParams()
    const [news, setNews] = useState([]) // Состояние для новостей
    const [loading, setLoading] = useState(true) // Состояние загрузки
    const [error, setError] = useState(null) // Состояние ошибки

    const data = [
        {
            slug: 'news-1',
            title: 'Муминов Хусниёрбек Мухсинжон угли',
            date: '27.2.2024',
            imageSrc: Doctor1,
        },
        {
            slug: 'news-2',
            title: 'Кодирова Мухайе Лукмоновна',
            date: '28.2.2024',
            imageSrc: Doctor2,
        },
        {
            slug: 'news-3',
            title: 'Муминов Хусниёрбек Мухсинжон угли',
            date: '29.2.2024',
            imageSrc: Doctor1,
        },
        {
            slug: 'news-4',
            title: 'Кодирова Мухайе Лукмоновна',
            date: '1.3.2024',
            imageSrc: Doctor2,
        },
        {
            slug: 'news-5',
            title: 'Кодирова Мухайе Лукмоновна',
            date: '1.3.2024',
            imageSrc: Doctor2,
        },
    ];

    // Запрашиваем все новости при смене языка
    // useEffect(() => {
    //     const fetchNews = async () => {
    //         setLoading(true)
    //         setError(null)

    //         try {
    //             const response = await axios.get(
    //                 `https://imed.uz/api/v1/new/get-all`,
    //                 {
    //                     headers: { 'Accept-Language': lng },
    //                 }
    //             )
    //             setNews(response.data.data) // Обновляем новости из ответа
    //         } catch (error) {
    //             console.error('Ошибка при получении новостей:', error.message)
    //             setError('Не удалось загрузить новости')
    //         } finally {
    //             setLoading(false) // Выключаем индикатор загрузки
    //         }
    //     }

    //     fetchNews()
    // }, [lng])

    // if (loading) return <div>Загрузка...</div>
    // if (error) return <div>{error}</div> 

    return (
        // my-[120px] mdx:my-[200px] 2xl:my-[250px]
        <div className='w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-3 flex flex-col mb-[90px] mdx:mb-[120px] 2xl:mb-[150px]'>
            <h2 className='text-[30px] mdx:text-[40px] mdl:text-[43px] xl:text-[50px] font-semibold'>
                {t('title')}
            </h2>
            <p className="text-[15px] text-[#666666] mdx:text-[18px] mt-[5px]">{t('subtitle')}</p>
            <div className='w-full grid gap-y-[30px] gap-x-[14px] grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto mt-[40px] xl:mt-[60px]'>
                {data.map((item, i) => (
                    <a key={i} href={`/${locale}/blogs/${item.slug}`}>
                        <NewCardMain
                            title={item.title}
                            date={item.date}
                            imageSrc={item.imageSrc}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
