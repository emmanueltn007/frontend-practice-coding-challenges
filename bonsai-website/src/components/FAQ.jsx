import { useState } from "react";
import faqsData from "../utilities/faqs";

function FAQ() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    function handleFAQSection(index) {
        setIsDropdownOpen(isDropdownOpen === index ? null : index);
    }

    return (
        <div>
            <h3 className="text-[#00b289] text-3xl text-center">
                Frequently Asked Questions
            </h3>

            <ul>
                {faqsData.map((faq, index) => {
                    return (
                        <li key={index} className="flex justify-between" onClick={() => handleFAQSection(index)}>
                            <div>
                                <span>
                                    {faq.question}
                                </span>

                                {isDropdownOpen === index && (
                                    <p>
                                        {faq.answer}
                                    </p>
                                )}
                            </div>

                            <img className="h-8" src="./images/angle-down-solid-full.svg" alt="FAQ dropdown icon" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FAQ