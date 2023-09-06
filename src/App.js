import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Browse from './pages/browse/Browse';
import ResultList from './pages/search/ResultList';
import RenderDom from './Component/TakeDataAPI/RenderDom';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Browse />
		),
		children: [
			{
				path: '',
				element: <RenderDom />
			},
			{
				path: 'search',
				element: <ResultList />
			},
		]
	},
])

const App = () => {
	return (
		<RouterProvider router={router} />
	)
};
export default App;