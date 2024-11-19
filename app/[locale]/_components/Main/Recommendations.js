'use client';
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import arrow from "@/public/svg/arrow-right-green.svg";
import Image from "next/image";
import logo from "@/public/images/Logoabs.png";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SignUp = ({ locale }) => {
    const t = useTranslations('Main.Recommendations');

    const formatText = (text) => {
        return text.replace(/\n/g, '<br />');
    };

    // Create separate refs for each block
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);
    const block4Ref = useRef(null);
    const block5Ref = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        // Define animations only for devices with screen width greater than 768px
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

            // Apply animations to all blocks
            animateBlock(block1Ref, { from: { opacity: 0, y: -150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block2Ref, { from: { opacity: 0, y: -150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block3Ref, { from: { opacity: 0, y: 150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block4Ref, { from: { opacity: 0, y: -150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
            animateBlock(block5Ref, { from: { opacity: 0, y: 150 }, to: { opacity: 1, y: 0, duration: 2, ease: "power3.out" } });
        });

        return () => {
            mm.revert(); // Removes all animations set via matchMedia
        };
    }, []);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            <h2 className="font-semibold text-[30px] md:text-[40px] xl:text-[45px] lh">{t("title")}</h2>
            <div className="mt-[23px] flex flex-col lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-[16px]">
                {/* Block 1 */}
                <Link href={`/${locale}/recomendation-list?block=1`}>
                    <div
                        ref={block1Ref}
                        className="w-full border p-[20px] md:p-[25px] flex flex-col justify-between min-h-[227px] md:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] md:text-[24px] xl:text-[25px] lh max-w-[60%]"
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
                
                {/* Block 2 */}
                <Link href={`/${locale}/recomendation-list?block=2`}>
                    <div
                        ref={block2Ref}
                        className="w-full border p-[20px] md:p-[25px] flex flex-col justify-between min-h-[227px] md:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] md:text-[24px] xl:text-[25px] lh max-md:max-w-[80%]"
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
                
                {/* Block 3 */}
                <Link href={`/${locale}/recomendation-list?block=3`}>
                    <div
                        ref={block3Ref}
                        className="w-full border p-[20px] md:p-[25px] flex flex-col justify-between min-h-[227px] md:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] md:text-[24px] xl:text-[25px] lh max-w-[60%]"
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
                
                {/* Block 4 */}
                <Link href={`/${locale}/recomendation-list?block=4`} className="xl:hover:right-4 transition-all duration-300">
                    <div
                        ref={block4Ref}
                        className="w-full border p-[20px] md:p-[25px] flex flex-col justify-between min-h-[227px] md:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative font-semibold">
                        <h5 className="text-[18px] md:text-[24px] xl:text-[25px] lh max-w-[60%]"
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
                
                {/* Block 5 */}
                <Link href={`/${locale}/news`} className="w-full border p-[20px] md:p-[25px] flex flex-col min-h-[227px] md:min-h-[310px] xl:min-h-[250px] xl:p-[15px] relative 2xl:col-span-2 bg-[#00863E] text-white col-span-2 last:col-span xl:hover:ml-2 transition-all duration-300">
                    {/* Move ref to inner div */}
                    <div ref={block5Ref} className="w-full h-full flex flex-col justify-between">
                        <h5 className="text-[18px] md:text-[24px] xl:text-[26px] lh max-w-[283px] md:max-w-[323px] lg:max-w-full font-semibold"
                            dangerouslySetInnerHTML={{ __html: formatText(t("subtitle5")) }}>
                        </h5>
                        {/* Uncomment and use if needed */}
                        {/* <p className="mt-[8px] text-[15px] md:text-[18px] lh max-w-[283px] md:max-w-[323px] lg:max-w-[478px] md:mt-[12px]"
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
                        <div className="absolute bottom-0 right-3 lg:left-12">
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
