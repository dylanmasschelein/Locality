import { FC, cloneElement, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useScrollTrigger } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExploreIcon from '@mui/icons-material/Explore';
import styles from './bottom-nav.module.scss';
import { Link } from 'react-router-dom';
import AuthContext from '../../../../context/AuthContext';

interface IProps {
	children: React.ReactElement;
}

const BottomNav = () => {
	const [value, setValue] = useState(0);
	const { user } = useContext(AuthContext);

	return (
		<BottomNavigation
			showLabels
			sx={{
				bottom: '0px',
				position: 'fixed',
				width: '100%',
				boxShadow: '1px 1px 10px 10px rbga(0,0,0,1)'
			}}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction
				className={styles.text}
				component={Link}
				to="/"
				label="Explore"
				icon={<ExploreIcon className={styles.icon} />}
			/>

			<BottomNavigationAction
				className={styles.text}
				component={Link}
				to={user ? '/dashboard' : '/auth'}
				label="Profile"
				icon={<AccountCircleIcon className={styles.icon} />}
			/>

			<BottomNavigationAction
				className={styles.text}
				component={Link}
				to="/"
				label="Favorites"
				icon={<FavoriteBorderIcon className={styles.icon} />}
			/>
			<BottomNavigationAction
				className={styles.text}
				component={Link}
				to="/"
				label="Inbox"
				icon={<ChatBubbleOutlineIcon className={styles.icon} />}
			/>
		</BottomNavigation>
	);
};

export default BottomNav;
