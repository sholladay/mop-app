'use strict';

// Our code start here

const mop = require('mop-cli');

const mopButton = document.querySelector('#mop');
const par = document.querySelector('#output');
console.log(par);
mopButton.addEventListener('click', async () => {
	// console.log(process.versions);
    // console.log('cwd:', process.cwd());
    const projects = await mop({
        rule: {
            'caret-deps': 'warn'
        }
    });
    const output = projects.map((project) => {
        let pp = document.createElement('p');
        return pp.textContent = project.path;
    });

    const output = projects.map((project) => {
        let pp = document.createElement('p');
        return pp.textContent = project.path;
    });

    console.log(output)

    // output.map(par => {

    // })
    par.textContent = output
    });
