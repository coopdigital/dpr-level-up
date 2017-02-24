'use strict';

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function getGoalProperty(name) {
  return JSON.parse(localStorage.getItem('goal'))[name];
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
function addClass(el, className) {
  if (el.classList)
     el.classList.add(className);
  else
     el.className += ' ' + className;
}
