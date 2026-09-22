import rackImage from "../assets/3rd1st.png";
import cageImage from "../assets/3rd2nd.png";
import smithImage from "../assets/3rd3rd.png";
import trainerImage from "../assets/3rd4th.png";

function ProductCard({ image, tag, name }) {
    return (
        <article className="w-[200px] shrink-0 sm:w-[200px]">
            <div className="flex h-[250px] items-center justify-center border border-[#dfe3e5] bg-[#f6f7f7] p-6 sm:h-[250px]"><img className="h-full w-full object-contain" src={image} alt={name} /></div>
            <p className="m-0 border-b border-[#dfe3e5] pb-2 pt-4 text-[7px] font-semibold uppercase tracking-[1.5px] text-[#087dc5]">{tag}</p>
            <div className="relative flex items-center justify-between"><h3 className="m-0 pt-3 text-[10px] font-medium">{name}</h3><b className="mt-2 grid h-5 w-5 place-items-center rounded-full bg-[#ffd000] text-[11px]">→</b></div>
        </article>
    );
}

export default function () {
    return (
        <div className="bg-white pb-16 text-[#101114]">
            <div className="mx-auto max-w-[760px] px-6 pt-16 sm:px-0 sm:pt-[90px]">
                <div className="border-t border-[#dfe3e5] pt-4">
                    <p className="m-0 flex items-center gap-2 text-[7px] font-semibold uppercase tracking-[1.7px] text-[#596168]"><i className="block w-5 border-t border-[#ffd000]" />Featured collection</p>
                </div>
                <div className="mt-7 grid gap-8 border-b border-[#dfe3e5] pb-7 sm:grid-cols-[1.25fr_1fr] sm:items-end sm:gap-16">
                    <h2 className="m-0 font-sans text-[36px] font-semibold uppercase leading-[.92] tracking-[-1px] sm:text-[39px]">Introducing the<br />Performance Series</h2>
                    <div><p className="m-0 max-w-[260px] text-[9px] leading-[1.55] text-[#697177]">A refined selectorized platform built on ROC-IT® ride motion — engineered for the way the body moves, finished for the spaces it lives in.</p><a className="mt-4 inline-flex items-center gap-4 rounded-full bg-[#087dc5] px-4 py-2 text-[7px] font-semibold uppercase tracking-[.8px] text-white no-underline" href="#products">Shop the series <b className="grid h-4 w-4 place-items-center rounded-full bg-[#ffd000] text-[#111]">→</b></a></div>
                </div>
                <div className="flex items-center gap-2 py-5"><button className="rounded-full border border-[#dfe3e5] bg-white px-4 py-2 text-[7px] font-semibold uppercase tracking-[.8px]">New arrivals <b className="ml-3 inline-grid h-4 w-4 place-items-center rounded-full bg-[#ffd000]">→</b></button><button className="rounded-full border border-[#dfe3e5] bg-white px-4 py-2 text-[7px] font-semibold uppercase tracking-[.8px]">Best sellers <b className="ml-3 inline-grid h-4 w-4 place-items-center rounded-full bg-[#ffd000]">→</b></button><span className="ml-auto text-[7px] uppercase tracking-[1.5px] text-[#6c7479]">Scroll →</span></div>
            </div>
            <div className="flex w-max gap-4 pl-6 sm:pl-[calc((100%-760px)/2)]">
                <ProductCard image={rackImage} tag="Motion Cage" name="Half Rack System" />
                <ProductCard image={cageImage} tag="Motion Cage" name="MC-7000 Training Cage" />
                <ProductCard image={smithImage} tag="Mi Series" name="Mi7 Smith / Functional" />
                <ProductCard image={trainerImage} tag="Fitness Series" name="Dual Functional Trainer" />
            </div>
        </div>
    )
}
