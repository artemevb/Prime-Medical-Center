import AboutCenter from "./AboutCenter";
import About from "./About";

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
