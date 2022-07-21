import { Suspense, FC } from 'react';
import { useImage } from 'react-image';

interface IProps {
	srcLink: string;
	alt?: string;
	styles?: string;
}

const MyImageComponent: FC<IProps> = ({ srcLink, alt, styles }) => {
	const { src } = useImage({
		srcList: srcLink
	});

	return <img src={src} alt={alt || 'im a car'} className={styles} />;
};

const Image: FC<IProps> = ({ srcLink, alt, styles }) => {
	return (
		<Suspense>
			<MyImageComponent srcLink={srcLink} alt={alt} styles={styles} />
		</Suspense>
	);
};

export default Image;
