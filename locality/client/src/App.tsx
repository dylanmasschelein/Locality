
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './views/HomePage';
import CustomerRegistrationPage from './views/CustomerRegistrationPage';
// import ServiceProviderRegistrationPage from './views/ServiceProviderRegistrationPage';
import LoginPage from './views/LoginPage';
import SpDashboard from './views/SpDashboard';
import BottomNav from './components/componentLibrary/Navigation/BottomNav';
import CustomSearchField from './components/componentLibrary/CustomSearchField';

const App = () => (
	<Router>
		<AuthProvider>
			<Routes>
				<Route element={<CustomerRegistrationPage />} path="/register" />
				<Route element={<LoginPage />} path="/login" />
				<Route element={<SpDashboard />} path="/dashboard" />
				<Route element={<Home />} path="/" />
			</Routes>
			<BottomNav />
		</AuthProvider>
		{/* <Footer /> */}
	</Router>
);

export default App;
