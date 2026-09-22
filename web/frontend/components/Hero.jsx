import Header from "./Header";
import heroImage from "../assets/1st.jpg";

const destinations = [
    ["Commercial", "Clubs · Universities · Pro sport", "#commercial"],
    ["Home & Light Commercial", "Residences · Multifamily", "#home"],
    ["Government / GSA", "Military · Federal · Public safety", "#government"],
];

export default function () {
    return (
        <div className="relative min-h-[670px] h-screen max-h-[650px] overflow-hidden">
            <img className="absolute inset-0 h-full w-full object-cover object-center" src={heroImage} alt="Athlete training on Hoist equipment" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,24,37,.88)_0%,rgba(1,29,44,.63)_40%,rgba(2,27,40,.25)_74%,rgba(2,27,40,.5)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,35,55,.88)_0%,transparent_38%)]" />

            <Header />

            <div className="relative z-[1] mx-auto flex h-[calc(100%-168px)] w-[calc(100%-48px)] max-w-[800px] items-center sm:h-[calc(100%-168px)]">
                <div className="relative w-full pb-3 sm:w-[570px]">
                    <p className="mb-4 text-[8px] font-semibold tracking-[2px] text-[#ffd000]">THE 2027 COLLECTION</p>
                    <h1 className="m-0 font-sans text-[52px] font-semibold uppercase leading-[.86] tracking-[-.5px] sm:text-[57px]">Strength,<br /><span className="text-[#b3c0c5]">engineered</span><br />precisely.</h1>
                    <p className="mt-7 w-[195px] text-[8px] leading-[1.55] text-[#d4dfe2] sm:absolute sm:left-[415px] sm:top-[112px] sm:mt-0 sm:w-[245px]">Since 1977, HOIST has engineered strength equipment in San Diego around human movement — specifically for clubs, universities and homes in more than 100 countries.</p>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 z-[2] w-[calc(100%-44px)] max-w-[760px] -translate-x-1/2 sm:bottom-[39px] sm:w-[calc(100%-48px)]">
                <p className="mb-2.5 flex items-center gap-2 text-[7px] font-semibold uppercase tracking-[1.8px] text-[#bdcbd0]"><i className="block w-5 border-t border-[#ffd000]" />Where are you training?</p>
                <div className="grid grid-cols-1 bg-[rgba(76,137,169,.29)] sm:grid-cols-3">
                    {destinations.map(([title, description, href]) => (
                        <a className="relative flex min-h-[52px] items-center justify-between border-b border-white/5 px-[18px] py-3 no-underline last:border-b-0 sm:min-h-[58px] sm:border-b-0 sm:border-r" href={href} key={title}>
                            <span><strong className="block text-[10px] font-medium uppercase">{title}</strong><small className="mt-1 block text-[7px] text-[#bed0d6]">{description}</small></span>
                            <b className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[#ffd000] text-sm text-[#12222b]">→</b>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
