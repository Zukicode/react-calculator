import React from 'react';
import Result from './components/Result/Result';
import Buttons from './components/Buttons/Buttons';
import './scss/app.scss';

function App() {
	const [value, setValue] = React.useState('');

	return (
		<div className='App'>
			<div className='calculator'>
				<Result value={value} />

				<Buttons value={value} setValue={setValue} />
			</div>
		</div>
	);
}

export default App;
