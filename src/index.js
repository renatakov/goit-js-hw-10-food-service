import "./styles.css";

import posts from './menu.json';

import templatePost from './post.hbs'

// создаю элементы постов с помощью вызова шаблона
// и передачи в него массива постов
const postItem = templatePost(posts)
// console.log(postItem)

// получаю доступ в элементу html б куда буду
// встраивать сгенерированніе шаблонизатором посты
const postsList = document.querySelector('.menu.js-menu')


// встраиваю посты в html
postsList.insertAdjacentHTML('afterbegin', postItem)

const body = document.querySelector('body')
const input = document.querySelector('.theme-switch__toggle')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('changeTheme')) {
  body.classList.add(Theme.DARK)
  input.checked = true
} else {
  body.classList.add(Theme.LIGHT)
}

input.addEventListener('click', (e) => {
  console.log(e.target.checked)
  if (e.target.checked) {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
    localStorage.setItem('changeTheme', "tra-ta-ta")
  } else {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
    localStorage.removeItem('changeTheme')
  }
})
