import { useState, useEffect, FC } from 'react';
import { IDashboardOptions } from '../../../types/users';
import styles from './options.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { SwipeableDrawer } from '@mui/material';
import CustomDrawer from '../../componentLibrary/CustomDrawer';
import BusinessForm from '../../business/BusinessForm';

interface IProps {
	options: IDashboardOptions[];
	header: string;
}

const AccountOptions: FC<IProps> = ({ options, header }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.options}>
			<h3>{header}</h3>
			{options.map((option, idx) => (
				<div
					key={`${idx}-${option.text}`}
					className={`${styles.options__option} ${option.hideOption && styles.hide}`}
					onClick={option.alternateAction ? option.alternateAction : () => navigate(`${option.link}`)}
				>
					<div className={styles.options__title}>
						{option.icon}
						<h5>{option.text}</h5>
					</div>
					<ArrowForwardIcon className={styles.option__icon} />
				</div>
			))}
		</div>
	);
};

export default AccountOptions;
