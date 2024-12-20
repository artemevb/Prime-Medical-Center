import AboutCenter from "./AboutCenter";
import About from "./About";
import OurServices from "./OurServices";
import Recommendations from "./Recommendations";
import DoctorsSlider from "./DoctorsSlider";
import SignUp from "./SignUp";
import Contacts from "./Contacts";

export default function Main({ params }) {

  return (
    <div className="w-full bg-white flex flex-col gap-28 xl:gap-36">
      <AboutCenter />
      <About />
      <OurServices />
      <Recommendations locale={params.locale}/>
      <DoctorsSlider locale={params.locale} />
      <div className="mx-[10px]">
        <SignUp />
      </div>
      <Contacts />
    </div>
  );
}
