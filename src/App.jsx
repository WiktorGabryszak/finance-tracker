import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path='about' element={<About />} />
				<Route path='pricing' element={<Pricing />} />
				{/* <Route
					path='app'
					element={<AppLayout />}>
					<Route index element={<Navigate replace to='cities' />} />
					<Route path='cities/:id' element={<City />} />
					<Route path='cities' element={<CityList />} />
					<Route path='countries' element={<CountryList />} />
					<Route path='form' element={<Form />} />
				</Route> */}
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
