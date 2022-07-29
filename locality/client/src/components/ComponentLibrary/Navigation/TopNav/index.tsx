import { useState, useEffect, FC } from 'react';
import Image from '../../Image';
import styles from './topnav.module.scss';

interface IProps {
	title: string;
	// prop1: number;
	// prop2: string;
}

const TopNav: FC<IProps> = ({ title }) => (
	<div className={styles.header}>
		<Image
			styles={styles.header__logo}
			srcLink="https://project-locality.s3.amazonaws.com/static/brand/locality_logo.svg"
		/>
		<h1 className={styles.header__title}>{title}</h1>
	</div>
);

export default TopNav;
