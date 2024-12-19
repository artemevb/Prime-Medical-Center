import NewsList from "../_components/News/NewsList";

export async function generateMetadata({ params }) {
    const { locale } = params;
    const baseUrl = `https://pmcenter.uz/${locale}/news`;

    return {
        title: "Медицинский блог Prime Medical Center",
        description: "Исследуйте новые тенденции здравоохранения и секреты здоровья в нашем захватывающем медицинском блоге Prime Medical Center",
        keywords: [
            "Новости",
            "Обновления",
            "медицина",
            "медицинский блог",
            "медицинский журнал",
            "блог",
            "Prime Medical Center",
            "здравоохранение",
            "здоровье",
        ],
        canonical: baseUrl,
        robots: "index, follow",
        openGraph: {
            title: "Медицинский блог Prime Medical Center",
            description: "Исследуйте новые тенденции здравоохранения и секреты здоровья в нашем захватывающем медицинском блоге Prime Medical Center",
            url: baseUrl,
            type: "website",
            locale: locale,
            siteName: "Prime Medical Center",
            images: [
                {
                    url: "https://pmcenter.uz/images/Prime_MedicalCenter.png",
                    width: 800,
                    height: 600,
                    alt: "страница новостей",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Медицинский блог Prime Medical Center",
            description: "Исследуйте новые тенденции здравоохранения и секреты здоровья в нашем захватывающем медицинском блоге Prime Medical Center",
            images: ["https://pmcenter.uz/images/Prime_MedicalCenter.png"]
        },
        alternates: {
            canonical: `https://pmcenter.uz/${locale}/news`
        },
        robots: {
            index: true,
            follow: true
        },
    };
}

export default function Main({ params }) {
    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <NewsList locale={params.locale} />
        </div>
    );
}
