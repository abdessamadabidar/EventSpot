import logo from '../assets/images/logoEventSpotBlack.png'
import logoDark from '../assets/images/logoEventSpotWhite.png'
import React from "react";

interface themeProps {
    onThemeChange: (toggleValue: boolean) => void,
}
export default function NavBar({onThemeChange}: themeProps) {

    const [isNavActive, setIsNavActive] = React.useState(false);
    const themeToggle = React.useRef < HTMLInputElement > (null);
    const sideBarMobile = React.useRef<HTMLDivElement>(null);
    const handleThemeToggle = () => {
        // @ts-ignore
        const isDarkOn = themeToggle.current.checked;
        onThemeChange(isDarkOn);
    }

    const collapseSideBar = () => {
        if(!isNavActive) {
            // @ts-ignore
            sideBarMobile.current.classList.remove("-translate-x-full")
            setIsNavActive(true)
        }
        else {
            // @ts-ignore
            sideBarMobile.current.classList.add("-translate-x-full")
            setIsNavActive(false)
        }

    }

    return (
        <header className='md:sticky md:top-0 md:left-0 border-b-[.5px] border-gray-100 dark:border-slate-900 z-40'>
            <div className='bg-white dark:bg-color-blue-darker font-outfit'>
                <div className="md:px-12 px-4 z-50 w-full">
                    <div className="flex justify-between h-14">
                        <a className='flex dark:hidden items-center' href="">
                            <img className="w-48" src={logo} alt=""/>
                        </a>
                        <a className='hidden dark:flex items-center' href="">
                            <img className="w-48" src={logoDark} alt=""/>
                        </a>
                        <section className='flex justify-center sm:gap-x-4 md:gap-x-10 '>
                            <nav
                                className='hidden md:flex lg:flex justify-center items-center gap-x-7 px-3 text-sm capitalize font-medium'>
                                <a className="text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white">clubs</a>
                                <a className="text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white">events</a>
                                <a className="text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white">Archive</a>
                            </nav>
                            <div
                                className="justify-center flex flex-row items-center transition-all ease-in-out duration">
                                <div className="flex flex-row justify-between">
                                    <label htmlFor="dark-mode" className="flex items-center cursor-pointer">
                                        <div className="relative">
                                            <input type="checkbox" name="dark-mode" id='dark-mode'
                                                   className="checkbox hidden" ref={themeToggle}
                                                   onChange={handleThemeToggle}/>
                                            <div
                                                className='flex justify-center items-center p-4 w-5 h-5 text-gray-800 dark:text-white rounded-md transition'>
                                                <span className='dark:hidden fill-inherit stroke-1 animate-scaleInOut'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                                    </svg>
                                                </span>
                                                <span
                                                    className='hidden dark:block fill-inherit stroke-1 animate-scaleInOut'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div onClick={collapseSideBar} className='md:hidden flex justify-center px-3 text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-gray-100'>
                                <button>
                                        <span className={`fill-inherit ${isNavActive ? 'hidden' : 'block'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                                            </svg>
                                        </span>
                                        <span className={`fill-inherit animate-halfSpin ${isNavActive ? 'block' : 'hidden'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                            </svg>
                                        </span>
                                </button>
                            </div>
                        </section>
                        <nav ref={sideBarMobile}
                             className='fixed -translate-x-full right-0 top-14 z-40 h-screen w-full bg-white dark:bg-color-blue-darker flex flex-col gap-y-3 md:hidden lg:hidden justify-start items-left px-10 py-8 text-sm capitalize font-medium transition ease-in duration-500'>
                            <a className="flex items-center gap-x-4 px-4 py-3 rounded-lg text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-color-blue-darker-hover">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                                </svg>

                                <span>Clubs</span>
                            </a>
                            <a className="flex items-center gap-x-4 px-4 py-3 rounded-lg text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-color-blue-darker-hover">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                                </svg>
                                <span>Archive</span>
                            </a>
                            <a className="flex items-center gap-x-4 px-4 py-3 rounded-lg text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-color-blue-darker-hover">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                                </svg>
                                <span>Events</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}