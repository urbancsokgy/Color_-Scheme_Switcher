'use strict'
const button=document.querySelectorAll('.btn');
//gombok színe
(function btnColor(){
 for (let i = 0; i < button.length; i++) {
     let color=button[i].getAttribute('id');
     button[i].style.backgroundColor=color;
     
     
 }   
})();

//eseményfigyelés + színezés
(function colorize(){
    button.forEach(element => {
        element.addEventListener('click', (event)=>{
            console.log(event.target.id);
            const color=event.target.id;
            document.querySelector('body').style.backgroundColor=color;
        })
    });


})()