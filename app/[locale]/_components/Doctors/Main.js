"use client"
import Image from "next/image"
import { useTranslations } from "next-intl";
import TypeService from '../Modal/TypeService'
import { useState} from "react";

export default function NewCard({ doctorData }) {
    const t = useTranslations('Doctors.Main');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="w-full bg-white h-full flex flex-col justify-between px-[16px] max-w-[1440px] mx-auto">
            <div className="mdl:flex mdl:flex-row mdl:gap-[10px] xl:gap-[40px]">
                <div className="w-full h-full max-h-[666px] xl:max-w-[588px]">
                    <Image
                        src={doctorData.photo?.url || '/path/to/default-image.png'}
                        width={800}
                        height={800}
                        quality={100}
                        alt={`Image of ${doctorData.fullName}`}
                        className="w-full h-auto object-cover rounded-[10px] max-h-[666px] max-w-[588px]"
                    />
                </div>
                <div className="w-full xl:max-w-[569px]">
                    <div className="flex flex-row gap-[8px] max-mdl:mt-[20px] flex-wrap">
                        {doctorData.specializationList && doctorData.specializationList.length > 0 ? (
                            doctorData.specializationList.map((spec, index) => (
                                <div key={index} className="rounded-[100px] flex items-center justify-center border-[#00863E] border">
                                    <p className="text-[#00863E] text-[14px] mdl:text-[16px] xl:text-[18px] py-[8px] px-[15px] font-medium">
                                        {spec.name}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-[#9C9C9C] text-[16px]">Специализации не указаны</p>
                        )}
                    </div>
                    <div>
                        <h2 className="mt-[15px] xl:mt-[30px] text-[25px] mdl:text-[30px] lg:text-[35px] xl:text-[45px] lh font-semibold">
                            {doctorData.fullName || 'Имя не указано'}
                        </h2>
                        <p className="mt-[8px] mdx:mt-[12px] xl:mt-[20px] text-[15px] xl:text-[20px] text-[#666666] font-medium">
                            {doctorData.description || 'Описание не указано'}
                        </p>
                    </div>
                    <div>
                        <div className="border rounded-[16px] flex flex-col px-[20px] py-[16px] mt-[25px] xl:mt-[40px]">
                            <div>
                                <h5 className="text-[18px] mdx:text-[20px] mdl:text-[24px] xl:text-[30px] font-semibold">
                                    {doctorData.experience || 'Опыт не указан'}
                                </h5>
                                <p className="text-[#9C9C9C] text-[14px] xl:text-[18px] font-medium">{t("experience")}</p>
                            </div>
                            <hr className="my-[16px]" />
                            <div>
                                <h5 className="text-[18px] mdx:text-[20px] mdl:text-[24px] xl:text-[30px] font-semibold">
                                    {doctorData.receptionTime || 'Время приёма не указано'}
                                </h5>
                                <p className="text-[#9C9C9C] text-[14px] xl:text-[18px] font-medium">{t("appointment-time")}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={openModal} className="w-full max-w-[223px] flex justify-center items-center bg-[#00863E] py-[12px] hover:bg-[#398f61] mt-[25px] xl:mt-[60px]">
                            <p className="text-[#fff] font-extrabold">{t("button")}</p>
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && <TypeService closeModal={closeModal} />}
        </div>
    )
}

