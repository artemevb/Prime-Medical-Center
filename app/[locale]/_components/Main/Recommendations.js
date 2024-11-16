'use client';
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import arrow from "@/public/svg/arrow-right-green.svg";
import Image from "next/image";
import logo from "@/public/images/Logoabs.png";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем плагин ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SignUp = ({ locale }) => {
    const t = useTranslations('Main.Recommendations');

    // Функция для преобразования \n в <br />
    const formatText = (text) => {
        return text.replace(/\n/g, '<br />');
    };

    // Создаем отдельные рефы для каждого блока
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);
    const block4Ref = useRef(null);
    const block5Ref = useRef(null); // Последний блок

    useEffect(() => {
        const mm = gsap.matchMedia();

        // Определяем анимации только для устройств с шириной экрана более 768px
        mm.add("(min-width: 769px)", () => {
            const animateBlock = (blockRef, animationProps) => {
                if (blockRef.current) {
                    gsap.fromTo(
                        blockRef.current,
                        animationProps.from,
                        {
                            ...animationProps.to,
                            scrollTrigger: {
                                trigger: blockRef.current,
                                start: "top 90%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                }
            };

            // Применяем анимацию для всех блоков
            animateBlock(block1Ref, { from: { opacity: 0, x: -150 }, to: { opacity: 1, x: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block2Ref, { from: { opacity: 0, y: -150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block3Ref, { from: { opacity: 0, x: 150 }, to: { opacity: 1, x: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block4Ref, { from: { opacity: 0, x: -150 }, to: { opacity: 1, x: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block5Ref, { from: { opacity: 0, y: 150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
        });

        return () => {
            mm.revert(); // Удаляет все анимации, установленные через matchMedia
        };
    }, []);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            <h2 className="font-semibold text-[30px] mdx:text-[40px] xl:text-[45px] lh">{t("title")}</h2>
            <div className="mt-[23px] flex flex-col mdl:grid mdl:grid-cols-2 2xl:grid-cols-3 gap-[16px]">
                <Link href="recomendation-list">
                    <div
                        ref={block1Ref}
                        className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px]  xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] mdx:text-[24px] xl:text-[25px] lh max-w-[60%]"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle1")) }}>
                        </h5>
                        <div className="absolute bottom-[20px] right-[20px]">
                            <button className='rounded-full w-[60px] h-[60px] bg-[#F3F7FB] flex items-center justify-center'>
                                <Image
                                    quality={100}
                                    src={arrow}
                                    alt="arrow-green"
                                    objectFit="contain"
                                    className="w-full h-auto rounded-full max-w-[32px]"
                                />
                            </button>
                        </div>
                    </div>
                </Link>
                <Link href="recomendation-list">
                    <div
                        ref={block2Ref}
                        className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] mdx:text-[24px] xl:text-[25px] lh max-mdl:max-w-[80%]"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle2")) }}>
                        </h5>
                        <div className="absolute bottom-[20px] right-[20px]">
                            <button className='rounded-full w-[60px] h-[60px] bg-[#F3F7FB] flex items-center justify-center'>
                                <Image
                                    quality={100}
                                    src={arrow}
                                    alt="arrow-green"
                                    objectFit="contain"
                                    className="w-full h-auto rounded-full max-w-[32px]"
                                />
                            </button>
                        </div>
                    </div>
                </Link>
                <Link href="recomendation-list">
                    <div
                        ref={block3Ref}
                        className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] mdx:text-[24px] xl:text-[25px] lh max-w-[60%]"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle3")) }}>
                        </h5>
                        <div className="absolute bottom-[20px] right-[20px]">
                            <button className='rounded-full w-[60px] h-[60px] bg-[#F3F7FB] flex items-center justify-center'>
                                <Image
                                    quality={100}
                                    src={arrow}
                                    alt="arrow-green"
                                    objectFit="contain"
                                    className="w-full h-auto rounded-full max-w-[32px]"
                                />
                            </button>
                        </div>
                    </div>
                </Link>
                <Link href="recomendation-list" className="xl:hover:right-4 transition-all duration-300">
                    <div
                        ref={block4Ref}
                        className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] mdx:text-[24px] xl:text-[25px] lh max-w-[60%]"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle4")) }}>
                        </h5>
                        <div className="absolute bottom-[20px] right-[20px]">
                            <button className='rounded-full w-[60px] h-[60px] bg-[#F3F7FB] flex items-center justify-center'>
                                <Image
                                    quality={100}
                                    src={arrow}
                                    alt="arrow-green"
                                    objectFit="contain"
                                    className="w-full h-auto rounded-full max-w-[32px]"
                                />
                            </button>
                        </div>
                    </div>
                </Link>
                <Link href={`/${locale}/news`} className="w-full border p-[20px] mdx:p-[25px] flex flex-col min-h-[227px] mdx:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative 2xl:col-span-2 bg-[#00863E] text-white col-span-2 last:col-span xl:hover:ml-2 transition-all duration-300">
                    {/* Переносим реф на внутренний div */}
                    <div ref={block5Ref} className="w-full h-full flex flex-col justify-between">
                        <h5 className="text-[18px] mdx:text-[24px] xl:text-[26px] lh max-w-[283px] mdx:max-w-[323px] mdl:max-w-full font-semibold"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle5")) }}>
                        </h5>
                        {/* <p className="mt-[8px] text-[15px] mdx:text-[18px] lh max-w-[283px] mdx:max-w-[323px] mdl:max-w-[478px] mdx:mt-[12px]"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle5-text")) }}>
                        </p> */}
                        <div className="absolute bottom-[20px] right-[20px]">
                            <button className='rounded-full w-[60px] h-[60px] bg-[#F3F7FB] flex items-center justify-center'>
                                <Image
                                    quality={100}
                                    src={arrow}
                                    alt="arrow-green"
                                    objectFit="contain"
                                    className="w-full h-auto rounded-full max-w-[32px]"
                                />
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-3 mdl:left-12">
                            <Image
                                priority
                                src={logo}
                                width={270}
                                height={270}
                                alt="logo prime"
                                quality={100}
                                className="w-full h-auto max-w-[141px]"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;

