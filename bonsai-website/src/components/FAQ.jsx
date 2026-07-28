import { useState } from "react";
import faqsData from "../utilities/faqs";

function FAQ () {

    const [isClicked, setIsClicked] = useState(false);

    function handleFAQSection () {
        setIsClicked(prev => !prev);
    }

    return (
        <div>
            <h3 className="text-[#00b289] text-3xl text-center">
                Frequently Asked Questions
            </h3>

            <ul>
                {faqsData.map((faq, index) => {
                    return (
                        <li key={index} className="flex justify-between" onClick={() => handleFAQSection()}>
                            <div>
                                <span>
                                {faq.question}
                            </span>
                            
                            <p className={`${isClicked === false && faq === index ? "hidden" : "block"}`} >
                                {faq.answer}
                            </p>
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