import NewsList from "../_components/News/NewsList";


export async function generateMetadata({ params }) {
    const { locale } = params;
    return {
        title: "Медицинский блог Prime Medical Center",
        description: "Исследуйте новые тенденции здравоохранения и секреты здоровья в нашем захватывающем медицинском блоге Prime Medical Center",
        keywords: ["Новости", "Обновления", "медицина", "медицинский блог", "медицинский журнал", "блог"],
        openGraph: {
            title: "Медицинский блог Prime Medical Center",
            description: "Исследуйте новые тенденции здравоохранения и секреты здоровья в нашем захватывающем медицинском блоге Prime Medical Center",
            url: `https://pmcenter.uz/${locale}/news`,
            type: "website",
            images: [
                {
                    url: "https://pmcenter.uz/Prime_MedicalCenter.png",
                    width: 800,
                    height: 600,
                    alt: "страница новостей",
                },
            ],
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
