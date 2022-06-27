import { sidebarContent } from "./sidebar";

import MyAsset from './bin.svg';

import { mainContent } from "./maincontent";

export const taskStorage = function(){

    let tasks = [];

    let sidebar = document.querySelector('#tasks');

    const taskCreator = function(name,description,list){

        return{name,description,list};

    }

    const taskAdded = function(inputValue,descriptionValue,taskList){

        let newTask = taskCreator(inputValue,descriptionValue,taskList);

        let mainContainer = document.querySelector('#task-container');

        tasks.push(newTask);

        renderListTasks(taskList,mainContainer);

        sidebarContent.renderTaskSidebar(sidebar,tasks);

    }

    const taskRemoved = function(taskName){

        tasks = tasks.filter(task => task.name !== taskName);


        sidebarContent.renderTaskSidebar(sidebar,tasks);
       

        console.log(lists);

    }

    const taskListRemoved = function(listName){

        tasks = tasks.filter(task => task.list !== listName);


        sidebarContent.renderTaskSidebar(sidebar,tasks);
       

        console.log(lists);

    }

    const renderListTasks = function(listTitle,container){

        container.innerHTML = '';

        let tasksFiltered = tasks.filter(task => task.list === listTitle);

        tasksFiltered.forEach(function(task){

            let taskWrapper = document.createElement('div');

            taskWrapper.classList.add('task-wrapper');

            let taskTitle = document.createElement('p');

            const myIcon = document.createElement('img');

            myIcon.src = MyAsset;

            myIcon.id='bin';

            taskTitle.textContent = `- ${task.name}`;
            
            taskWrapper.append(taskTitle);

            taskWrapper.append(myIcon);

            container.append(taskWrapper);

            myIcon.addEventListener('click',function(e){

                taskRemoved(task.name);
                taskWrapper.remove();

            })

            taskWrapper.addEventListener('click',function(e){
                if(!(e.target.matches('#bin'))){
                mainContent.renderTaskContent(task.name , task.description);
                } else return;

        })

        })

    }

    return{taskAdded,taskRemoved,renderListTasks,taskListRemoved};
}();