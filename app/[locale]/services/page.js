import OurServices from "../_components/Services/Services_pages";
import SignUp from "../_components/Main/SignUp";

export async function generateMetadata({ params }) {
    const { locale } = params;

    return {
        title: "Медицинские услуги: гастроэнтерология, эндоскопия и многое другое",
        description: " Prime Medical Center - ваш партнер в здоровье. Услуги: гастроэнтерология, эндоскопия, аллергология, терапия, неврология, УЗИ, лабораторные исследования.",
        keywords: [
            "медицинские услуги",
            "услуги Prime Medical Center",
            "частная клиника",
            "лечение Ташкент",
            "диагностика и лечение",
            "ташкент",
            "анализы",
            "врачи",
            "лучшие врачи",
        ],
        openGraph: {
            title: "Медицинские услуги: гастроэнтерология, эндоскопия и многое другое",
            description: " Prime Medical Center - ваш партнер в здоровье. Услуги: гастроэнтерология, эндоскопия, аллергология, терапия, неврология, УЗИ, лабораторные исследования.",
            url: `https://pmcenter.uz/${locale}/services`,
            type: "website",
            images: [
                {
                    url: "https://pmcenter.uz/Prime_MedicalCenter.png",
                    width: 800,
                    height: 600,
                    alt: "Медицинские услуги: гастроэнтерология, эндоскопия и многое другое",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Медицинские услуги: гастроэнтерология, эндоскопия и многое другое",
            description: " Prime Medical Center - ваш партнер в здоровье. Услуги: гастроэнтерология, эндоскопия, аллергология, терапия, неврология, УЗИ, лабораторные исследования.",
            images: ["https://pmcenter.uz/Prime_MedicalCenter.png"],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function ServicePage() {
    return (
        <div className="w-full bg-white flex flex-col gap-28 xl:gap-36 mt-[30px]">
            <OurServices />
            <div className="mx-[10px] mb-[100px] mdx:mb-[140px] xl:mb-[180px]">
                <SignUp />
            </div>
        </div>
    );
}
