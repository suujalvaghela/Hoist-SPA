import React from 'react'
import hoistLogo from "../assets/logo.png";


export default function Footer() {
    return (
        <footer className=" px-6 pb-8 pt-14 text-[#343a3e] sm:px-0 sm:pb-10 sm:pt-16" id="support">
            <div className="mx-auto max-w-[800px]">
                <div className="grid gap-10 sm:grid-cols-[1.7fr_1fr_1fr_1fr] sm:gap-12">
                    <div>
                        <img className="h-auto w-[92px] brightness-0" src={hoistLogo} alt="Hoist Fitness Systems" />
                        <p className="mt-5 text-[8px] leading-[1.55] text-[#747c81]">11900 Community Road, Poway, California 92064<br />Designed and engineered in San Diego since 1977.</p>
                        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#d4dadd] px-3 py-1 text-[7px] font-semibold uppercase tracking-[1px]"><b className="text-[#ffd000]">•</b><strong>50</strong><span>Years strong · 1977—2027</span></div>
                    </div>
                    <FooterColumn title="Products" links={["Commercial", "Home & Light Commercial", "Performance Series", "GSA & Government", "Racks & Freeweights"]} />
                    <FooterColumn title="Resources" links={["Space Designer", "Dealer Resources", "Product Downloads", "Blog", "FAQs"]} />
                    <FooterColumn title="Support" links={["Contact Us", "Shipping & Returns", "Warranty", "Store Locator", "Careers"]} />
                </div>
                <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#dfe3e5] pt-6 text-[7px] text-[#7c858a] sm:flex-row sm:items-center">
                    <span>© 2026 HOIST Fitness Systems, Inc. All rights reserved.</span>
                    <div className="flex gap-5">
                        <a href="#privacy" className="no-underline">Privacy</a>
                        <a href="#terms" className="no-underline">Terms</a>
                        <a href="#dealer" className="font-semibold uppercase tracking-[.7px] text-[#087dc5] no-underline">♙ Dealer login</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterColumn({ title, links }) {
    return <div><h3 className="m-0 text-[7px] font-semibold uppercase tracking-[1.7px]">{title}</h3><div className="mt-5 space-y-3">{links.map((link) => <a className="block text-[8px] text-[#4d555a] no-underline" href="#products" key={link}>{link}</a>)}</div></div>;
}