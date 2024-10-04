'use client'

import newsPhoto from '@/public/images/News/image.png'
import newsPhoto2 from '@/public/images/News/image2.png'
import newsPhoto3 from '@/public/images/News/image3.png'
import newsPhoto4 from '@/public/images/News/image4.png'
import { useEffect, useState } from 'react'
import NewCardMain from '../News/NewCardMain'
import { useTranslations } from "next-intl";

export default function NewsComp({ locale }) {
    const t = useTranslations('News.Main');
    const [news, setNews] = useState([]) // State for all news
    const [visibleNews, setVisibleNews] = useState([]) // State for visible news
    const [loading, setLoading] = useState(false) // Loading state
    const [error, setError] = useState(null) // Error state

    // Temporary data
    const temporaryNews = [
        {
            slug: 'news-1',
            head: {
                title: `Мужское здоровье`,
                heading: 'Заголовок новости 1',
                date: 'Дата новости 1',
                photo: { url: newsPhoto },
            },
        },
        {
            slug: 'news-2',
            head: {
                title: `Мужское здоровье`,
                heading: 'Заголовок новости 2',
                date: 'Дата новости 2',
                photo: { url: newsPhoto2 },
            },
        },
        {
            slug: 'news-3',
            head: {
                title: `Мужское здоровье`,
                heading: 'Заголовок новости 3',
                date: 'Дата новости 3',
                photo: { url: newsPhoto },
            },
        },
        {
            slug: 'news-4',
            head: {
                title: `Аллергия летом`,
                heading: 'Заголовок новости 4',
                date: 'Дата новости 4',
                photo: { url: newsPhoto2 },
            },
        },
        {
            slug: 'news-5',
            head: {
                title: `Здоровье осенью`,
                heading: 'Заголовок новости 5',
                date: 'Дата новости 5',
                photo: { url: newsPhoto3 },
            },
        },
        {
            slug: 'news-6',
            head: {
                title: `Продукты для иммунитета`,
                heading: 'Заголовок новости 6',
                date: 'Дата новости 6',
                photo: { url: newsPhoto2 },
            },
        },
        {
            slug: 'news-7',
            head: {
                title: `Как бороться с гриппом`,
                heading: 'Заголовок новости 7',
                date: 'Дата новости 7',
                photo: { url: newsPhoto4 },
            },
        },
        {
            slug: 'news-8',
            head: {
                title: `Мужское здоровье`,
                heading: 'Заголовок новости 8',
                date: 'Дата новости 8',
                photo: { url: newsPhoto },
            },
        },
        {
            slug: 'news-9',
            head: {
                title: `Профилактика инфекций`,
                heading: 'Заголовок новости 9',
                date: 'Дата новости 9',
                photo: { url: newsPhoto3 },
            },
        },
        {
            slug: 'news-10',
            head: {
                title: `Советы по здоровьюsdasdasdasd`,
                heading: 'Заголовок новости 10 asdasd fdsafasdfsdafsadfsdaf',
                date: 'Дата новости 10',
                photo: { url: newsPhoto4 },
            },
        },
    ];

    // Function to get random news without repetition
    const getRandomNews = (arr, count) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Shuffle array
        return shuffled.slice(0, count); // Return the first `count` items
    };

    // Initial load of 4 random news
    useEffect(() => {
        setNews(temporaryNews); // Set all news
        setVisibleNews(getRandomNews(temporaryNews, 4)); // Show 4 random news
    }, []);

    const loadMoreNews = () => {
        const remainingNews = news.filter(n => !visibleNews.includes(n)); // Filter out already visible news
        if (remainingNews.length === 0) return; // If no remaining news, stop
        const newRandomNews = getRandomNews(remainingNews, 4); // Get 4 new random news
        setVisibleNews(prev => [...prev, ...newRandomNews]); // Add new news to visible ones
    };

    if (loading) return <div>Загрузка...</div> // Loading indicator
    if (error) return <div>{error}</div> // Error message

    return (
        <div className='w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mb-[90px] mdx:mb-[150px] 2xl:mb-[190px] mt-[90px] mdx:mt-[120px]'>
            <h2 className='text-[30px] mdx:text-[35px] mdl:text-[40px] xl:text-[50px] font-semibold'>
                {t('other')}
            </h2>
            <div className='w-full grid gap-y-[35px] mdx:gap-y-[45px] xl:gap-y-[55px] gap-x-4 grid-cols-1 mdl:grid-cols-2 xl:grid-cols-4 h-auto'>
                {visibleNews.map((item, i) => (
                    <a key={i} href={`/${locale}/news/${item.slug}`}>
                        <NewCardMain
                            title={item.head.title}
                            subtitle={item.head.heading}
                            date={item.head.date}
                            imageSrc={item.head.photo?.url || newsPhoto}
                        />
                    </a>
                ))}
            </div>
            {visibleNews.length < news.length && ( // Show button only if there are more news to load
                <div className="flex items-center justify-center xl:mt-[60px] mdx:mt-[40px] mt-[30px]">
                    <a href={`/${locale}/news`} className='bg-[#00863E] hover:bg-[#398f61] text-white py-[12px] px-4 w-[223px]  flex justify-center font-extrabold'>
                        {t('go')}
                    </a>
                </div>
            )}
        </div>
    );
}
