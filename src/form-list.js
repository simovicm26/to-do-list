import { listStorage } from "./lists";

export const listPopUp = function(){

    const renderPopUp = function(parent){

        let popUpWrapper = document.createElement('div');

        popUpWrapper.classList.add('pop-up-wrapper');

        let popUpContainer = document.createElement('div');

        popUpContainer.classList.add('pop-up-container');

        popUpWrapper.append(popUpContainer);

        parent.append(popUpWrapper);

        let popUpInputList = document.createElement('input');

        let popUpText = document.createElement('h2');

        popUpText.textContent = 'Enter list name:'
 
        popUpContainer.append(popUpText);

        popUpContainer.append(popUpInputList);

        let cancelListButton = document.createElement('div');

        cancelListButton.id = 'cancel-list-button';

        cancelListButton.textContent = 'Cancel';

        let createListButton = document.createElement('div');

        createListButton.id = 'create-list-button';

        createListButton.textContent = 'Create';

        popUpContainer.append(createListButton);

        popUpContainer.append(cancelListButton);

        document.addEventListener('click',function(e){
        if(e.target.matches('#cancel-list-button')|| e.target.matches('div.pop-up-wrapper')){

            clearPopUp(popUpWrapper);

        }})

        
        // document.addEventListener('click',function(e){
        //     if(e.target.matches('#create-list-button') && popUpInputList.value !== ''){
    
        //         listStorage.listAdded(popUpInputList.value);

        //         clearPopUp(popUpWrapper);
                
        //     }})

        createListButton.addEventListener('click',function(){
            if(popUpInputList.value !== ''){
            listStorage.listAdded(popUpInputList.value);

            clearPopUp(popUpWrapper);
            }else return;

        })

    }

    const clearPopUp = function(content){   

        content.innerHTML = '';

        content.remove();

    }

    return{renderPopUp};

}();