"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Doctor1 from "@/public/images/Main/slieder1.png";
import Doctor2 from "@/public/images/Main/slider2.png";
import NewCardMain from '../Main/NewCardMain'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const DoctorsSlider = ({ locale }) => {
    const t = useTranslations('About.Doctors');

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
                <div className='flex flex-col '>
                    <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] font-semibold">
                        {t("title")}
                    </h2>
                    <p className="text-[#666666] text-[15px] mdx:text-[18px] font-medium mt-[10px] max-w-[799px]">{t('text')}</p>
                    <div className='w-full h-auto mt-[30px] mdx:mt-[40px]'>
                        <Slider {...settings} className='h-auto w-full '>
                            {data.map((item, i) => {
                                return (
                                    <div className='px-[10px] xl:h-[520px] 3xl:h-[540px] max-h-full' key={i}>
                                        <a href={`/${locale}/doctors/${item.slug}`}>
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
                    <div className='flex w-full justify-center mt-[50px] mdx:mt-[60px]'>
                        <a
                            href={`/${locale}/doctors`}
                            className='flex items-center justify-center border border-neutral-300 py-3 text-[#fff] transition-all duration-200 bg-[#00863E] hover:bg-[#398f61] font-extrabold w-[223px]'
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
