  import { sidebarContent } from "./sidebar";

  import { taskStorage } from "./tasks";
  
  export const listStorage = function(){

    let lists = [];

    let sidebar = document.querySelector('#lists');

    const listCreator = function(name){
        
        return{name};

    }

    const listAdded = function(inputValue){

        let newList = listCreator(inputValue);

        lists.push(newList);
        
        sidebarContent.renderListSidebar(sidebar,lists);


    }

    const listRemoved = function(listName){

        lists = lists.filter(list => list.name !== listName);


        sidebarContent.renderListSidebar(sidebar,lists);
       
        taskStorage.taskListRemoved(listName);

        console.log(lists);

    }

    return{listAdded,listRemoved};
}();