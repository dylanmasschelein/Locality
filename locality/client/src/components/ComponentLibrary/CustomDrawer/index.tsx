import { SwipeableDrawer } from '@mui/material';
import { useState, useEffect, FC } from 'react';
import styles from './drawer.module.scss';

interface IProps {
	open: boolean;
	toggleDrawer: any;
	children: any;
}

const CustomDrawer: FC<IProps> = ({ open, toggleDrawer, children }) => (
	<SwipeableDrawer anchor="bottom" open={open} onClose={toggleDrawer} onOpen={toggleDrawer}>
		{children}
	</SwipeableDrawer>
);

export default CustomDrawer;
