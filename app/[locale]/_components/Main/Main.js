import AboutCenter from "./AboutCenter";
import About from "./About";
import OurServices from "./OurServices";
import Recommendations from "./Recommendations";
import DoctorsSlider from "./DoctorsSlider";
import SignUp from "./SignUp";
import Contacts from "./Contacts";

export default function Main() {

  return (
    <div className="w-full bg-white flex flex-col gap-28 xl:gap-36">
      {/* <div className="flex w-full flex-col gap-12 lg:gap-[130px]">
        <Banner banners={banners} /> {/* Передаём баннеры в BannerCarousel
        <ProfessionalEquipments />
      </div>*/}
      {/* <Equipments /> */}
      <AboutCenter />
      <About />
      <OurServices />
      <Recommendations />
      <DoctorsSlider />
      <div className="mx-[10px]">
        <SignUp />
      </div>
      <Contacts />
      {/* <Scheme />
      <FullEquipment />
      <Sertificates />
      <Partners />
      <News />
      <Contacts />
      <Application closeModal={closeModal} /> */}
    </div>
  );
}
