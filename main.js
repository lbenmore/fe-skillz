function eventListeners () {
  
}

function initFns () {
  console.log('initialize functions');
}

if (document.readyState === 'complete') initFns();
else document.addEventListener('DOMContentLoaded', initFns);