const clockContainer = document.querySelector('.clock'); 


setInterval(() =>{
const time = new Date();
let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
clockContainer.textContent = (`${hour}:${minutes}:${seconds}`);
})



