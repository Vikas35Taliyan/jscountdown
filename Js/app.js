let daysCount = document.querySelector("#days");
let hoursCount = document.querySelector("#hours");
let minutesCount = document.querySelector("#minutes");
let secondsCount = document.querySelector("#seconds");

let countDown = () => {
    let saleDate = new Date("1 dec 2022");
    let currentDate = new Date();
    let myDate = saleDate - currentDate;
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;

    daysCount.innerHTML = days;
    hoursCount.innerHTML = hours;
    minutesCount.innerHTML = minutes;
    secondsCount.innerHTML = seconds;
}

countDown()

setInterval(countDown, 1000);