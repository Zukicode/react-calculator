import React from 'react';
import { TiBackspaceOutline } from 'react-icons/ti';
import { RiDivideFill } from 'react-icons/ri';

const Buttons = ({ setValue, value }) => {
	//Solution on button equal
	const equalSolution = () => {
		if (value != '') {
			let result = eval(value);
			setValue(String(result));
		} else {
			//Write for user, value is empty!
			setValue('Empty!');
			//Clear this log
			let timer = setTimeout(() => {
				setValue('');
			}, 750);
			timer();
			//Clear interval for application optimization :)
			clearInterval(timer);
		}
	};

	return (
		<div className='calculatorBtns'>
			<button className='btn color-pink' onClick={() => setValue('')}>
				AC
			</button>

			<button
				className='btn color-pink'
				onClick={() => setValue(value.concat('/'))}>
				<RiDivideFill className='icon-top' />
			</button>

			<button
				className='btn color-pink'
				onClick={() => setValue(value.concat('*'))}>
				×
			</button>
			<button
				className='btn bg-pink'
				onClick={() => setValue(value.slice(0, -1))}>
				<TiBackspaceOutline className='icon-top' />
			</button>
			<button className='btn' onClick={() => setValue(value.concat('7'))}>
				7
			</button>
			<button className='btn' onClick={() => setValue(value.concat('8'))}>
				8
			</button>
			<button className='btn' onClick={() => setValue(value.concat('9'))}>
				9
			</button>
			<button
				className='btn bg-pink'
				onClick={() => setValue(value.concat('-'))}>
				-
			</button>

			<button className='btn' onClick={() => setValue(value.concat('4'))}>
				4
			</button>
			<button className='btn' onClick={() => setValue(value.concat('5'))}>
				5
			</button>
			<button className='btn' onClick={() => setValue(value.concat('6'))}>
				6
			</button>
			<button
				className='btn bg-pink'
				onClick={() => setValue(value.concat('+'))}>
				+
			</button>

			<button className='btn' onClick={() => setValue(value.concat('1'))}>
				1
			</button>
			<button className='btn' onClick={() => setValue(value.concat('2'))}>
				2
			</button>
			<button className='btn' onClick={() => setValue(value.concat('3'))}>
				3
			</button>
			<button
				className='btn rounded-right bg-pink equal'
				onClick={equalSolution}>
				=
			</button>

			<button
				className='btn rounded-left bottom-fix'
				onClick={() => setValue(value.concat('.'))}>
				.
			</button>
			<button
				className='btn bottom-fix'
				onClick={() => setValue(value.concat('0'))}>
				0
			</button>
			<button
				className='btn bottom-fix'
				onClick={() => setValue(value.concat('%'))}>
				%
			</button>
		</div>
	);
};

export default Buttons;
