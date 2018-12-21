// Use: document.getElementById('test).pseudoStyle('before', 'content', 'This is text for test');
const pseudoStyle = () => {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return function(element, pseudoName, prop, value) {
    const sheetId = "pseudoStyles";
    const head = document.head || document.getElementsByTagName('head')[0];
    const sheet = document.getElementById(sheetId) || document.createElement('style');
    const className = "pseudoStyle" + uuidv4();

    sheet.id = sheetId;
    element.className +=  " " + className;
    sheet.innerHTML += " ." + className + ":" + pseudoName + "{" + prop + ":" + value + "}";
    head.appendChild(sheet);

    return {
      className,
      element
    };
  }
}();


// Add css to pseudo directly
document.styleSheets[0].addRule('#test:before','content: "This is text for test"');


// Get property css value of pseudo element
var color = window.getComputedStyle(document.querySelector('#test'), ':before').getPropertyValue('content');
