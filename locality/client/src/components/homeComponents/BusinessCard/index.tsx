import { FC } from 'react';
import Image from '../../componentLibrary/Image';
import styles from './business-card.module.scss';

interface IProps {
	business: any;
}

const BusinessCard: FC<IProps> = ({ business }) => (
	<div className={styles.business__card}>
		<Image
			srcLink={business.business_image || 'https://via.placeholder.com/300x200/150'}
			alt="placeholder img"
			styles={styles.business__photo}
		/>
		<div className={styles.business__info}>
			<h3>{business.business_name}</h3>
			<p>{business.description}</p>
		</div>
	</div>
);

export default BusinessCard;
