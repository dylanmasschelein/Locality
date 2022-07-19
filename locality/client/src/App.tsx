import Footer from './components/layoutComponents/Footer';
import Navbar from './components/layoutComponents/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './views/HomePage';
import CustomerRegistrationPage from './views/CustomerRegistrationPage';
import ServiceProviderRegistrationPage from './views/ServiceProviderRegistrationPage';
import LoginPage from './views/LoginPage';

const App = () => (
	<Router>
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route element={<CustomerRegistrationPage />} path="/customer-register" />
				<Route element={<ServiceProviderRegistrationPage />} path="/service-provider-register" />
				<Route element={<LoginPage />} path="/login" />
				<Route element={<Home />} path="/" />
			</Routes>
		</AuthProvider>
		{/* <Footer /> */}
	</Router>
);

export default App;
