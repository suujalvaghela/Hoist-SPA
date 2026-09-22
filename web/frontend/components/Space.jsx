import commercialImage from "../assets/2ndInHalf.jpg";
import homeImage from "../assets/2ndIn2ndHalf.jpg";

function SpaceCard({ image, label, title, description, href }) {
    return (
        <article className="border border-[#dfe3e5] first:border-[#3d9fe1]">
            <div className="relative h-[205px] overflow-hidden sm:h-[255px]">
                <img className="h-full w-full object-cover" src={image} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#087dc5] px-3 py-1 text-[6px] font-semibold uppercase tracking-[1px] text-white">{label}</span>
                <h3 className="absolute bottom-4 left-4 m-0 text-[18px] font-normal tracking-[-.5px] text-white sm:text-[19px]">{title}</h3>
            </div>
            <div className="min-h-[125px] px-6 py-5 sm:min-h-[108px] sm:px-6 sm:py-6">
                <p className="m-0 max-w-[270px] text-[8px] leading-[1.55] text-[#747b80]">{description}</p>
                <a className="mt-6 inline-block text-[7px] font-semibold uppercase tracking-[.8px] text-[#087dc5] no-underline" href={href}>Enter the {label.toLowerCase()} experience <span className="ml-2">→</span></a>
            </div>
        </article>
    );
}

export default function Space() {
    return (
        <div className="bg-white px-6 py-16 text-[#101114] sm:px-12 sm:pb-[70px] sm:pt-[84px]" >
            <div className="mx-auto max-w-[760px]">
                <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-12">
                    <h2 className="m-0 max-w-[360px] font-sans text-[36px] font-semibold uppercase leading-[.92] tracking-[-1px] sm:text-[38px]">Built for every<br />kind of space.</h2>
                    <p className="m-0 max-w-[235px] text-[9px] leading-[1.55] text-[#6e757a]">Two environments, one engineering standard — from a 12,000 sq ft strength floor to a single room at home.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-[15px]">
                    <SpaceCard image={commercialImage} label="Commercial" title="Built for performance at scale." description="Racks, selectorized machines, plate-loaded and freeweights specified for health clubs, universities, pro sport and hospitality." href="#commercial" />
                    <SpaceCard image={homeImage} label="Home & Light Commercial" title="Strength, built around your space." description="Mi Series, H Series and functional trainers scaled for residences, multifamily amenities and corporate suites — same engineering." href="#home" />
                </div>
            </div>
        </div>
    )
}
