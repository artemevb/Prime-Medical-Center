import List from "../_components/Doctors/List";
import SignUp from "../_components/Main/SignUp";
import { useTranslations } from "next-intl";

export default function Main({ params }) {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <List locale={params.locale} />
            <div className="mx-[10px] mb-[90px] mdx:mb-[130px] xl:mb-[170px]">
                <SignUp />
            </div>
        </div>
    );
}
