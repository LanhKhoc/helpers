HTMLElement.prototype.pseudoStyle = function() {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return function(element,prop,value) {
      var _this = this;
      var _sheetId = "pseudoStyles";
      var _head = document.head || document.getElementsByTagName('head')[0];
      var _sheet = document.getElementById(_sheetId) || document.createElement('style');
      _sheet.id = _sheetId;
      var className = "pseudoStyle" + uuidv4();

      _this.className +=  " "+className;

      _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
      _head.appendChild(_sheet);
      return this;
  }
}();

// Use: document.getElementById('test).pseudoStyle('before', 'content', 'This is text for test');