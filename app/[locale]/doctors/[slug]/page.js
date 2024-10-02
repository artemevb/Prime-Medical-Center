import SignUp from "../../_components/Main/SignUp";
import Main_info from "../../_components/Doctors/Main";
import SkillsMain from "../../_components/Doctors/SkillsMain";

export default function page() {
    return (
        <div className="w-full bg-white flex flex-col mt-[30px]">
            <Main_info />
            <SkillsMain />
            <div className="mx-[10px] mb-[90px] mdx:mb-[130px] xl:mb-[150px]">
                <SignUp />
            </div>
        </div>
    );
}