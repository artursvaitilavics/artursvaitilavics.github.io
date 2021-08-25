document.title = "CV JavaScript";


const body = document.body;

let bodyStyle = body.style;
bodyStyle.backgroundColor = '#BED1D1';
// bodyStyle.textAlign = 'center';
// bodyStyle.margin = 'auto';


const navBar = document.createElement('div');

let navBarStyle = navBar.style;
navBarStyle.backgroundColor = '#4A5252';



let navBarButton = document.createElement('a') ;
navBarButton.innerHTML = 'Home';
let navBarButtonStyle = navBarButton.style;

navBarButtonStyle.padding = '75px';
navBarButtonStyle.textAlign = 'center';
navBarButtonStyle.margin = 'auto';

navBar.appendChild(navBarButton);

body.appendChild(navBar);


