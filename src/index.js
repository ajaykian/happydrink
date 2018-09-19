import React        from 'react';
import ReactDOM     from 'react-dom';
import                   './css/index.css';
import App          from './components/App';



import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App title ="HappyDrink" background = "#d7ccc8" fontFamily= "Arials" color="#795548 " />, 
document.getElementById('root'));
registerServiceWorker();
