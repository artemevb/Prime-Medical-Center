
import Image from "next/image";
import Check from "@/public/svg/Check.svg";
import { useTranslations } from "next-intl";


export default function QuestionSent({ closeModal }) {
    const t = useTranslations('Modal');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
            <div className="bg-white p-6 shadow-md w-[90%] max-w-[466px] relative flex flex-col items-center justify-center">
                <div className="w-full max-w-[90px] mdx:max-w-[90px] mb-[30px] mt-[15px] rounded-full bg-[#00863E]">
                    <Image
                        src={Check}
                        width={100}
                        height={100}
                        quality={100}
                        alt="Icon"
                        className="h-full w-full max-w-[34px] max-h-[25px]"
                    />
                </div>
                <h2 className="text-[22px] font-semibold mb-2 mdl:text-[25px] xl:text-[35px] xl:mb-4">{t('title')}</h2>
                <p className="text-[15px] text-[#666666] mb-6 w-full mdx:text-[16px] mdl:text-[17px] xl:text-[18px] flex justify-center">{t('subtitle')}</p>
                <button
                    type="button"
                    className="w-full bg-[#00863E] hover:bg-[#398f61] py-3 px-4 text-white font-semibold mb-3"
                    onClick={closeModal}>
                    {t('button')}
                </button>
            </div>
        </div>
    );
}
