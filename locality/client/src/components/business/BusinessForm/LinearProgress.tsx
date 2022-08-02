import { Box, LinearProgress, withStyles } from '@mui/material';
import { useState, useEffect, FC } from 'react';
import styles from './business.module.scss';

interface IProps {
	step: number;
	totalSteps: number;
}

const ProgressBar: FC<IProps> = ({ step, totalSteps }) => {
	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgress
				variant="determinate"
				value={(step / totalSteps) * 100}
				className={styles.progress_bar}
				sx={{ color: 'red' }}
			/>
		</Box>
	);
};

export default ProgressBar;
