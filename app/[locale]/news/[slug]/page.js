'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import MainPages from "../../_components/NewsMain/MainPages";
import Share from "../../_components/NewsMain/Share";
import OtherNews from "../../_components/NewsMain/OtherNews";

export default function NewsDetailPage({ params }) {
    const { locale, slug } = params;
    const t = useTranslations('News');
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsItem = async () => {
            try {
                const response = await fetch(`https://pmc.result-me.uz/v1/newness/get/${slug}`, { // Обернули URL в обратные кавычки
                    headers: {
                        'Accept-Language': locale // Используйте 'ru' или 'uz' в зависимости от текущего языка
                    }
                });

                const result = await response.json();

                // Логирование ответа для отладки
                console.log('API Response:', result);

                if (response.ok) {
                    setNewsItem(result.data); // Передаём весь объект данных
                } else {
                    throw new Error(result.message || 'Ошибка при загрузке данных');
                }
            } catch (error) {
                console.error('Fetch Error:', error);
                setError('Не удалось загрузить данные. Попробуйте позже.');
            } finally {
                setLoading(false);
            }
        };

        fetchNewsItem();
    }, [locale, slug]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
    if (!newsItem) return <div>Новость не найдена.</div>;

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <MainPages newsItem={newsItem} locale={locale} />
            <div className="max-xl:px-[15px]">
                <Share locale={locale} />
            </div>
            <OtherNews locale={locale} />
        </div>
    );
}
