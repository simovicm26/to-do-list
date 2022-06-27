import './style.css';

import { listPopUp } from './form-list';


const body = document.querySelector('body');

document.addEventListener('click',function(e){

    if(e.target.matches('#tag-one')){

        listPopUp.renderPopUp(body);

    }

})



