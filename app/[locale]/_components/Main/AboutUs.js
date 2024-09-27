import { useTranslations } from "next-intl";
import Image from "next/image";
import Doctor from "@/public/images/Main/doctors.png";
import Clinic from "@/public/images/Main/clinics.png";

const AboutService = () => {
  const t = useTranslations('Main');
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[16px]">
      <div className="w-full py-[25px]">
        <Image
          quality={100}
          src={Doctor}
          alt="Doctor"
          objectFit="contain"
          className="w-[60%] h-full "
        />
      </div>
      <h1 className="text-[45px] mdx:text-[60px] 3xl:text-[70px] special-text">Prime<br />
        Medical Center</h1>
      <h5 className="text-[#9C9C9C] text-[16px] mdx:text-[18px] font-medium">{t("specialization")}</h5>
      <div className="flex flex-row justify-between w-full font-medium my-[25px]">
        <div className="max-w-[59px] mdx:max-w-[140px]">
          <h3 className="text-[22px]">{t("doctor_services_1")}</h3>
          <p className="text-[12px]">{t("doctor_services_1_subtitle")}</p>
        </div>
        <h3 className="inline text-[16px] max-w-[95px] font-medium mdx:max-w-[150px]">{t("doctor_services_2")}</h3>
        <h3 className="inline text-[16px] max-w-[112px] font-medium mdx:max-w-[180px]">{t("doctor_services_3")}</h3>
      </div>
      <button className=" bg-[#00863E] hover:bg-[#398f61] w-full px-[35px] max-w-[223px] min-h-[50px] hover:#398f61">
        <p className="text-white text-[14px] mdx:text-[16px]">{t("button_services")}</p>
      </button>
      <div className="w-full py-[25px]">
        <Image
          quality={100}
          src={Clinic}
          alt="Doctor"
          objectFit="contain"
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default AboutService;