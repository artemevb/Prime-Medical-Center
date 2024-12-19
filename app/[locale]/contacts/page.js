import Contacts from "../_components/Contacts/contacts";
import SignUp from "../_components/Main/SignUp";

export async function generateMetadata({ params }) {
    const { locale } = params;

    // SEO метаданные
    return {
        title: "Контакты Prime Medical Center",
        description: "Свяжитесь с нами! Узнайте контактную информацию Prime Medical Center и задайте свои вопросы. Мы всегда готовы помочь.",
        keywords: ["контакты", "медицина", "Prime Medical Center", "задать вопрос", "телефон", "электронная почта"],
        openGraph: {
            title: "Контакты Prime Medical Center",
            description: "Свяжитесь с нами! Узнайте контактную информацию Prime Medical Center и задайте свои вопросы.",
            url: `https://pmcenter.uz/${locale}/contacts`,
            type: "website",
            images: [
                {
                    url: "https://pmcenter.uz/images/Prime_MedicalCenter.png",
                    width: 800,
                    height: 600,
                    alt: "Страница Контактов",
                },
            ],
        },
    };
}

export default function ContactsPage() {
    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <Contacts />
            <div className="mx-[10px] mb-[90px] mdx:mb-[130px] xl:mb-[170px]">
                <SignUp />
            </div>
        </div>
    );
}
