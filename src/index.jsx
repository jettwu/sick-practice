import React from 'react';
import ReactDOM from 'react-dom';

import FormContainer from './js/container/FormContainer.jsx';
import './styles/main.scss';

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
