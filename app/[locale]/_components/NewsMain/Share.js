'use client'

import facebook from '@/public/svg/share-icons/facebook.svg'
import instagr from '@/public/svg/share-icons/instagram.svg'
import tabler from '@/public/svg/tabler_link.svg'
import telegram from '@/public/svg/share-icons/telegram.svg'
import youtube from '@/public/svg/share-icons/youtube.svg'
import axios from 'axios'
import newsPhoto from '@/public/images/News/image.png'
import Logo from '@/public/images/News/logo.png'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslations } from "next-intl";

export default function NewsTitle() {
    const t = useTranslations('News.Main')
    const [news, setNews] = useState(null)

    const { slug } = useParams()

    useEffect(() => {
        // const fetchNewsWithSlug = async () => {
        //     try {
        //         const response = await axios.get(
        //             `https://imed.uz/api/v1/new/get/${slug}`,
        //             {
        //                 headers: { 'Accept-Language': lng },
        //             }
        //         )
        //         setNews(response.data.data)
        //     } catch (error) {
        //         console.error('Failed to fetch news:', error.message)
        //         setNews(null) // Reset state if fetching fails
        //     }
        // }
        // fetchNewsWithSlug()

        // Fake news data
        const fakeNewsData = {
            head: {
                photo: {
                    url: newsPhoto, // Use your local image or placeholder
                },
                title: "", // Replace with appropriate title
                description: "Заботьтесь о здоровье близких — поделитесь этой важной медицинской новостью с другом", // Replace with appropriate description
            },
        };
        setNews(fakeNewsData);
    }, [slug])

    const icons = [
        {
            src: telegram,
            alt: 'Telegram Icon',
            link: 'https://t.me/prime_medical_center'
        },
        {
            src: facebook,
            alt: 'Facebook Icon',
            link: 'https://www.facebook.com/people/Prime-Medical-Center/100085066009600/',
        },
        {
            src: instagr,
            alt: 'Instagram Icon',
            link: 'https://www.instagram.com/prime_medical_center/',
        },
        {
            src: youtube,
            alt: 'Youtube Icon',
            link: 'https://youtube.com/@primemedicalcentertashkent?si=zsvKksa_R4qwUuPy'
        },
    ]

    const copyLinkToClipboard = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
                toast.success(t('link_copied'), {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
            .catch(err => {
                toast.error(t('copy_error'), {
                    position: 'top-right',
                    autoClose: 3000,
                })
                console.error(t('copy_error'), err)
            })
    }

    return (
        <div className='bg-[#00863E] max-w-[1440px] mx-auto w-full mt-[90px] mdx:mt-[120px] overflow-hidden'>
            <ToastContainer />
            <div className='mx-auto relative'>
                <div className='max-xl:mx-[15px] flex flex-col items-center mdl:flex-row mdl:justify-between xl:justify-start relative mdl:py-4 xl:min-h-[325px] xl:gap-[20px] xl:p-[30px]'>
                    <Image
                        quality={100}
                        src={Logo}
                        width={600}
                        height={600}
                        alt='Link Icon'
                        className='absolute top-[-40px] right-[-40px] mdl:top-0 mdl:left-[-20px] w-[161px] xl:top-auto xl:left-auto xl:right-[60px] xl:bottom-[-80px] xl:w-[200px] h-auto object-cover z-0 pointer-events-none'
                    />

                    <div className='max-mdl:mt-[15px] items-center mdl:flex flex justify-center content-center max-mdx:max-w-[288px] w-full h-full mdl:w-full xl:max-w-[345px]'>
                        <Image
                            src={news?.head.photo?.url}
                            width={500}
                            height={500}
                            quality={100}
                            alt='News Image'
                            className='relative w-full h-auto max-w-[340px] max-h-[340px] object-cover mdl:w-full mdl:max-h-[280px] mdl:max-w-[280px] mdl:mr-5 xl:max-h-[310px] xl:max-w-[310px] border-2 border-[#fff] z-10'
                        />
                    </div>
                    <div className="mdl:w-full xl:w-auto">
                        <div className='flex flex-col text-[#fff] mdl:flex-1 pb-[24px]'>
                            <h2 className='z-20 mt-8 font-bold text-[25px] xl:mb-3 mdl:text-[30px] xl:text-[35px] xl:max-w-[610px] lh'>
                                {t('copy-1')}
                            </h2>
                            <p className='text-[#fff] w-full mt-2 text-[15px] normal-case xl:max-w-[610px] z-20 slg:text-[18px] xl:mt-1 font-medium opacity-[0.8]'>
                                {news?.head.description || "Поделитесь новостью с друзьями!"}
                            </p>
                        </div>
                        <div className='flex gap-[10px] pb-[40px] mdl:pb-[30px]'>
                            <div className='w-[50px] h-[50px] border mdl:w-[40px] mdl:h-[40px] slg:h-[50px] slg:w-[50px] xl:hidden bg-[#ffffff] rounded-full'>
                                <a
                                    onClick={copyLinkToClipboard}
                                    className='flex items-center justify-center w-full h-full'
                                >
                                    <Image
                                        quality={100}
                                        src={tabler}
                                        width={21}
                                        height={21}
                                        alt='Link Icon'
                                        className='w-[21px] h-[21px] object-cover slg:h-[24px] slg:w-[24px]'
                                    />
                                </a>
                            </div>
                            <button
                                onClick={copyLinkToClipboard}
                                className='hidden xl:flex items-center justify-center text-[#00863E] text-[16px] bg-[#FFF] hover:bg-[#dfdede] px-8 py-3 font-extrabold xl:mr-[15px]'
                            >
                                {t('copy')}
                            </button>
                            {icons.map((icon, index) => (
                                <div
                                    key={index}
                                    className='w-[50px] h-[50px] mdl:w-[40px] mdl:h-[40px] slg:h-[50px] slg:w-[50px] '
                                >
                                    <a
                                        href={icon.link}
                                        className='flex items-center justify-center w-full h-full'
                                    >
                                        <Image
                                            src={icon.src}
                                            width={50}
                                            height={50}
                                            quality={100}
                                            target='_blank'
                                            alt={icon.alt}
                                            className='w-full '
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
