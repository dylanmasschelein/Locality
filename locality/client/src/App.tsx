import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './views/HomePage';
import AuthPage from './views/AuthPage';
import SpDashboard from './views/Dashboard';
import BottomNav from './components/componentLibrary/Navigation/BottomNav';
import CustomSearchField from './components/componentLibrary/FormComponents/CustomSearchField';

const App = () => (
	<Router>
		<AuthProvider>
			<Routes>
				<Route element={<AuthPage />} path="/auth" />
				<Route element={<SpDashboard />} path="/dashboard/:id" />
				<Route element={<Home />} path="/" />
			</Routes>
			<BottomNav />
		</AuthProvider>
		{/* <Footer /> */}
	</Router>
);

export default App;
