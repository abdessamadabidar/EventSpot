import logo from '../assets/images/logoEventSpotBlack.png'
import logoDark from '../assets/images/logoEventSpotWhite.png'
export default function NavBar() {
    return (
        <header className='md:sticky md:top-0 md:left-0 border-b-[.5px] border-gray-100 z-30'>
            <div className='bg-white dark:bg-darkBG font-outfit transition-bg-all ease-out duration-700'>
                <div className="md:px-12 px-4 z-50 w-full">
                    <div className="flex justify-between h-14">
                        <a className='flex dark:hidden items-center' href="">
                            <img className="w-48" src={logo} alt=""/>
                        </a>
                        <a className='hidden dark:flex items-center' href="">
                            <img className="w-48" src={logoDark} alt=""/>
                        </a>
                        <section className='flex justify-center gap-x-10'>
                            <nav className='flex justify-center items-center gap-x-7 px-3 text-sm capitalize font-medium'>
                                <a className="text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white">clubs</a>
                                <a className="text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white">events</a>
                                <a className="text-gray-500 hover:text-color-secondary dark:text-gray-300 dark:hover:text-white">Archive</a>
                            </nav>
                            <div className="justify-center flex flex-row items-center transition-all ease-in-out duration">
                                <div className="flex flex-row justify-between">
                                    <label htmlFor="dark-mode" className="flex items-center cursor-pointer">
                                        <div className="relative">
                                            <input type="checkbox" name="dark-mode" id='dark-mode' className="checkbox hidden" /*ref={themeToggle}*/ /*onChange={handleThemeToggle}*//>
                                            <div className='dark:scale-110 flex justify-center items-center p-4 w-5 h-5 text-gray-800 dark:text-white rounded-md transition'>
                                                <span className='dark:hidden fill-inherit stroke-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                                    </svg>
                                                </span>
                                                <span className='hidden dark:block fill-inherit stroke-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='md:hidden flex justify-center px-3 text-slate-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-gray-100'>
                                <button>
                                        <span className='fill-inherit'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                                            </svg>
                                        </span>
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </header>
    )
}