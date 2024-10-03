import Image from "next/image";

import { useTranslations } from "next-intl";

export default function QuestionSent({ closeModal }) {
    const t = useTranslations('Modal');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
            <div className="bg-white p-6 shadow-md w-[90%] max-w-[466px] relative flex flex-col items-center justify-center">
                <h2 className="lh text-[25px] font-semibold mdx:text-[35px] ">
                    {t('title_call')}
                </h2>
                
            </div>
        </div>
    );
}
