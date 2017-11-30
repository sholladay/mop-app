'use strict';

// Our code start here

// const mop = require('mop-cli');

const mopButton = document.querySelector('#mop');

mopButton.addEventListener('click', () => {
	console.log(process.versions);
	console.log('cwd:', process.cwd());
});
