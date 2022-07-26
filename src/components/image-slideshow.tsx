import Image from 'next/image';
import Carousel from 'nuka-carousel';

const ImageSlideshow = ({ slideshowImageList }) => {
	return (
		<Carousel wrapAround={true} autoplay={true}>
			{slideshowImageList.map((item, index) => (
				<Image
					className="h-8"
					src={'/static/' + item}
					alt="Picture of the author"
					layout={'responsive'}
					width={1500}
					height={800}
					key={index}
				/>
			))}
		</Carousel>
	);
};

export default ImageSlideshow;
