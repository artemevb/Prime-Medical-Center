import Image from "next/image";
import close from "@/public/svg/close-modal.svg";
import telegram from "@/public/svg/social/telergam.svg";
import phone from "@/public/svg/social/phone.svg";
import arrow from "@/public/svg/arrow-right-green-news.svg";

import { useTranslations } from "next-intl";

export default function QuestionSent({ closeModal }) {
    const t = useTranslations('Modal');

    const handleClose = () => {
        closeModal();
    };

    // Функция для обработки символов новой строки \n
    const formatText = (text) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    // Закрытие модального окна при клике на область вне его
    const handleBackdropClick = (e) => {
        // Если клик был не на содержимом модального окна, закроем его
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]"
            onClick={handleBackdropClick}
        >
            <div className="bg-white p-6 mdx:p-[30px] shadow-md w-[90%] max-w-[466px] relative flex flex-col items-center justify-center">
                <div className="flex justify-between items-start w-full">
                    <h2 className=" lh text-[25px] font-semibold mdx:text-[35px] ">
                        {formatText(t('title_call'))}
                    </h2>
                    <div onClick={handleClose} className="w-full h-full max-w-[25px] max-h-[25px] mdx:max-w-[30px] mdx:max-h-[30px] absolute right-[15px] top-[15px] cursor-pointer">
                        <Image
                            src={close}
                            width={100}
                            height={100}
                            quality={100}
                            alt="close"
                            className="h-full w-full max-w-[25px] max-h-[25px] mdx:max-w-[30px] mdx:max-h-[30px]"
                        />
                    </div>
                </div>
                <div className='w-full mt-[30px] mdx:mt-[50px] '>
                    <div className=" border-b pb-[30px] ">
                        <a href="https://t.me/Prime_medical" target="_blank" className="flex flex-row items-center justify-between w-full">
                            <div >
                                <Image
                                    src={telegram}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    alt="telegram"
                                    className="h-full w-full max-w-[40px] max-h-[40px] mdx:max-w-[45px]"
                                />
                            </div>
                            <p className="text-[#00863E] text-[18px] mdx:text-[22px] font-bold mdx:font-semibold">{formatText(t('call_tg'))}</p>
                            <div>
                                <Image
                                    src={arrow}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    alt="arrow"
                                    className="h-full w-full max-w-[24px] max-h-[24px] "
                                />
                            </div>
                        </a>
                    </div>
                    <div className=" w-full pt-[30px]">
                        <a href="tel:+998781131343" className="flex flex-row items-center justify-between w-full">
                            <div className="rounded-full border p-[9px]">
                                <Image
                                    src={phone}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    alt="telegram"
                                    className="h-full w-full max-w-[21px] max-h-[21px] mdx:max-w-[24px]"
                                />
                            </div>
                            <p
                                className="text-[#00863E] text-[18px] mdx:text-[22px] font-bold mdx:font-semibold">
                                +998 (78) 113 13 43
                            </p>
                            <div>
                                <Image
                                    src={arrow}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    alt="arrow"
                                    className="h-full w-full max-w-[24px] max-h-[24px] "
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
