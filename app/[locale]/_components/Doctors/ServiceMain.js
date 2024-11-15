"use client"

import { useTranslations } from "next-intl";
import { useState, useEffect } from 'react';
import arrow from "@/public/svg/arrow-bottom-green.svg";
import Image from "next/image";

export default function ServiceMain({ doctorData }) {
    const t = useTranslations('Doctors.Doctor-services');
    const [showMore, setShowMore] = useState(false);
    const [itemsLimit, setItemsLimit] = useState(12);



    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 460) {
                setItemsLimit(12);
            } else {
                setItemsLimit(4);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const servicesToShow = showMore ? doctorData?.serviceOfDoctorList : doctorData?.serviceOfDoctorList.slice(0, itemsLimit);

    return (
        <div className="w-full bg-white h-full flex flex-col justify-between px-[16px] max-w-[1440px] mx-auto my-[90px] mdx:my-[120px] xl:my-[140px]">
            <h2 className="font-semibold text-[30px] mdx:text-[35px] mdl:text-[40px] xl:text-[45px]">
                {t('services')}
            </h2>
            <div className="grid mdx:gap-x-[16px] gap-y-[12px] mdx:gap-y-[20px] mdx:grid-cols-2 mt-[25px] mdx:mt-[30px] 2xl:grid-cols-4">

                {servicesToShow && (

                    servicesToShow.map((service, index) => (
                        <div key={index} className="border border-[#EEE] p-[20px] flex flex-col justify-between min-h-[150px] mdx:min-h-[180px] 2xl:min-h-[200px]">
                            <h5 className="text-[18px] mdx:text-[18px] xl:text-[22px] font-semibold">{service.name}</h5>
                            <p className="text-[#00863E] text-[18px] mdx:text-[18px] xl:text-[22px] font-bold">{service.price}</p>
                        </div>
                    ))

                )}

            </div>
            {doctorData?.serviceOfDoctorList.length > itemsLimit && (
                <button
                    className="mt-[25px] mdx:mt-[35px] xl:mt-[45px] text-[16px] mdx:text-[18px] xl:text-[20px] text-[#00863E] font-bold flex items-center justify-center"
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? t('services-all-false') : t('services-all')}
                    <Image
                        src={arrow}
                        width={25}
                        height={25}
                        quality={100}
                        alt="arrow"
                        className={`h-[25px] object-cover transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                    />
                </button>

            )}
        </div>
    );
}
