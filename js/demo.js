var events = [
  {'Date': new Date(2018, 3, 7), 'Title': 'My Event1'},
  {'Date': new Date(2018, 3, 18), 'Title': 'My Event 2'},
  {'Date': new Date(2018, 3, 27), 'Title': 'My Event 4'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

var element1 = document.getElementById('caleandar1');
caleandar(element1, events, settings);



var element2 = document.getElementById('caleandar2');
caleandar(element2, events, settings);