import { taskStorage } from "./tasks";

export const taskPopUp = function(){

    const renderPopUp = function(parent){

        let popUpWrapper = document.createElement('div');

        popUpWrapper.classList.add('pop-up-wrapper');

        let popUpContainer = document.createElement('div');

        popUpContainer.classList.add('pop-up-container');

        popUpWrapper.append(popUpContainer);

        parent.append(popUpWrapper);

        let popUpInputTitle = document.createElement('input');

        let popUpText = document.createElement('h2');

        let popUpDescription = document.createElement('h2');

        let popUpDescriptionInput = document.createElement('input');

        popUpDescription.textContent ='Description:'

        popUpText.textContent = 'Enter task name:'
 
        popUpContainer.append(popUpText,popUpInputTitle,popUpDescription,popUpDescriptionInput);

        let cancelTaskButton = document.createElement('div');

        cancelTaskButton.id = 'cancel-list-button';

        cancelTaskButton.textContent = 'Cancel';

        let createTaskButton = document.createElement('div');

        createTaskButton.id = 'create-task-button';

        createTaskButton.textContent = 'Add';

        popUpContainer.append(createTaskButton);
        console.log('lol');
        popUpContainer.append(cancelTaskButton);

        document.addEventListener('click',function(e){
        if(e.target.matches('#cancel-list-button')|| e.target.matches('div.pop-up-wrapper')){

            clearPopUpTask(popUpWrapper);

        }})

        
        // document.addEventListener('click',function(e){
        //     if(e.target.matches('#create-list-button') && popUpInputList.value !== ''){
    
        //         listStorage.listAdded(popUpInputList.value);

        //         clearPopUp(popUpWrapper);
                
        //     }})

        createTaskButton.addEventListener('click',function(){
            if(popUpInputTitle.value !== '' && popUpDescriptionInput.value){

                let taskName = document.querySelector('.main-list-container').querySelector('h1').textContent;

                taskStorage.taskAdded(popUpInputTitle.value,popUpDescriptionInput.value,taskName);


                clearPopUpTask(popUpWrapper);

            }else return;

        })

    }

    const clearPopUpTask = function(content){   

        content.innerHTML = '';

        content.remove();

    }

    return{renderPopUp};

}();