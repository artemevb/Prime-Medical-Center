import List from "../_components/Doctors/List";
import SignUp from "../_components/Main/SignUp";


export async function generateMetadata({ params }) {
    const { locale } = params;
    return {
        title: "Врачи Ташкента",
        description: "Встречайте лучших врачей Ташкента! Наша клиника с гордостью представляет опытных специалистов, чьи знания и профессионализм признаны на международном уровне.",
        keywords: [
            "врачи Ташкента",
            "лучшие врачи",
            "медицинские специалисты Ташкента",
            "Prime Medical Center врачи",
            "медицина Ташкент",
        ],
        openGraph: {
            title: "Врачи Ташкента",
            description: "Встречайте лучших врачей Ташкента! Наша клиника с гордостью представляет опытных специалистов, чьи знания и профессионализм признаны на международном уровне.",
            url: `https://pmcenter.uz/${locale}/doctors`,
            type: "website",
            images: [
                {
                    url: "https://pmcenter.uz/Prime_MedicalCenter.png",
                    width: 800,
                    height: 600,
                    alt: "Страница врачей",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Врачи Ташкента",
            description: "Встречайте лучших врачей Ташкента! Наша клиника с гордостью представляет опытных специалистов, чьи знания и профессионализм признаны на международном уровне.",
            images: ["https://pmcenter.uz/Prime_MedicalCenter.png"],
        },
        alternates: {
            canonical: `https://pmcenter.uz/${locale}/doctors`
        },
        robots: {
            index: true,
            follow: true
        },
    };
}

export default function DoctorsPage({ params }) {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <List locale={params.locale} />
            <div className="mx-[10px] mb-[90px] mdx:mb-[130px] xl:mb-[170px]">
                <SignUp />
            </div>
        </div>
    );
}
