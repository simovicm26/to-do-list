import { mainContent } from "./maincontent";

export const sidebarContent = function(){

    const renderListSidebar = function(container,lists){

        container.innerHTML ='';

        lists.forEach(function(list){

            let taskName = document.createElement('h2');

            taskName.id='sidebar-list';

            taskName.textContent = `${list.name}`;
            console.log('mare');
            container.append(taskName);
    
            taskName.addEventListener('click', ()=> mainContent.renderTaskMain(list.name));

            // document.addEventListener('click',function(e){

            //     if(e.target.matches('#sidebar-list')){
                    
            //         mainContent.renderTaskMain(e.target.textContent);

            //     }

            // })

        })

       

    }

    const renderTaskSidebar = function(container,tasks){

        container.innerHTML ='';

        tasks.forEach(function(task){

            let taskName = document.createElement('h2');

            taskName.textContent = `${task.name}`;
    
            container.append(taskName);
    
            taskName.addEventListener('click', ()=>mainContent.renderTaskContent(task.name,task.description));

        })

       

    }

    return{renderTaskSidebar,renderListSidebar};

}();