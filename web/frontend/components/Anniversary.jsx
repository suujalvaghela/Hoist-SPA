import hoistLogo from "../assets/hoist-logo.png";

export default function Anniversary() {
    return (
        <div className="bg-[#f6f7f7] px-6 pb-20 pt-10 text-center text-[#101114] sm:pb-[100px] sm:pt-16">
            <div className="mx-auto max-w-[760px]">
                <div className="mx-auto flex h-[100px] w-[190px] items-center justify-center"><img className="h-auto w-[150px]" src={hoistLogo} alt="Hoist 50 years strong" /></div>
                <h2 className="mx-auto mt-8 max-w-[390px] font-sans text-[30px] font-semibold normal-case leading-[.95] tracking-[-1px] sm:text-[34px]">Fifty years strong, and<br />still building the next one.</h2>
                <p className="mx-auto mt-4 max-w-[350px] text-[9px] leading-[1.5] text-[#7a8287]">Follow the anniversary program through 2027 — new product, archive stories and a look at what comes next.</p>
                <a className="mt-7 inline-block border-b-2 border-[#ffd000] pb-1 text-[8px] font-semibold uppercase text-[#101114] no-underline" href="#top">Explore 50 Years Strong <span className="ml-2">→</span></a>
            </div>
        </div>
    )
}
