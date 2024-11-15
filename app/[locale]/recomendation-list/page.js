import List from "../_components/RecomendationList/List";

export default function Main({ params }) {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <List locale={params.locale} />
        </div>
    );
}