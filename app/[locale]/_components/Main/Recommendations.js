import { useTranslations } from "next-intl";
import arrow from "@/public/svg/arrow-right-green.svg";
import Image from "next/image";
import logo from "@/public/images/Logoabs.png";

const SignUp = () => {
    const t = useTranslations('Main.Recommendations');

    // Helper function to convert \n to <br />
    const formatText = (text) => {
        return text.replace(/\n/g, '<br />');
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            <h2 className="font-semibold text-[30px] mdx:text-[40px] xl:text-[45px] lh">{t("title")}</h2>
            <div className="mt-[23px] flex flex-col mdl:grid mdl:grid-cols-2 2xl:grid-cols-3 gap-[16px]">
                <div className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] 2xl:min-h-[272px] relative font-semibold">
                    <h5 className="text-[18px] mdx:text-[24px] xl:text-[26px] lh max-w-[60%]"
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
                <div className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] 2xl:min-h-[272px] relative font-semibold">
                    <h5 className="text-[18px] mdx:text-[24px] xl:text-[26px] lh max-mdl:max-w-[80%]"
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
                <div className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] 2xl:min-h-[272px] relative font-semibold">
                    <h5 className="text-[18px] mdx:text-[24px] xl:text-[26px] lh max-w-[60%]"
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
                <div className="w-full border p-[20px] mdx:p-[25px] flex flex-col justify-between min-h-[227px] mdx:min-h-[310px] 2xl:min-h-[272px] relative font-semibold">
                    <h5 className="text-[18px] mdx:text-[24px] xl:text-[26px] lh max-w-[60%]"
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
                {/* Last block stretching to 100% on 2xl */}
                <div className="w-full border p-[20px] mdx:p-[25px] flex flex-col  min-h-[227px] mdx:min-h-[310px]  2xl:min-h-[272px] relative 2xl:col-span-2 bg-[#00863E] text-white col-span-2 last:col-span">
                    <h5 className="text-[18px] mdx:text-[24px] xl:text-[26px] lh max-w-[283px] mdx:max-w-[323px] mdl:max-w-full font-semibold"
                        dangerouslySetInnerHTML={{ __html: formatText(t("subtitle5")) }}>
                    </h5>
                    <p className="mt-[8px] text-[15px] mdx:text-[18px] lh max-w-[283px] mdx:max-w-[323px] mdl:max-w-[478px] mdx:mt-[12px]"
                        dangerouslySetInnerHTML={{ __html: formatText(t("subtitle5-text")) }}>
                    </p>
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
                            alt="The Wild Oasis logo"
                            quality={100}
                            className="w-full h-auto max-w-[141px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
