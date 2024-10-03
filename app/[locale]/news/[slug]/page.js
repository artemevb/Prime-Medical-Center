import MainPages from "../../_components/NewsMain/MainPages";
import Share from "../../_components/NewsMain/Share";
import OtherNews from "../../_components/NewsMain/OtherNews";

export default function Main({ params }) {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <MainPages locale={params.locale} />
            <div className="max-xl:px-[15px]">
                <Share />
            </div>
            <OtherNews locale={params.locale} />
        </div>
    );
}
