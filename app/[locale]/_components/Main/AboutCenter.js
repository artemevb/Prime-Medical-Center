"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Head from "next/head"; // Импортируем Head для добавления шрифта
import Doctor from "@/public/images/Main/doctors.png";
import Clinic from "@/public/images/Main/clinics.png";
import Link from "next/link";
import { useState } from "react";
import TypeService from '../Modal/TypeService'

const AboutService = () => {
  const t = useTranslations('Main');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };


  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px]">
      {/* Подключаем шрифт через Google Fonts */}
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mdl:flex flex-row-reverse justify-between mdl:mt-[40px] xl:mt-[50px]">
        <div className="w-[40%] max-mdl:py-[25px] 2xl:w-[60%] 2xl:max-w-[710px]">
          <Image
            quality={100}
            src={Doctor}
            alt="Doctor"
            objectFit="contain"
            className="w-full h-auto  2xl:hidden"
          />
          <div className="w-full hidden 2xl:block">
            <Image
              quality={100}
              src={Clinic}
              alt="Clinic"
              objectFit="contain"
              className="w-full h-full "
            />
          </div>
          <div className="hidden 2xl:flex flex-row justify-between w-full font-semibold my-[15px] 2xl:mt-[44px]">
            <div className="max-w-[59px] mdx:max-w-[147px]">
              <h3 className="text-[22px] mdl:text-[34px] 2xl:text-[36px]">{t("doctor_services_1")}</h3>
              <p className="text-[12px] mdl:text-[18px] text-[#9C9C9C]">{t("doctor_services_1_subtitle_mdx")}</p>
            </div>
            <h3 className="inline text-[16px] max-w-[95px] font-semibold mdx:max-w-[150px] mdl:text-[24px] 2xl:text-[26px]">
              {t("doctor_services_2")}
            </h3>
            <h3 className="inline text-[16px] max-w-[112px] font-semibold mdx:max-w-[180px] mdl:text-[24px] 2xl:text-[26px]">
              {t("doctor_services_3")}
            </h3>
          </div>
        </div>
        <div>
          <h1 className="text-[45px] mdx:text-[60px] 3xl:text-[70px] font-marcellus leading-[1.1]">
            Prime<br />
            Medical Center
          </h1>
          <h5 className="text-[#9C9C9C] text-[16px] mdx:text-[18px] font-medium pt-[10px]">
            {t("specialization")}
          </h5>
          <button onClick={openModal} className="hidden mdl:block bg-[#00863E] hover:bg-[#398f61] w-full mdx:px-[20px] max-w-[223px] min-h-[50px] hover:[#398f61] mt-[30px] font-extrabold">
            <p className="text-white text-[14px] mdx:text-[16px]">{t("button_services")}</p>
          </button>
          <div className="hidden 2xl:block w-full mt-[127px]">
            <Image
              quality={100}
              src={Doctor}
              alt="Doctor"
              objectFit="contain"
              className="h-full w-full max-w-[345px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full font-semibold my-[25px] mdl:hidden">
        <div className="max-w-[59px] mdx:max-w-[144px]">
          <h3 className="text-[22px] mdl:text-[34px]">{t("doctor_services_1")}</h3>
          <p className="text-[12px] mdl:text-[18px] text-[#9C9C9C]">{t("doctor_services_1_subtitle")}</p>
        </div>
        <h3 className="inline text-[16px] max-w-[95px] font-semibold mdx:max-w-[150px] mdl:text-[24px]">
          {t("doctor_services_2")}
        </h3>
        <h3 className="inline text-[16px] max-w-[112px] font-semibold mdx:max-w-[180px] mdl:text-[24px]">
          {t("doctor_services_3")}
        </h3>
      </div>
      <button onClick={openModal} className=" bg-[#00863E] hover:bg-[#398f61] w-full px-[35px] mdx:px-[20px] max-w-[223px] min-h-[50px] hover:[#398f61] mdl:hidden font-extrabold">
        <p className="text-white text-[14px] mdx:text-[16px]">{t("button_services")}</p>
      </button>
      <div className="w-full py-[25px] mdl:mt-[60px] 2xl:hidden">
        <Image
          quality={100}
          src={Clinic}
          alt="Clinic"
          objectFit="contain"
          className="w-full h-full "
        />
      </div>
      <div className="hidden mdl:flex flex-row justify-between w-full font-semibold my-[15px] 2xl:hidden">
        <div className="max-w-[59px] mdx:max-w-[144px]">
          <h3 className="text-[22px] mdl:text-[34px]">{t("doctor_services_1")}</h3>
          <p className="text-[12px] mdl:text-[18px] text-[#9C9C9C]">{t("doctor_services_1_subtitle")}</p>
        </div>
        <h3 className="inline text-[16px] max-w-[95px] font-semibold mdx:max-w-[150px] mdl:text-[24px]">
          {t("doctor_services_2")}
        </h3>
        <h3 className="inline text-[16px] max-w-[112px] font-semibold mdx:max-w-[180px] mdl:text-[24px]">
          {t("doctor_services_3")}
        </h3>
      </div>
      {isModalOpen && <TypeService closeModal={closeModal} />}
    </div>
  );
};

export default AboutService;
