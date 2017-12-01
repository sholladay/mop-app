'use strict';

// Our code start here

const mop = require('mop-cli');

const mopButton = document.querySelector('#mop');
const out = document.querySelector('#output');
console.log(out);
mopButton.addEventListener('click', async () => {
    const projects = await mop({
        rule : {
            'caret-deps' : 'warn'
        }
    });
    const problems = projects.map((project) => {
        const pg = document.createElement('p');
        pg.textContent = project.path;
        return pg;
    });
    console.log(problems);
    problems.forEach((problem) => {
        out.appendChild(problem);
    });
});
