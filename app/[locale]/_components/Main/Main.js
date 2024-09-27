// Main.js
"use client"; // Объявляем, что это клиентский компонент

import React from 'react';
import AboutUs from "./AboutUs";


export default function Main({ banners }) { // Принимаем баннеры через пропсы

  const closeModal = () => {
    // Реализация функции закрытия модального окна
  };

  return (
    <div className="w-full bg-white flex flex-col gap-28 xl:gap-36">
      {/* <div className="flex w-full flex-col gap-12 lg:gap-[130px]">
        <Banner banners={banners} /> {/* Передаём баннеры в BannerCarousel
        <ProfessionalEquipments />
      </div>*/}
     {/* <Equipments /> */}
      <AboutUs />
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
