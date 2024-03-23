import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function EventCard() : JSX.Element {

	return (
		<Card className="rounded-3xl shadow">
			<CardHeader className="p-3">
				<img
					src={"https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
					alt={""}
					className="rounded-2xl"
				/>
			</CardHeader>
			<CardContent className="px-5 py-0">
				<div className="flex flex-wrap items-center justify-between mb-4 gap-3 overflow-hidden">
					<p className="text-lg font-semibold">Hackathon</p>
					<div className="flex flex-nowrap justify-start items-center gap-x-3 ">
						<div className="flex flex-nowrap items-center gap-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
								<path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
							</svg>
							<span className="text-xs">22/03/2024</span>
						</div>
						<div className="flex flex-nowrap items-center gap-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" width={12} height={21} viewBox="0 0 320 512" className="size-3">
								<path fill="#000" d="M16 144a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64m-32 400V317.1a177.984 177.984 0 0 0 64 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32"></path>
							</svg>
							<span className="text-xs">ENSAH</span>
						</div>
					</div>
				</div>
				<div className="flex -space-x-1 overflow-hidden">
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
						alt=""
					/>
					<img
						className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
			</CardContent>
			<CardFooter className="px-5 py-3">
				<Button variant="link" className="flex flex-nowrap items-center p-0 gap-x-1 text-gray-500 hover:text-color-secondary hover:no-underline hover:gap-x-1.5 transition-all duration-200">
					<span className="text-sm ">view details</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
						<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
					</svg>
				</Button>

			</CardFooter>
		</Card>
	);
}