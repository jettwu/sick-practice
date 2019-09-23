import _ from 'lodash';

function createEl () {
    const div = document.createElement('div');
    div.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return div
}

document.body.appendChild(createEl());
