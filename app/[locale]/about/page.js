import SignUp from "../_components/Main/SignUp";
import SliderDoctors from "../_components/About/SliderDoctors";
import Advantages from "../_components/About/Advantages";
import AboutClinics from "../_components/About/AboutClinics";
import Service from "../_components/About/Service";
import Laboratory from "../_components/About/Laboratory";

export async function generateMetadata({ params }) {
    const { locale } = params;

    return {
        title: "Компания PRIME MEDICAL CENTER - 15 лет на рынке",
        description: "PRIME MEDICAL CENTER - ведущий гастроэнтерологический центр Узбекистана. Широкий спектр медицинских услуг. Основан в 2006 году",
        keywords: [
            "о клинике",
            "Prime Medical Center",
            "медицина Ташкент",
            "медицинские услуги",
            "современная клиника",
        ],
        openGraph: {
            title: "Компания PRIME MEDICAL CENTER - 15 лет на рынке",
            description: "PRIME MEDICAL CENTER - ведущий гастроэнтерологический центр Узбекистана. Широкий спектр медицинских услуг. Основан в 2006 году",
            url: `https://pmcenter.uz/${locale}/about`,
            type: "website",
            images: [
                {
                    url: "https://pmcenter.uz/images/Prime_MedicalCenter.png",
                    width: 800,
                    height: 600,
                    alt: "Компания PRIME MEDICAL CENTER - 15 лет на рынке",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Компания PRIME MEDICAL CENTER - 15 лет на рынке",
            description: "PRIME MEDICAL CENTER - ведущий гастроэнтерологический центр Узбекистана. Широкий спектр медицинских услуг. Основан в 2006 году",
            images: ["https://pmcenter.uz/images/Prime_MedicalCenter.png"],
        },
        alternates: {
            canonical: `https://pmcenter.uz/${locale}/about`
        },
        robots: {
            index: true,
            follow: true
        },
    };
}

export default function AboutPage({ params }) {
    return (
        <div className="w-full bg-white flex flex-col gap-[90px] mdx:gap-[120px] xl:gap-[180px]">
            <AboutClinics />
            <Advantages />
            <Service locale={params.locale} />
            <SliderDoctors locale={params.locale} />
            <Laboratory />
            <div className="mx-[10px] mb-[90px] mdx:mb-[130px] xl:mb-[150px]">
                <SignUp />
            </div>
        </div>
    );
}
