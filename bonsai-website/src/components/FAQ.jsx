import { useState } from "react";
import faqsData from "../utilities/faqs";

function FAQ() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    function handleFAQSection(index) {
        setIsDropdownOpen(isDropdownOpen === index ? null : index);
    }

    return (
        <div className="flex flex-col gap-8 px-48">
            <h3 className="text-[#00b289] text-3xl text-center font-semibold">
                Frequently Asked Questions
            </h3>

            <ul className="flex flex-col gap-2">
                {faqsData.map((faq, index) => {
                    return (
                        <li key={index} className="flex flex-col text-2xl text-[#4c4d5f] hover:text-[#00b289] transition-all duration-150 ease-in-out" onClick={() => handleFAQSection(index)}>
                            <div className="flex justify-between items-center cursor-pointer">
                                <span className="font-bold">
                                    {faq.question}
                                </span>

                                <svg className={`h-8 text-gray-400 transition-all duration-150 ease-in-out ${isDropdownOpen === index ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" /></svg>
                            </div>

                            {isDropdownOpen === index && (
                                <p className="text-base text-gray-500 font-light pr-8">
                                    {faq.answer}
                                </p>
                            )}


                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FAQ