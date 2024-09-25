// Mouseover event for changing background color when hovering over buttons 

const demoButton = document.getElementById('demo-button');
const learnButton = document.getElementById('learn-button');
const navButton = document.querySelector('.nav-button a')

demoButton.addEventListener('mouseover',function() {
    demoButton.style.backgroundColor = '#06600e' 
});

demoButton.addEventListener('mouseout', function () {
    demoButton.style.backgroundColor = ''
});

learnButton.addEventListener('mouseover', function () {
learnButton.style.backgroundColor = '#06600e'
});

learnButton.addEventListener('mouseout', function(){
learnButton.style.backgroundColor = ''
});

navButton.addEventListener('mouseover', function(){
    navButton.style.backgroundColor = '#06600e'
});

navButton.addEventListener('mouseout', function(){
    navButton.style.backgroundColor = ''
});

// Mousedown event for changing background color when clicking down on the buttons

demoButton.addEventListener('mousedown', function (){
    demoButton.style.backgroundColor = '#a3a19e'
});

learnButton.addEventListener('mousedown', function(){
    learnButton.style.backgroundColor = '#a3a19e'
})

navButton.addEventListener('mousedown', function(){
    navButton.style.backgroundColor = '#a3a19e'
});