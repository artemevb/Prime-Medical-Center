import { useTranslations } from "next-intl";
import Image from "next/image";
import clinics from "@/public/images/About/images2.png";

const replaceNewLines = (text) => {
    return text.split('\n').map((str, index) => (
        <span key={index}>
            {str}
            <br />
        </span>
    ));
};

const Service = () => {
    const t = useTranslations('About.Service');

    return (
        <div className="w-full mx-auto max-xl:mt-[30px] max-w-[1440px]">
            <div className="xl:flex xl:justify-between ">
                <div className="max-xl:px-[16px] xl:w-[50%] ">
                    <div className="inline">
                        <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] 3xl:text-[50px] font-semibold">
                            {t('title')}
                        </h2>
                        <p className="font-medium text-[16px] mdx:text-[18px] xl:text-[20px] text-[#323232] mdx:mt-[20px] xl:mt-[30px] max-w-[628px]">
                            {replaceNewLines(t('text'))}
                        </p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full max-w-[223px] h-[50px] font-extrabold text-[#fff] text-[14px] mdx:text-[16px] mt-[25px] mdx:mt-[30px] ">
                            {t('button')}
                        </button>
                    </div>
                </div>

                <div className="mt-[35px] mdx:mt-[60px] xl:mt-0 w-full xl:w-[50%]">
                    <Image
                        src={clinics}
                        width={1000}
                        height={1000}
                        quality={100}
                        alt={`Clinics`}
                        className="w-full h-auto object-cover max-h-[690px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Service;
