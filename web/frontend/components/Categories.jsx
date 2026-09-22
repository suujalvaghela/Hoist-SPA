import dumbbellImage from "../assets/5th1st.png";
import racksImage from "../assets/5th2nd.png";
import plateImage from "../assets/5th3rd.png";
import selectorizedImage from "../assets/5th4th.jpg";
import functionalImage from "../assets/5th5th.jpg";

function CategoryCard({ image, label }) {
    return (
        <a className="group relative block aspect-[.72] min-w-0 overflow-hidden border-b border-r border-white sm:aspect-[.64] sm:border-b-0" href="#products">
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={image} alt={label} />
            <span className="absolute bottom-4 left-5 origin-bottom-left -rotate-90 whitespace-nowrap text-[7px] font-semibold uppercase tracking-[1.5px] text-white">{label}</span>
            <b className="absolute bottom-3 right-3 grid h-6 w-6 place-items-center rounded-full bg-[#ffd000] text-sm font-normal text-[#101114]">→</b>
        </a>
    );
}

export default function Categories() {
    return (
        <div className="overflow-hidden bg-white pb-20 pt-16 text-[#101114] sm:pt-[88px]">
            <div className="mx-auto max-w-[760px] px-6 text-center sm:px-0">
                <div className="border-t border-[#dfe3e5] pt-4">
                    <p className="m-0 flex items-center justify-center gap-2 text-[7px] font-semibold uppercase tracking-[1.7px] text-[#596168]">
                        <i className="block w-5 border-t border-[#ffd000]" />
                        The range
                    </p>
                </div>
                <h2 className="mt-7 font-sans text-[36px] font-semibold uppercase leading-none sm:text-[39px]">Shop by category</h2>
                <p className="mx-auto mt-4 max-w-[350px] text-[9px] leading-[1.55] text-[#727a80]">Every HOIST category is engineered to the same standard — from freeweights to full strength floors.</p>
            </div>
            <div className="mt-10 grid w-full grid-cols-2 sm:grid-cols-5">
                <CategoryCard image={dumbbellImage} label="Dumbbells · Weights" />
                <CategoryCard image={racksImage} label="Racks & Rigs" />
                <CategoryCard image={plateImage} label="Plate Loaded" />
                <CategoryCard image={selectorizedImage} label="Selectorized" />
                <CategoryCard image={functionalImage} label="Functional" />
            </div>
        </div>
    )
}
