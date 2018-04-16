var events = [
  {'Date': new Date(2018, 3, 7), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2018, 3, 18), 'Title': 'New Garfield movie comes out!'},
  {'Date': new Date(2018, 3, 27), 'Title': '25 year anniversary'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

var element1 = document.getElementById('caleandar1');
caleandar(element1, events, settings);



var element2 = document.getElementById('caleandar2');
caleandar(element2, events, settings);