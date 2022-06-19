import './style.css';

import showPopUp from './starting-page'

document.addEventListener('click',function(e){
    if(e.target.matches('#tag-one')){
        showPopUp();
    }
});





