const elementsWithClassAndOnclick = document.querySelectorAll('.chapter-card[onclick]');
elementsWithClassAndOnclick.forEach(element => {
  element.style.backgroundColor = '#dcd8f8';
});