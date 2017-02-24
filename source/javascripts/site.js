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
