import { useTranslations } from "next-intl";
import Image from "next/image";
import doctor1 from "@/public/images/About/doctor1.png";
import doctor2 from "@/public/images/About/doctor2.png";
import big_doctors from "@/public/images/About/big_doctors.png";

const replaceNewLines = (text) => {
    return text.split('\n').map((str, index) => (
        <span key={index}>
            {str}
            <br />
        </span>
    ));
};

const Laboratory = () => {
    const t = useTranslations('About.Laboratory');

    return (
        <div className="w-full mx-auto max-w-[1440px]">
            <div className="xl:flex xl:justify-between xl:flex-row-reverse xl:items-center w-full">
                <div className="max-xl:px-[16px]  w-full">
                    <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] 3xl:text-[50px] font-semibold xl:hidden">
                        {t('title')}
                    </h2>
                    <div className="mt-[20px] mdx:mt-[25px] xl:mt-0 flex flex-col mdl:flex-row mdl:justify-between gap-[12px] mdl:gap-[14px] relative xl:flex-row xl:justify-center xl:gap-0 xl:relative w-full">
                        <div className="relative w-full xl:max-w-[288px] xl:bottom-[-305px] xl:right-0 xl:left-[142px] z-10 xl:aspect-w-4 xl:aspect-h-1">
                            <Image
                                src={doctor2}
                                width={1000}
                                height={1000}
                                quality={100}
                                alt={`Clinics`}
                                className="w-full h-full object-cover xl:absolute xl:right-0  xl:max-h-[310px] xl:border-8 border-white  z-10"
                            />
                        </div>
                        <div className="relative w-full xl:max-w-[588px] xl:aspect-w-4 xl:aspect-h-3">
                            <Image
                                src={doctor1}
                                width={1000}
                                height={1000}
                                quality={100}
                                alt={`Clinics`}
                                className="w-full h-auto object-cover  xl:hidden"
                            />
                            <Image
                                src={big_doctors}
                                width={1000}
                                height={1000}
                                quality={100}
                                alt={`Clinics`}
                                className="hidden xl:block w-full h-full object-cover xl:max-h-[550px] "
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-[25px] mdx:mt-[30px] xl:mt-0 w-full xl:max-w-[596px]">
                    <div className="max-xl:px-[16px]">
                        <h2 className="text-[30px] mdx:text-[40px] xl:text-[45px] 3xl:text-[50px] font-semibold ">
                            {t('title')}
                        </h2>
                        <p className="font-medium text-[16px] mdx:text-[18px] xl:text-[20px] text-[#323232] max-w-[628px] xl:mt-[40px]">
                            {replaceNewLines(t('text'))}
                        </p>
                        <button className="bg-[#00863E] hover:bg-[#398f61] w-full max-w-[223px] h-[50px] font-extrabold text-[#fff] text-[14px] mdx:text-[16px] mt-[25px] mdx:mt-[30px] xl:mt-[45px]">
                            {t('button')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laboratory;
