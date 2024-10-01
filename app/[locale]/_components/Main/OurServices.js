import { useTranslations } from "next-intl";
import Image from "next/image";
import Doctor1 from "@/public/images/Main/services1.png";
import Doctor2 from "@/public/images/Main/services2.png";
import Doctor3 from "@/public/images/Main/services3.png";
import Doctor4 from "@/public/images/Main/services4.png";
const OurServices = () => {
    const t = useTranslations('Main.OurServices');
    return (
        <div className="w-full max-w-[1440px] mx-auto px-[16px]">
            <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] font-semibold">
                {t("title")}
            </h2>
            <div className="flex gap-[50px] xl:gap-[80px] flex-col mt-[25px] xl:mt-[40px]">
                <div className="xl:flex xl:flex-row xl:gap-[55px] xl:items-center">
                    <div className="xl:max-w-[700px]">
                        <Image
                            quality={100}
                            src={Doctor1}
                            alt="Doctor"
                            objectFit="contain"
                            className="w-full h-auto "
                        />
                    </div>
                    <div className="mt-[20px]">
                        <h5 className=" font-medium text-[22px] mdx:text-[30px] xl:text-[35px] max-w-[447px] lh">
                            {t("subtitle-library")}
                        </h5>
                        <p className="text-[15px] mdx:text-[18px] text-[#9C9C9C] mt-[5px] max-w-[569px] xl:max-w-[447px] xl:mt-[13px]">{t("subtitle-library-text")}</p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full mdx:px-[20px] max-w-[223px] min-h-[50px] hover:[#398f61] mt-[20px]">
                            <p className="text-white text-[14px] mdx:text-[16px]">{t("price")}</p>
                        </button>
                    </div>

                </div>
                <div className="xl:flex xl:flex-row-reverse xl:gap-[55px] xl:items-center xl:justify-between">
                    <div className="xl:max-w-[700px]">
                        <Image
                            quality={100}
                            src={Doctor2}
                            alt="Doctor"
                            objectFit="contain"
                            className="w-full h-auto "
                        />
                    </div>
                    <div className="mt-[20px]">
                        <h5 className=" font-medium text-[22px] mdx:text-[30px] xl:text-[35px] max-w-[447px] lh">
                            {t("subtitle-specialist-consultations")}
                        </h5>
                        <p className="text-[15px] mdx:text-[18px] text-[#9C9C9C] mt-[5px] max-w-[569px] xl:max-w-[447px] xl:mt-[13px]">{t("subtitle-specialist-consultations-text")}</p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full mdx:px-[20px] max-w-[223px] min-h-[50px] hover:[#398f61] mt-[20px]">
                            <p className="text-white text-[14px] mdx:text-[16px]">{t("price")}</p>
                        </button>
                    </div>

                </div>
                <div className="xl:flex xl:flex-row xl:gap-[55px] xl:items-center">
                    <div className="xl:max-w-[700px]">
                        <Image
                            quality={100}
                            src={Doctor3}
                            alt="Doctor"
                            objectFit="contain"
                            className="w-full h-auto "
                        />
                    </div>
                    <div className="mt-[20px]">
                        <h5 className=" font-medium text-[22px] mdx:text-[30px] xl:text-[35px] max-w-[447px] lh">
                            {t("subtitle-instrumental-diagnostics")}
                        </h5>
                        <p className="text-[15px] mdx:text-[18px] text-[#9C9C9C] mt-[5px] max-w-[569px] xl:max-w-[447px] xl:mt-[13px]">{t("subtitle-instrumental-diagnostics-text")}</p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full mdx:px-[20px] max-w-[223px] min-h-[50px] hover:[#398f61] mt-[20px]">
                            <p className="text-white text-[14px] mdx:text-[16px]">{t("price")}</p>
                        </button>
                    </div>

                </div>
                <div className="xl:flex xl:flex-row-reverse xl:gap-[55px] xl:items-center xl:justify-between">
                    <div className="xl:max-w-[700px]">
                        <Image
                            quality={100}
                            src={Doctor4}
                            alt="Doctor"
                            objectFit="contain"
                            className="w-full h-auto "
                        />
                    </div>
                    <div className="mt-[20px]">
                        <h5 className=" font-medium text-[22px] mdx:text-[30px] xl:text-[35px] max-w-[447px] lh">
                            {t("subtitle-functional-diagnostics")}
                        </h5>
                        <p className="text-[15px] mdx:text-[18px] text-[#9C9C9C] mt-[5px] max-w-[569px] xl:max-w-[447px] xl:mt-[13px]">{t("subtitle-functional-diagnostics-text")}</p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full mdx:px-[20px] max-w-[223px] min-h-[50px] hover:[#398f61] mt-[20px]">
                            <p className="text-white text-[14px] mdx:text-[16px]">{t("price")}</p>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurServices;
