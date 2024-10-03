import MainPages from "../../_components/NewsMain/MainPages";
// import Share from "../../_components/NewsMain/Share";
// import OtherNews from "../../_components/NewsPages/OtherNews";

export default function Main({ params }) {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <MainPages locale={params.locale} />
            {/* <Share />
            <OtherNews locale={params.locale} /> */}
        </div>
    );
}
