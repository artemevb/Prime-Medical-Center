import NewsList from "../_components/News/NewsList";

export default function Main({ params }) {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <NewsList locale={params.locale} />
        </div>
    );
}
