"use client"

import { useTranslations } from "next-intl";
import { useState} from 'react';

export default function SkillsMain({ doctorData }) {
    const t = useTranslations('Doctors.Skills');
    const [selectedTab, setSelectedTab] = useState('education');

    return (
        <div className="w-full bg-white h-full flex flex-col justify-between px-[16px] max-w-[1440px] mx-auto mt-[100px] mdx:mt-[130px] xl:mt-[150px]">
            <div className="text-[25px] mdx:text-[35px] xl:text-[45px] font-semibold flex flex-row gap-[25px] xl:gap-[50px] whitespace-nowrap relative w-full overflow-x-scroll scrollbar-hide">
                <button
                    onClick={() => setSelectedTab('education')}
                    className={`${selectedTab === 'education' ? 'text-black' : 'text-gray-300'}`}>
                    <h3>
                        {t("education")}
                    </h3>
                </button>
                <button
                    onClick={() => setSelectedTab('specialization')}
                    className={`${selectedTab === 'specialization' ? 'text-black' : 'text-gray-300'}`}>
                    <h3>
                        {t("specialization")}
                    </h3>
                </button>
            </div>

            <hr className="my-[25px] mdl:my-[30px]" />

            <div>
                {selectedTab === 'education' && doctorData?.educationList && (
                    <div>
                        {doctorData.educationList.map((education, index) => (
                            <div key={index} className="border-b pb-[15px] mb-[15px] mdl:pb-[30px] mdl:mb-[30px]">
                                <div className="mdl:flex mdl:justify-start gap-[20px] slg:gap-[50px] xl:gap-[170px]">
                                    <p className="text-[16px] mdx:text-[18px] xl:text-[20px] max-w-[345px] font-semibold">{education.startYear} - {education.finishYear} г.</p>
                                    <p className="text-[16px] mdx:text-[18px] xl:text-[20px] max-w-[345px] font-semibold">{education.institution}</p>
                                    <p className="text-[16px] mdx:text-[18px] xl:text-[20px] max-w-[345px] font-semibold">{education.qualification}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedTab === 'specialization' && doctorData?.specializationList && (
                    <div>
                        {doctorData.specializationList.map((specialization, index) => (
                            <div key={index} className="border-b pb-[15px] mb-[15px] mdl:pb-[30px] mdl:mb-[30px]">
                                <div className="mdl:flex mdl:justify-between max-w-[952px]">
                                    <p className="text-[16px] mdx:text-[18px] xl:text-[20px] max-w-[345px] font-semibold">{specialization.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

