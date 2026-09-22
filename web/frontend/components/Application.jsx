import appPhoneImage from "../assets/7th1st.png";
import appHeroImage from "../assets/7th2nd.jpg";

export default function Application() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#293b97] via-[#116bb5] to-[#007fae] px-6 py-16 text-white sm:px-0 sm:py-[74px]">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_65%)]" />
            <div className="relative mx-auto grid max-w-[800px] items-center gap-10 sm:grid-cols-[1fr_1fr] sm:gap-12">
                <div>
                    <p className="mb-4 flex items-center gap-2 text-[7px] font-semibold uppercase tracking-[1.7px] text-white"><span className="rounded-full bg-[#ffd000] px-2 py-1 text-[6px] text-[#111]">New</span>The Hoist app</p>
                    <h2 className="m-0 font-sans text-[45px] font-semibold uppercase leading-[.86] tracking-[-1px] sm:text-[49px]">Train<br />smarter.<br />anywhere.</h2>
                    <p className="mt-5 max-w-[280px] text-[9px] leading-[1.5] text-[#d4e6ef]">The same research that shapes our machines, carried in your hand.</p>
                    <div className="mt-5 max-w-[360px] border-y border-white/20">
                        {[['01', 'Your settings', 'Machine settings that follow you.'], ['02', 'Guided programming', 'Structured strength built around your goals.'], ['03', 'Progress', 'Every set, tracked over time.']].map(([number, title, copy]) => <div className="flex gap-4 border-b border-white/15 py-3 last:border-b-0" key={number}><b className="pt-1 text-[7px] font-normal text-[#ffd000]">{number}</b><span><strong className="block text-[10px] font-normal">{title}</strong><small className="mt-1 block text-[7px] text-[#c9dce8]">{copy}</small></span></div>)}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-2"><a className="rounded-full bg-white px-4 py-2 text-[7px] font-semibold uppercase tracking-[.8px] text-[#087dc5] no-underline" href="#app">◉ &nbsp; App store</a><a className="rounded-full border border-white/50 px-4 py-2 text-[7px] font-semibold uppercase tracking-[.8px] text-white no-underline" href="#app">▷ &nbsp; Google play</a><a className="text-[7px] font-semibold uppercase tracking-[.8px] text-white no-underline" href="#app">Discover the app &nbsp;→</a></div>
                </div>
                <div className="relative mx-auto w-full max-w-[350px] sm:mt-0"><div className="h-[360px] overflow-hidden border border-white/20 bg-[#15599c] sm:h-[445px]"><img className="h-full w-full object-cover" src={appHeroImage} alt="Athlete using Hoist equipment" /></div><img className="absolute -bottom-7 left-[-12px] z-10 h-[170px] w-auto object-contain drop-shadow-2xl sm:-left-7 sm:h-[185px]" src={appPhoneImage} alt="Hoist app workout screen" /></div>
            </div>
        </div>
    )
}
