import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/HomePage';
import AuthPage from './views/AuthPage';
import SpDashboard from './views/Dashboard';
import BottomNav from './components/componentLibrary/Navigation/BottomNav';
import CustomSearchField from './components/componentLibrary/FormComponents/CustomSearchField';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
	<Router>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Routes>
					<Route element={<AuthPage />} path="/auth" />
					<Route element={<SpDashboard />} path="/dashboard" />
					<Route element={<Home />} path="/" />
				</Routes>
				<BottomNav />
			</PersistGate>
		</Provider>
	</Router>
);

export default App;
