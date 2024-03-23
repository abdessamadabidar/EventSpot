import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { LazyLoadImage } from './ui/EmblaCarouselLazyLoadImage'
import { DotButton, useDotButton } from './ui/EmblaCarouselDotButton'
import "../stylesheets/embla.css"

type PropType = {
	slides: number[]
	options?: EmblaOptionsType
}

const ArchiveCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props
	const [emblaRed, emblaApi] = useEmblaCarousel(options, [Autoplay()])
	const [slidesInView, setSlidesInView] = useState<number[]>([])


	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
		setSlidesInView((slidesInView) => {
			if (slidesInView.length === emblaApi.slideNodes().length) {
				emblaApi.off('slidesInView', updateSlidesInView)
			}
			const inView = emblaApi
				.slidesInView()
				.filter((index) => !slidesInView.includes(index))
			return slidesInView.concat(inView)
		})
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		updateSlidesInView(emblaApi)
		emblaApi.on('slidesInView', updateSlidesInView)
		emblaApi.on('reInit', updateSlidesInView)
	}, [emblaApi, updateSlidesInView])

	return (
		<div className="embla">
			<div className="overflow-hidden rounded-3xl" ref={emblaRed}>
				<div className="embla__container">
					{slides.map((index) => (
						<LazyLoadImage
							key={index}
							index={index}
							imgSrc={`https://picsum.photos/600/350?v=${index}`}
							inView={slidesInView.indexOf(index) > -1}
							eventTitle={"Event title"}
							clubName={"Club name"}
							eventDescription={"Le Lorem Ipsum est t la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte siècles"}
						/>
					))}

				</div>

			</div>

			<div className="flex justify-center items-center mt-7">
				<div className="flex flex-nowrap justify-center items-center gap-x-2.5">
					{scrollSnaps.map((_: number, index: number) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'cursor-pointer rounded-full w-2 h-2 bg-gray-300 '.concat(
								index === selectedIndex ? 'bg-[#343fff] w-5 transition-all duration-300' : ''
							)}
						/>

					))}
				</div>
			</div>
		</div>
	)
}

export default ArchiveCarousel
