"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Doctor1 from "@/public/images/Main/slieder1.png";
import Doctor2 from "@/public/images/Main/slider2.png";
import NewCardMain from './NewCardMain'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const DoctorsSlider = () => {
    const t = useTranslations('Main.DoctorsSlider');

    const data = [
        {
            slug: 'news-1',
            title: 'Муминов Хусниёрбек Мухсинжон угли',
            date: '27.2.2024',
            imageSrc: Doctor1,
        },
        {
            slug: 'news-2',
            title: 'Муминов Хусниёрбек Мухсинжон угли',
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
    ];

    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    }

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            {data.length > 0 && (
                <div className='flex flex-col gap-[45px]'>
                    <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] font-semibold">
                        {t("title")}
                    </h2>
                    <div className='w-full h-auto '>
                        <Slider {...settings} className='h-auto w-full '>
                            {data.map((item, i) => {
                                return (
                                    <div className='px-[10px] xl:h-[520px] 3xl:h-[540px] max-h-full' key={i}>
                                        <a href={`/news/${item.slug}`}>
                                            <NewCardMain
                                                title={item.title}
                                                date={item.date}
                                                imageSrc={item.imageSrc}
                                            />
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className='flex w-full justify-center'>
                        <a
                            href={`/news`}
                            className='flex items-center justify-center border border-neutral-300 py-3 text-[#fff] transition-all duration-200 bg-[#00863E] hover:bg-[#398f61] font-semibold w-[223px]'
                        >
                            {t('button')}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorsSlider;
