import engineeringImage from "../assets/4th1st.png";
import detailImage from "../assets/4th2nd.jpg";

export default function Engineering() {
    return (
        <div className="bg-[#f6f7f7] px-6 pb-14 pt-16 text-[#101114] sm:px-0 sm:pt-[70px]">
            <div className="mx-auto max-w-[760px]">
                <div className="text-center">
                    <p className="mb-4 flex items-center justify-center gap-2 text-[7px] font-semibold uppercase tracking-[1.7px] text-[#596168]">
                        <i className="block w-5 border-t border-[#ffd000]" />Engineering<i className="block w-5 border-t border-[#ffd000]" />
                    </p>
                    <h2 className="m-0 font-sans text-[34px] font-semibold uppercase leading-[.92] sm:text-[38px]">Precision built for<br />high performance.</h2>
                    <p className="mx-auto mt-3 max-w-[255px] text-[8px] leading-[1.5] text-[#727a80]">Every pivot, path and contact point is researched around the body — not the machine.</p>
                </div>

                <div className="mt-7 grid gap-2 border border-[#dfe3e5] bg-white p-3 sm:grid-cols-[.9fr_1.55fr] sm:p-3">
                    <ul className="m-0 list-none p-0">
                        {[
                            ["ROC-IT® ride motion", "Continuous movement that follows the body’s natural path."],
                            ["Ergonomic start points", "Easy entry and exit, every time."],
                            ["Lifetime structural warranty", "Built to withstand serious use."],
                            ["12 frame-to-20 upholstery finishes", "Personalize your equipment to fit your facility’s aesthetic."],
                            ["Optimized footprints", "More training, less wasted space."],
                            ["Made in San Diego", "Designed, engineered and finished in California since 1977."],
                        ].map(([title, copy]) =>
                            <li className="flex gap-2 border-b border-[#edf0f0] py-2 last:border-b-0" key={title}>
                                <b className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#dfe3e5] text-[8px] font-normal text-[#087dc5]">✧</b>
                                <span>
                                    <strong className="block text-[7px] font-medium">{title}</strong>
                                    <small className="mt-1 block text-[6px] leading-[1.3] text-[#838b90]">{copy}</small>
                                </span>
                            </li>
                        )}
                    </ul>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:grid-rows-[1fr_76px]">
                        <div className="relative col-span-2 h-[165px] overflow-hidden bg-[#f3f4f4] sm:h-auto sm:row-span-1">
                            <img className="h-full w-full object-contain" src={engineeringImage} alt="Hoist training system" />
                            <span className="absolute right-2 top-2 rounded-full bg-[#087dc5] px-3 py-1 text-[6px] text-white">Mi7 — Pro for more than 100 gyms</span>
                        </div>
                        <div className="h-[86px] overflow-hidden">
                            <img className="h-full w-full object-cover" src={detailImage} alt="Hoist machine engineering detail" />
                        </div>
                        <div className="bg-[#fafafa] p-3">
                            <p className="m-0 text-[6px] font-semibold uppercase tracking-[1px] text-[#087dc5]">Performance</p>
                            <h3 className="m-0 mt-2 text-[11px] font-medium uppercase leading-none">Durable is the new beautiful.</h3>
                            <a className="mt-3 inline-block text-[7px] font-semibold uppercase text-[#087dc5] no-underline" href="#performance">View
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-2 border-y border-[#dfe3e5] py-4 sm:grid-cols-4">
                    {[['45+', 'Years of moving people'], ['20,000+', 'Facilities worldwide'], ['100+', 'Countries served'], ['Premium', 'Commercial-grade build']].map(([stat, label]) =>
                        <div className="border-r border-[#dfe3e5] px-4 last:border-r-0 first:pl-0" key={stat}>
                            <strong className="block text-[18px] font-normal text-[#087dc5]">{stat}</strong>
                            <span className="mt-1 block text-[6px] text-[#7c858a]">{label}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
