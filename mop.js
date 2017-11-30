'use strict';

// Our code start here

const mop = require('mop-cli');

const mopButton = document.querySelector('#mop');
const par = document.querySelector('#output');
console.log(par);
mopButton.addEventListener('click', async () => {
    const projects = await mop({
        rule: {
            'caret-deps': 'warn'
        }
    })
    const problemss = projects.map(project => {
        const path = project.path;
        return path;
    });
    const paths = problemss.map(path => {
        const par = document.createElement('p');
        par.textContent = path;
        return par;
    });
    console.log(paths);
    paths.forEach(path => {
        par.appendChild(path);
    })
    })
