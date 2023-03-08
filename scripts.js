var btn = document.getElementById('btn');
var main = document.getElementById('main');
var recentColor = document.getElementById('recent-color');
var message = document.getElementById('message');

// Generate a random number from 0 to 255 
function randomRgbNumber(){
    return Math.floor(Math.random() * 266 + 0);
}

// Add onclick for button, when click: change color of .main
btn.addEventListener('click', function(){
    // Generate 3 attributes for the rgb
    let rgb1 = randomRgbNumber();
    let rgb2 = randomRgbNumber();
    let rgb3 = randomRgbNumber();
    // Set background color for .main with the newly generated rgb attributes 
    main.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    // Add these attributes to display them to user
    recentColor.innerHTML = `RGB(${rgb1}, ${rgb2}, ${rgb3})`;
})

// Add onclick for recentColor, when click: copy text - display the "Copied" message
recentColor.addEventListener('click', function(){
    let rgb = recentColor.innerHTML.toString();
    // Copy attributes to clipboard
    navigator.clipboard.writeText(rgb);
    //Display "Copied!" message
    recentColor.classList.add('active');
    message.classList.add('active');
    setTimeout(function() {
    recentColor.classList.remove('active');
    message.classList.remove('active');
    }, 1500);
})