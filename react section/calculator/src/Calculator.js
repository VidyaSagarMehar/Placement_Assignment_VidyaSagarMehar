import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
	const [result, setResult] = useState('');

	const handleClick = (event) => {
		setResult(result + event.target.value);
	};

	const handleChange = () => {};
	const handleClear = () => {
		setResult('');
	};

	const calculate = () => {
		setResult(eval(result));
	};
	const handleRoot = () => {
		setResult(Math.sqrt(result));
	};
	const handleSquare = () => {
		setResult(result * result);
	};

	return (
		<div className="cal">
			<h1>Calculator</h1>
			<input
				type="text"
				name="result"
				id="result"
				value={result}
				onChange={handleChange}
			/>
			<div className="row">
				<input type="button" value="C" onClick={handleClear} />
				<input type="button" value="✓x" onClick={handleRoot} />
				<input type="button" value="x²" onClick={handleSquare} />
				<input type="button" value="%" onClick={handleClick} />
			</div>
			<div className="row">
				<input type="button" value="7" onClick={handleClick} />
				<input type="button" value="8" onClick={handleClick} />
				<input type="button" value="9" onClick={handleClick} />
				<input type="button" value="+" onClick={handleClick} />
			</div>
			<div className="row">
				<input type="button" value="4" onClick={handleClick} />
				<input type="button" value="5" onClick={handleClick} />
				<input type="button" value="6" onClick={handleClick} />
				<input type="button" value="-" onClick={handleClick} />
			</div>
			<div className="row">
				<input type="button" value="1" onClick={handleClick} />
				<input type="button" value="2" onClick={handleClick} />
				<input type="button" value="3" onClick={handleClick} />
				<input type="button" value="/" onClick={handleClick} />
			</div>
			<div className="row2">
				<input type="button" value="0" onClick={handleClick} />
				<input type="button" value="*" onClick={handleClick} />
				<input type="button" value="." onClick={handleRoot} />
				<input type="button" value="=" onClick={calculate} />
			</div>
		</div>
	);
};

export default Calculator;
