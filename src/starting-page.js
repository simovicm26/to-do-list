const displayList = function(listText){

    let mainContent = document.querySelector('.main-content');

    let sidebar = document.querySelector('.sidebar-container');

    let itemList;

    let headerContainer = document.createElement('div');

    function sidebarContentGenerator(){

        itemList = document.createElement('h2');

        itemList.id ='list';

        itemList.textContent = `${listText}`;

        sidebar.append(itemList);

        document.addEventListener('click',function(e){
            if(e.target.matches('#list')){
            mainContent.innerHTML = '';

            mainContentGenerator(e.target.textContent);

            }

        })
        

    }

    function mainContentGenerator(title){

        let mainContainer = document.createElement('div');

        headerContainer.classList.add('header-container');

        headerContainer.textContent = `${title}`;

        mainContent.append(headerContainer);

        mainContainer.classList.add('main-container');

        mainContent.append(mainContainer);

    }

    function displayContent(){

        mainContent.innerHTML='';

        sidebarContentGenerator();

        mainContentGenerator(listText);

    }

    document.addEventListener('click',function(e){
        if(e.target.matches('div.header-container')){

            mainContent.innerHTML='';
                   
            let items = document.querySelectorAll('h2');

            items.forEach(function(item){

                if(item.textContent === `${e.target.textContent}`){

                    item.remove();

                }

            })

            }
            

        })

    return {displayContent};

};  

export default function showPopUp(){

    let body = document.querySelector('body');

    let popUpContainer = document.createElement('div');

    let popUpContent = document.createElement('div');

    let listInput = document.createElement('input');

    let listTittle = document.createElement('h2');

    let createListButton = document.createElement('div');

    let cancelButton = document.createElement('div');

    popUpContent.classList.add('pop-up-content');

    popUpContainer.classList.add('pop-up-container');

    body.append(popUpContainer);

    popUpContainer.append(popUpContent);

    listTittle.textContent = 'Name this list:';
 
    createListButton.textContent = 'Create';

    createListButton.id = 'create-button';
    
    cancelButton.id = 'cancel-button';
  
    cancelButton.textContent = 'Cancel';

    popUpContent.append(listInput,listTittle,createListButton,cancelButton);

    function clearPopUp(){

        popUpContainer.innerHTML='';

        popUpContainer.remove();

    }

    document.addEventListener('click', function(e){
        if((e.target.matches('div.pop-up-container') || e.target.matches('#cancel-button'))&& e.target.classList !== 'pop-up-content'){
    
            clearPopUp();
    
        }
    })
    
    createListButton.addEventListener('click',function(e){
            
            if(listInput.value === ''){
                
                return

            } else {
            let newList = displayList(listInput.value);


            clearPopUp();

            newList.displayContent();

            }

    });

};
