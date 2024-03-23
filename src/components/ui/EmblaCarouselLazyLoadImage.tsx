import React, { useState, useCallback } from 'react'
import '../../stylesheets/embla.css'
import {Button} from "@/components/ui/button.tsx";
const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
	imgSrc: string
	inView: boolean
	index: number
	eventTitle: string,
	clubName: string,
	eventDescription: string
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
	const { imgSrc, inView } = props
	const [hasLoaded, setHasLoaded] = useState(false)

	const setLoaded = useCallback(() => {
		if (inView) setHasLoaded(true)
	}, [inView, setHasLoaded])

	return (
		<div className="embla__slide">
			<div
				className={'embla__lazy-load'.concat(
					hasLoaded ? ' embla__lazy-load--has-loaded' : ''
				)}
			>
				{!hasLoaded && <span className="embla__lazy-load__spinner" />}
				<img
					className="embla__slide__img embla__lazy-load__img rounded-3xl"
					onLoad={setLoaded}
					src={inView ? imgSrc : PLACEHOLDER_SRC}
					alt="Your alt text"
					data-src={imgSrc}
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col px-6 py-4 lg:px-20 lg:py-10 items-center justify-center lg:items-start ">
					<span className="text-4xl lg:text-5xl font-bold tracking-wide text-white mb-4">{props.eventTitle}</span>
					<span className="text-3xl font-semibold  text-white mb-4">{props.clubName}</span>
					<span className="text-white mb-5 text-center lg:text-start">{props.eventDescription}</span>
					<div className="flex flex-nowrap justify-start items-center gap-x-5 mb-8">
						<div className="flex flex-nowrap items-center gap-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-white">
								<path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
							</svg>
							<span className="text-white text-sm">22/03/2024</span>
						</div>
						<div className="flex flex-nowrap items-center gap-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" width={12} height={21} viewBox="0 0 320 512" className="text-white">
								<path fill="#FFF" d="M16 144a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64m-32 400V317.1a177.984 177.984 0 0 0 64 0V480c0 17.7-14.3 32-32 32s-32-14.3-32-32"></path>
							</svg>
							<span className="text-white text-sm">ENSAH</span>
						</div>
					</div>
					<Button variant="outline" className={"group flex gap-x-1.5 mt-4 md:mt-6 py-6 px-9 text-md text-white hover:text-white bg-color-primary hover:bg-color-primary-hover border-0 rounded-full z-20"}>
						<span>Explore</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition">
							<path fillRule="evenodd"
							      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
							      clipRule="evenodd"/>
						</svg>
					</Button>
				</div>
			</div>
		</div>
	)
}
