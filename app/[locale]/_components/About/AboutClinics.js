import { useTranslations } from "next-intl";
import Image from "next/image";
import clinics from "@/public/images/About/images1.png";

const AboutService = () => {
    const t = useTranslations('About.Clinics');

    return (
        <div className="w-full mx-auto max-xl:mt-[30px]">
            <div className="xl:flex xl:justify-between items-center">
                <div className="max-xl:px-[16px] xl:w-[50%] xl:ml-[2%] 2xl:ml-[4.5%] 4xl:ml-[13%]">
                    <div className="inline">
                        <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] 3xl:text-[50px] font-semibold">
                            {t('title')}
                        </h2>
                        <p className="font-medium text-[16px] mdx:text-[18px] xl:text-[20px] text-[#666666] mdx:mt-[10px] max-w-[628px]">
                            {t('text')}
                        </p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full max-w-[223px] h-[50px] font-extrabold text-[#fff] text-[14px] mdx:text-[16px] mt-[25px] mdx:mt-[30px] ">
                            {t('button')}
                        </button>
                    </div>
                </div>

                <div className="mt-[35px] mdx:mt-[60px] xl:mt-0 w-full xl:w-[50%] 4xl:w-[65%]">
                    <Image
                        src={clinics}
                        width={1000}
                        height={1000}
                        quality={100}
                        alt={`Clinics`}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

        </div>
    );
};

export default AboutService;