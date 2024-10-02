import Contacts from "../_components/Contacts/contacts";
import SignUp from "../_components/Main/SignUp";
import { useTranslations } from "next-intl";

export default function Main() {

    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <Contacts />
            <div className="mx-[10px] mb-[90px] mdx:mb-[130px] xl:mb-[170px]">
                <SignUp />
            </div>
        </div>
    );
}