const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".min")
const seconds = document.querySelector(".sec")

const currentMonths = new Date()

const birthDay = new Date(('Mar 23 1998'))

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
const month = day * 30

function countDown() {
    const today = new Date()
    const timeSpan = birthDay - today
    console.log(timeSpan);

    const months = Math.floor(timeSpan / month)
    const days = Math.floor((timeSpan % month) / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    console.log(`months : ${months} : days : ${days} hours : ${hours} : minutes : ${minutes} : seconds : ${seconds}`);
}
countDown()

console.log(currentMonths);

console.log(birthDay);