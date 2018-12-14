// scroll to specific values,
// same as window.scroll() method.
// for scrolling a particular distance, use window.scrollBy().
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

// scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // negative value acceptable
  left: 0, 
  behavior: 'smooth' 
});

// scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});
