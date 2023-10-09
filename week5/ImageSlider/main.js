// Get Slider Items
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number Of Slides
var slideCount = sliderImages.length ;

// Set Current Slide
var currentSlide = 1; 

// Slide Number String Element
var slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons 
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// Handle Click On Previous and Next Buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Create The Main Ul Elements
var paginationElement = document.createElement("ul");

// Set ID On Created Ul ELement
paginationElement.setAttribute('id' , 'pagination-ul')

// Create List Items Based on Slide Count 
for(var i = 1 ; i <= slideCount ; i++ ){

    // Create li
    var paginationItem = document.createElement("li");

    // Set Custon Attribute
    paginationItem.setAttribute('data-index' , i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items To Ul
    paginationElement.appendChild(paginationItem);

}

// Add UL to The Body
document.getElementById('indicators').appendChild(paginationElement)

// Get The ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Slider Items
var paginationItems = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop Through All Bullets 
for (var i = 0 ; i <paginationItems.length ; i++){

    paginationItems[i].onclick = function() {

    currentSlide = parseInt(this.getAttribute('data-index'));

    checker();

    }
}

// excute the Checker
checker();

// Next Slide Function
function nextSlide(){
    
    if(nextButton.classList.contains('disabled')) {

        return false;

    }else{

    currentSlide++ ; 

    checker();

    }

}

// Prev Slide Function
function prevSlide(){

    if(prevButton.classList.contains('disabled')) {

        return false;

    }else{

    currentSlide-- ; 

    checker();

    }
}

// Create The Checker Function
function checker(){

    // Set The Slide Number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' OF ' + (slideCount);

    removeActive();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class On Current li Item
    paginationCreatedUl.children[currentSlide -1].classList.add('active');

    // Check If Current Slide is The First
    if(currentSlide == 1){

        // Add Disable on prev
        prevButton.classList.add("disabled");

    }else {

        // Remove Disable on prev
        prevButton.classList.remove("disabled");

    }

    // Check If Current Slide is The Last
    if(currentSlide == slideCount){

        // Add Disable on next
        nextButton.classList.add("disabled");

    }else {

        // Remove Disable on next
        nextButton.classList.remove("disabled");

    }
}

// Remove Active Class 
function removeActive () {

    // Loop Images
    sliderImages.forEach(function(img){

        img.classList.remove("active");

    });

    // Loop li
    paginationItems.forEach(function(e){

        e.classList.remove("active");

    })
}