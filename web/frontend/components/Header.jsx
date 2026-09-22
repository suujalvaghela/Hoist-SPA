import { useState } from 'react'
import headerLogo from "../assets/logo1st.png";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative z-10 mx-auto flex h-[63px] max-w-[800px] items-center gap-20 justify-center px-6 py-3 sm:px-0">
            <a className="w-[85px] text-center leading-[.75] text-white no-underline" href="#top" aria-label="Hoist home">
                <img className="mx-auto h-auto w-[85px]" src={headerLogo} alt="Hoist Fitness Systems" />
            </a>

            <button className="relative z-20 flex flex-col gap-1.5 border-0 bg-transparent p-2 sm:hidden" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                <i className="block w-[22px] border-t border-white" /><i className="block w-[22px] border-t border-white" />
            </button>

            <nav className={`${menuOpen ? "flex" : "hidden"} absolute right-6 top-[54px] z-10 flex-col items-start gap-4 bg-[#062f48] p-5 text-[8px] sm:static sm:flex sm:flex-row sm:items-center sm:gap-[22px] sm:bg-transparent sm:p-0`}>
                <div className='flex gap-5'>
                    <a className="whitespace-nowrap no-underline" href="#commercial" onClick={() => setMenuOpen(false)}>Commercial</a>
                    <a className="whitespace-nowrap no-underline" href="#home" onClick={() => setMenuOpen(false)}>Home &amp; Light Commercial</a>
                    <a className="whitespace-nowrap no-underline" href="#performance" onClick={() => setMenuOpen(false)}>Performance Series</a>
                    <a className="whitespace-nowrap no-underline" href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a className="whitespace-nowrap no-underline" href="#support" onClick={() => setMenuOpen(false)}>Support</a>
                </div>
            </nav>
            <nav className={`${menuOpen ? "flex" : "hidden"} absolute right-6 top-[54px] z-10 flex-col items-start gap-4 bg-[#062f48] p-5 text-[8px] sm:static sm:flex sm:flex-row sm:items-center sm:gap-[22px] sm:bg-transparent sm:p-0`}>
                <a className="text-lg leading-none no-underline sm:ml-2" href="#search" aria-label="Search">⌕</a>
                <a className="whitespace-nowrap rounded-full border border-white/60 px-3 py-2 text-[7px] uppercase tracking-wide no-underline" href="#dealer">♙ &nbsp; Dealer login</a>
            </nav>
        </header>
    )
}
