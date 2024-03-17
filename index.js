let n_select = 0;

// const opc = document.getElementsByClassName("n_selecter");
// console.log(opc[0].innerText)

const loopItems = (className, callback) => {
    const listItems = document.getElementsByClassName(className);
    for (let index = 0; index < listItems.length; index++) {
        callback(listItems[index]);
    }
};

const changeActive = (element) => {
    loopItems('list-item', (el) => el.classList.remove('active'));
    element.classList.add('active');
    n_select = element.innerHTML;
    console.log(n_select);
}

const changeContainer = () => {
    if (n_select === 0){
        alert("Seleccione un numero del ranking");
    } else {
        const container = document.querySelector('.container');
        container.classList.remove('active');
        const n = document.getElementsByClassName('n_selecter');
        n[0].innerText = n_select;
        const container2 = document.querySelector('.container-2');
        container2.classList.add('active');
    }
};

const init = () => {
    loopItems('list-item', (el) => 
      el.addEventListener('click', () => changeActive(el))
    );

    loopItems('btn', (el) => 
      el.addEventListener('click', () => changeContainer())
    );
};

init();