var events = [
  {'Date': new Date(2020, 0, 15), 'Title': 'Makar Sankrant'},
  {'Date': new Date(2020, 0, 10), 'Title': 'Light bill', 'Link': 'https://mseb.com'},
  {'Date': new Date(2020, 0, 10), 'Title': 'CC bill'},
  {'Date': new Date(2020, 0, 23), 'Title': 'GCI Deadline'},
  {'Date': new Date(2020, 0, 26), 'Title': 'Republic Day'},
  {'Date': new Date(2020, 0, 29), 'Title': 'Vasant Panchami'},  
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
