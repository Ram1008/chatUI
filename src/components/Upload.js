import React from 'react';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

const App = () => {

return (
	<div >
	<input
		type="file"
		accept="image/*"
		style={{ display: 'none' }}
		id="contained-button-file"
	/>
	<input accept="image/*" id="icon-button-file"
		type="file" style={{ display: 'none' }} />
	<label htmlFor="icon-button-file">
		<IconButton color="primary" aria-label="upload picture"
		component="span">
		<PhotoCamera />
		</IconButton>
	</label>
	</div>
);
}

export default App;
