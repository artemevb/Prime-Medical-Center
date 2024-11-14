import Image from "next/image";
import Check from "@/public/svg/Check.svg";
import { useTranslations } from "next-intl";

export default function ModalOk({ closeModal }) {
    const t = useTranslations('Modal');
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]" onClick={handleBackdropClick}>
            <div className="bg-white p-5 mdx:p-6 shadow-md w-[90%] max-w-[466px] relative flex flex-col items-center justify-between h-full max-h-[400px] xl:max-h-[452px]">
                <div className="w-full max-w-[80px] max-h-[80px] mdx:max-w-[90px] mdx:max-h-[90px] h-full mb-[30px] mt-[15px] rounded-full bg-[#00863E] flex items-center justify-center">
                    <Image
                        src={Check}
                        width={100}
                        height={100}
                        quality={100}
                        alt="Icon"
                        className="h-full w-full max-w-[30px] max-h-[22px] mdx:max-w-[34px] mdx:max-h-[25px]"
                    />
                </div>
                <h2 className="text-[25px] font-semibold mb-2 mdl:text-[30px] xl:text-[35px] xl:mb-4 text-center lh">{t('title')}</h2>
                <p className="text-[15px] xl:text-[18px] text-[#666666] mb-6 w-full flex justify-center text-center max-w-[364px]">{t('subtitle')}</p>
                <button
                    type="button"
                    className="w-full bg-[#00863E] hover:bg-[#398f61] py-3 px-4 text-white font-semibold"
                    onClick={closeModal}>
                    {t('button')}
                </button>
            </div>
        </div>
    );
}
