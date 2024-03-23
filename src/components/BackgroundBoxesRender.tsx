"use client";
import { Boxes } from "./ui/background-boxes";
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils";

export function BackgroundBoxesRender() {
	return (
		<div
			className="h-96 relative w-full overflow-hidden dark:bg-DarkGetStartedBG bg-indigo-400 flex flex-col items-center justify-center rounded-3xl">
			<div
				className='absolute right-[90%] bottom-[60%] transform translate-x-1/4 translate-y-1/4 bg-gradient-to-r from-[rgba(255,102,7,1)] to-[rgba(255,7,133,1)] w-64 aspect-square z-30 rounded-full blur-4xl opacity-20'></div>
			<div
				className='absolute left-[60%] transform translate-x-full translate-y-full bg-gradient-to-r from-[rgba(89,52,255,1)] to-[rgba(255,7,133,1)] w-64 aspect-square z-30 rounded-full blur-4xl opacity-20'></div>
			<div
				className="absolute inset-0 w-full h-full dark:bg-DarkGetStartedBG bg-indigo-300 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>

			<Boxes/>
			<h1 className={cn("normal-case text-center md:text-4xl lg:text-6xl text-3xl px-4 md:px-8 text-white relative z-20 font-semibold")}>
				Where every event <div className="mt-0 md:mt-2"/> tells a story
			</h1>
			<p className="text-center max-w-[800px] md:text-sm lg:text-lg text-sm mt-3 md:mt-5 px-4 md:px-8 text-gray-200 dark:text-gray-300 relative z-20">
				Embark on a Journey through the Pulse of School Life: Engage in a Vibrant Array of Enriching Events, Creating Lasting Memories.
			</p>
			<Button variant="outline" className={"group flex gap-x-1.5 mt-4 md:mt-6 text-white hover:text-white bg-color-primary hover:bg-color-primary-hover border-0 rounded-lg z-20"}>
				<span>Explore Events</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition">
					<path fillRule="evenodd"
						  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
						  clipRule="evenodd"/>
				</svg>
			</Button>
		</div>
	);
}
