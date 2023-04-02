import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SnackbarProvider } from "notistack";
import store from "./store/store";
import { AccountMenu, Home, BasicForm } from './components';


export default function App() {
	return (
		<Provider store={store}>
			<SnackbarProvider>
				<Router>
					<AccountMenu />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/todo" element={<BasicForm />} />
					</Routes>
				</Router>
			</SnackbarProvider>
		</Provider>
	);
}
