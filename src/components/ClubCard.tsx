import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

export default function ClubCard(): JSX.Element {
	return (
		<Card className="relative shadow-card rounded-3xl border-0 w-48  bg-[#f6f5ff] dark:bg-[#141430] overflow-hidden transition-all duration-500 hover:scale-105">
			<div className='absolute left-[50%] bottom-[80%] transform translate-x-1/4 translate-y-1/4 bg-gradient-to-r from-[rgba(255,7,158,1)] to-[rgba(255,7,133,1)] w-40 aspect-square z-30 rounded-full blur-4xl opacity-10'></div>
			<div className='absolute left-0 transform -translate-x-[40%] translate-y-[40%] bg-gradient-to-r from-[rgba(89,52,255,1)] to-[rgba(255,7,133,1)] w-40 aspect-square z-30 rounded-full blur-4xl opacity-10 dark:opacity-20'></div>
			<CardHeader className="p-0">
				<img src={"src/assets/images/club_logo_example.png"} className="w-full h-full object-contain" alt={""}/>
			</CardHeader>
			<CardContent className="px-3">
				<h2 className="font-bold block text-center text-xl pt-0 text-[#413b6b] dark:text-white">Company business</h2>
			</CardContent>
		</Card>

	);
}