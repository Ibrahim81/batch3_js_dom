/*
JS DOM
DOM stands for document object model
*/

/* 0. How to get html collections */
// console.dir(document)
// console.dir(document.URL)
// console.dir(document.domain)
// document.title = 'Session 8 DOM-1'
// console.dir(document.title = 'Session 8 DOM-1')
// console.dir(document.title)
// console.dir(document.doctype)
// console.dir(document.all)
// console.dir(document.all[8])


/* 1. getElementByID */
// console.log(document.getElementById('header-title'))
// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle.innerText)
// headerTitle.textContent = '<span>DOM Part 1</span>'
// headerTitle.innerText = 'DOM Session 8'
// headerTitle.innerHTML = '<span>DOM Part 1</span>'
/* how to apply style using  getElementByID*/
// headerTitle.style.border = '2px solid'
// headerTitle.style.borderBottom = '2px solid'


/* 1. getElementByClassName */
// const myListItems = document.getElementsByClassName('list-group-item')
// console.log(myListItems)
// console.log(myListItems[3])
// myListItems[3].textContent = 'DOM Part 1'
// myListItems[3].innerHTML = '<span>DOM Part 1</span>'
// myListItems[3].style.backgroundColor = 'beige'
/* below line is wrong approach */
// myListItems.style.backgroundColor = 'beige'

/* Use Loops to iterate through each item */
// for (let i = 0; i < myListItems.length; i++) {
//   myListItems[i].style.backgroundColor = 'beige'
// }

/* 2. getElementByTagName */
// const myListItems = document.getElementsByTagName('li')
// console.log(myListItems)
// console.log(myListItems[3])
// myListItems[3].textContent = 'DOM Part 1'
// myListItems[3].innerHTML = '<span>DOM Part 1</span>'
// myListItems[3].style.backgroundColor = 'beige'
/* Use Loops to iterate through each item */
// for (let i = 0; i < myListItems.length; i++) {
//   myListItems[i].style.backgroundColor = 'beige'
// }

/* 3. querySelectorAll is similar to getElementByTagName and getElementByClassName*/
// const myTitle = document.querySelectorAll('.title')
// console.log(myTitle)
// console.log(myTitle[1])
/* myTitle[0].style.fontWeight = '900'
myTitle[1].style.fontWeight = '900' */

/* for odd values */
/* const oddLi = document.querySelectorAll('li:nth-child(odd)')
console.log(oddLi)
for (let i = 0; i < oddLi.length; i++) {
  oddLi[i].style.backgroundColor = '#ff5722'
} */
/* for even values */
/* const evenLi = document.querySelectorAll('li:nth-child(even)')
console.log(evenLi)
for (let i = 0; i < evenLi.length; i++) {
  evenLi[i].style.backgroundColor = '#FF9800'
} */


/* 5. querySelector select only one element and its similar to getElementByID*/
const myHeader = document.querySelector('#main-header')
myHeader.style.border = '3px solid'

const myInput = document.querySelector('input')
myInput.style.border = '3px solid'

/* how to get a specific item using JS querySelector */
const mySubmitInput = document.querySelector('input[type="submit"]')
mySubmitInput.value = 'Sent Input'