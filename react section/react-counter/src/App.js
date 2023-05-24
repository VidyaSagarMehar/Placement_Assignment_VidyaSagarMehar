import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
	const [count, setCount] = useState(0);
	const notify = () =>
		toast.success('🖐️Counter Resets', {
			position: 'top-right',
			autoClose: 500,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});

	return (
		<div className="App">
			<header>
				<h1>Counter app using state/hooks</h1>
			</header>
			<h2>Counter {count}</h2>
			<button
				onClick={() => {
					setCount(0);
					notify();
				}}
			>
				Reset counter
			</button>
			<button onClick={() => setCount(count + 1)}>increae counter</button>
			<button onClick={() => setCount(count - 1)}>decrese counter</button>
			<ToastContainer
				position="top-right"
				autoClose={500}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
};

export default App;
