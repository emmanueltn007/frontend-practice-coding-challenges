function CTA() {
    return (
        <div className="bg-[#f2faff] flex justify-between py-16 px-12 mx-32 font-['PT Serif',sans-serif] rounded-md">
            <p className="text-5xl w-[60%] leading-16">
                It’s <span className="text-[#00b289]">your</span> business.
                We’re here to help it grow.
            </p>

            <button className="bg-[#00b289] text-white px-6 py-2 rounded-md cursor-pointer hover:brightness-90 transition duration-150 ease-in-out self-center">
                START FREE
            </button>
        </div>
    );
}

export default CTA