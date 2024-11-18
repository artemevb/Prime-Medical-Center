// app/[locale]/recomendation-list/page.js
import Block1 from "@/app/[locale]/_components/RecomendationList/Block1";
import Block1_1 from "@/app/[locale]/_components/RecomendationList/Block1_1";
import Block1_2 from "@/app/[locale]/_components/RecomendationList/Block1_2";
import Block1_3 from "@/app/[locale]/_components/RecomendationList/Block1_3";
import Block1_4 from "@/app/[locale]/_components/RecomendationList/Block1_4";

export default function RecomendationListPage({ params, searchParams }) {
    const { locale } = params;
    const { block } = searchParams;

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <Block1 locale={locale} />
            {block === '1' && <Block1_1 locale={locale} />}
            {block === '2' && <Block1_2 locale={locale} />}
            {block === '3' && <Block1_3 locale={locale} />}
            {block === '4' && <Block1_4 locale={locale} />}
            {!block && (
                <div className="p-4">
                    <p className="text-red-500">No specific recommendation selected.</p>
                </div>
            )}
        </div>
    );
}
