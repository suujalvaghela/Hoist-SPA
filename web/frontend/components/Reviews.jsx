import michaelImage from "../assets/6th1st.jpg";
import jasmineImage from "../assets/6th2nd.jpg";
import davidImage from "../assets/6th3rd.jpg";

function Testimonial({ image, quote, name, role, date }) {
    return <article className="border-b border-[#dfe3e5] py-6 first:pr-0 sm:border-b-0 sm:border-r sm:pr-8 sm:last:border-r-0 sm:last:pl-8">
        <blockquote className="m-0 min-h-[45px] text-[9px] leading-[1.45] text-[#353b3f]">“{quote}”</blockquote>
        <div className="mt-5 flex items-center justify-between gap-3">
            <Reviewer image={image} name={name} role={role} date="" />
            <b className="text-[6px] tracking-[1.4px] text-[#087dc5]">{date}</b>
        </div>
    </article>;
}

function Reviewer({ image, name, role, date }) {
    return <div className="flex items-center gap-3">
        <img className="h-11 w-11 rounded-full border-2 border-[#087dc5] object-cover p-0.5" src={image} alt={name} />
        <div>
            <strong className="block text-[8px] font-medium">{name}</strong>
            <small className="block text-[6px] text-[#7c858a]">{role}</small>
            <b className="mt-2 block text-[6px] tracking-[1.4px] text-[#087dc5]">{date}</b>
        </div>
    </div>;
}

export default function Reviews() {
    return (
        <div className="bg-[#f6f7f7] px-6 py-16 text-[#101114] sm:px-0 sm:py-[88px]">
            <div className="mx-auto max-w-[760px]">
                <p className="mb-6 flex items-center gap-2 text-[7px] font-semibold uppercase tracking-[1.7px] text-[#596168]"><i className="block w-5 border-t border-[#ffd000]" />In the field</p>
                <div className="flex flex-col justify-between gap-6 border-b border-[#dfe3e5] pb-10 sm:flex-row sm:items-end sm:gap-12">
                    <h2 className="m-0 max-w-[400px] font-sans text-[36px] font-semibold uppercase leading-[.92] tracking-[-1px] sm:text-[39px]">Trusted by<br />the world’s<br />leading facilities</h2>
                    <p className="m-0 max-w-[260px] text-[9px] leading-[1.5] text-[#727a80]">20,000+ facilities in more than 100 countries train on HOIST.</p>
                </div>

                <div className="grid gap-8 border-b border-[#dfe3e5] py-7 sm:grid-cols-[1.2fr_1fr] sm:items-center sm:gap-14">
                    <div>
                        <blockquote className="m-0 max-w-[430px] text-[20px] leading-[1.08] tracking-[-.5px]">“We specified an entire strength floor in HOIST. Four years of continuous use and the machines still feel new.”</blockquote></div>
                    <div>
                        <div className="mb-2 text-[12px] tracking-[2px] text-[#ffd000]">★★★★★</div>
                        <Reviewer image={michaelImage} name="Michael Reynolds" role="Director, Bayfront Athletic Club" date="MAR 2026" />
                    </div>
                </div>

                <div className="grid sm:grid-cols-2">
                    <Testimonial image={jasmineImage} quote="ROC-IT changed how our athletes load. Adjustment is intuitive enough that coaching time goes into training, not setup." name="Jasmine Ortega" role="Head of Performance, UC Strength" date="JAN 2026" />
                    <Testimonial image={davidImage} quote="Guests notice the finish before they notice the equipment. It looks like part of the architecture." name="David Carter" role="GM, Harborline Hotels" date="NOV 2025" />
                </div>
            </div>
        </div>
    )
}
