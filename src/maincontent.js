import { listStorage } from "./lists";

import { taskPopUp } from "./form-task";


import MyIcon from './close.svg';


import { taskStorage } from "./tasks";

export const mainContent = function(){

    let mainWrapper = document.querySelector('.main-content');

    const renderTaskMain = function(title){

        let body = document.querySelector('body');

        mainWrapper.innerHTML = '';

        let paragraf = document.createElement('p');

        paragraf.textContent='LIST';

        paragraf.style.color='rgb(0, 132, 255)';

        let taskContainer = document.createElement('div');

        taskContainer.id='task-container';

        let mainContainer = document.createElement('div');

        mainContainer.classList.add('main-list-container');

        let listTitle = document.createElement('h1');

        listTitle.textContent = `${title}`;

        const close = document.createElement('img');

        close.src = MyIcon;

        close.classList.add('close-icon');

        let addTask = document.createElement('h3');

        addTask.id='add-task';

        addTask.textContent = '+  Add New Task';

        mainWrapper.append(mainContainer);

        mainContainer.append(close,paragraf,listTitle,taskContainer,addTask);

        let deleteTaskButton = document.createElement('div');

        deleteTaskButton.classList.add('delete-task');

        deleteTaskButton.textContent='Delete';

        mainContainer.append(deleteTaskButton);

        taskStorage.renderListTasks(title,taskContainer);

        deleteTaskButton.addEventListener('click',function(){

                let listTag = mainContainer.querySelector('h1').textContent;
                
                listStorage.listRemoved(listTag);

                mainWrapper.innerHTML='';

        })


        addTask.addEventListener('click',()=>taskPopUp.renderPopUp(body));



    }

    const renderTaskContent = function(title,description){

        let body = document.querySelector('body');

        let taskDescription = document.createElement('h2');

        let paragrafDes = document.createElement('p');

        taskDescription.textContent = `${description}`;

        mainWrapper.innerHTML = '';

        const close = document.createElement('img');

        close.src = MyIcon;

        close.classList.add('close-icon');

        let paragraf = document.createElement('p');

        paragraf.textContent='TASK';

        paragrafDes.textContent='DESCRIPTION';

        paragrafDes.style.color='rgb(0, 132, 255)';

        paragraf.style.color='rgb(0, 132, 255)';

        let taskContainer = document.createElement('div');

        taskContainer.id='task-container';

        let mainContainer = document.createElement('div');

        mainContainer.classList.add('main-list-container');

        let listTitle = document.createElement('h1');

        listTitle.textContent = `${title}`;

        mainWrapper.append(mainContainer);

        mainContainer.append(close,paragraf,listTitle,paragrafDes,taskDescription);

    }

    document.addEventListener('click',function(e){

        if(e.target.matches('.close-icon')){

            mainWrapper.innerHTML='';
 
        }

    })


    return {renderTaskMain,renderTaskContent};

}();