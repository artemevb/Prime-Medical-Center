"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import arrow from "@/public/svg/arrow-bottom-light.svg";

export default function ContAddress({ closeModal }) {
    const t = useTranslations('Main.SignUp');

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [values, setValues] = useState({
        name: "", // Full name
        phone: "", // Phone number
    });

    const [focusedInput, setFocusedInput] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(t('text-3')); // Default placeholder for dropdown

    // Services translated using next-intl
    const services = [
        t('services-1'),
        t('services-2'),
        t('services-3')
    ];

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validateInput = (name, value) => {
        if (name === "name") {
            return value.length >= 3
                ? { isValid: true, message: t('correct') }
                : { isValid: false, message: t('enter_full_name') };
        } else if (name === "phone") {
            const phoneRegex =
                /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
            return phoneRegex.test(value)
                ? { isValid: true, message: t('correct') }
                : { isValid: false, message: t('enter_valid_phone_number') };
        }
        return { isValid: true, message: "" };
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleSelectService = (service) => {
        setSelectedService(service);
        setIsDropdownOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone } = values;
        if (!name || !phone) {
            return;
        }

        try {
            const response = await axios.post("https://imed.uz/api/v1/application", values);
            if (response.status === 200) {
                setIsSubmitted(true);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="bg-[#00863E] p-4 pb-9 mdx:px-[40px] lg:py-[40px] xl:px-[80px] 2xl:px-[120px] xl:py-[80px]">
            <div className="flex max-xl:flex-col gap-12 max-lg:gap-8 mx-auto w-full h-auto max-w-[1440px] 5xl:max-w-[2000px]">
                <div className="lg:flex lg:flex-row lg:justify-between w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto">
                    <div>
                        <h3 className="text-[25px] text-[#fff] mdx:font-semibold mdx:text-[30px] pt-[20px] pb-[17px] mdx:pt-[30px] mdx:pb-[30px] 3xl:text-[35px] xl:pt-0 lh max-mdx:max-w-[50%] xl:pb-[12px]">
                            {t('title')}
                        </h3>
                        <h5 className="text-[15px] mdx:text-[16.5px] xl:text-[18px] max-w-[325px] text-[#fff] opacity-[0.8] mb-[25px]">
                            {t('subtitle')}
                        </h5>
                    </div>
                    <form className="flex flex-col gap-9 w-full max-lg:max-w-full max-w-[350px] 3xl:mr-[5%] 4xl:mr-[10%] xl:gap-12" onSubmit={handleSubmit}>
                        {["name", "phone"].map((field) => (
                            <div className="relative" key={field}>
                                <input
                                    type="text"
                                    name={field}
                                    value={values[field]}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedInput(field)}
                                    onBlur={() => setFocusedInput(null)}
                                    className={`block w-full px-3 py-2 bg-[#00863E] text-white placeholder-transparent focus:outline-none border-b-2 ${focusedInput === field
                                        ? validateInput(field, values[field]).isValid
                                            ? "border-[#E1E1E1] opacity-[0.8]"
                                            : "border-[#E1E1E1] opacity-[0.8]"
                                        : "border-[#E1E1E1] opacity-[0.8]"
                                        }`}
                                    placeholder={t(
                                        field === "name"
                                            ? "full-name"
                                            : "telephone-number"
                                    )}
                                />
                                <label
                                    htmlFor={field}
                                    className={`absolute transition-all text-[16px] mdx:text-[19px] ${focusedInput === field || values[field]
                                        ? "-top-4 text-xs"
                                        : "top-1 text-[16px] mdx:text-[20px]"
                                        } ${focusedInput === field
                                            ? validateInput(field, values[field]).isValid
                                                ? "text-white opacity-[0.8]"
                                                : "text-white opacity-[0.8]"
                                            : "text-white opacity-[0.8]"
                                        } cursor-text`}
                                    onClick={() => document.getElementsByName(field)[0].focus()}
                                >
                                    {focusedInput === field && values[field].length > 0
                                        ? validateInput(field, values[field]).message
                                        : field === "name"
                                            ? t('info')
                                            : t('telephone-number')}
                                </label>
                            </div>
                        ))}
                        <div className="relative border-b-[2px] border-[#E1E1E1] border-opacity-[0.8] mt-3">
                            {/* Dropdown Button */}
                            <button
                                type="button"
                                className="w-full bg-[#00863E] text-white opacity-[0.8] text-[16px] mdx:text-[20px] text-left border-[#E1E1E1] pb-[10px]"
                                onClick={toggleDropdown}
                            >
                                {selectedService}
                                <span className="float-right">
                                    <Image
                                        quality={100}
                                        src={arrow}
                                        alt="arrow-green"
                                        objectFit="contain"
                                        className="w-full h-auto rounded-full max-w-[32px] mt-1"
                                    /></span>
                            </button>

                            {/* Dropdown List */}
                            {isDropdownOpen && (
                                <ul className="absolute bg-white border border-gray-300 w-full mt-1 z-10">
                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="p-3 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handleSelectService(service)}
                                        >
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="py-[13px] w-full mdx:w-[223px] mdx:px-12 text-[14px] bg-white font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white xl:w-[224px] xl:text-[16px] text-[#00863E] "
                            >
                                {t('send')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
