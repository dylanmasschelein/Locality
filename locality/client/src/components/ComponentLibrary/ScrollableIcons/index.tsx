import { FC } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiquorIcon from '@mui/icons-material/Liquor';
import WomanIcon from '@mui/icons-material/Woman';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PetsIcon from '@mui/icons-material/Pets';

interface IProps {
	value: string;
	handleChange: any;
}

const ScrollableIcons: FC<IProps> = ({ value, handleChange }) => {
	return (
		<Box sx={{ bgcolor: 'rgba(0,0,0,0.04)', boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.1)' }}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
			>
				<Tab label="Explore" icon={<FitnessCenterIcon />} value="explore" />
				<Tab label="Fitness" icon={<FitnessCenterIcon />} value="fitness" />
				<Tab label="Food" icon={<DinnerDiningIcon />} value="food" />
				{/* <Tab label="Entesrtainment" icon={<AutoFixHighIcon />} /> */}
				<Tab label="Music" icon={<MusicNoteIcon />} value="music" />
				<Tab label="Health" icon={<HealthAndSafetyIcon />} value="health" />
				<Tab label="Beauty" icon={<WomanIcon />} value="beauty" />
				<Tab label="Party" icon={<LiquorIcon />} value="party" />
				<Tab label="Pet" icon={<PetsIcon />} value="pet" />
			</Tabs>
		</Box>
	);
};

export default ScrollableIcons;
