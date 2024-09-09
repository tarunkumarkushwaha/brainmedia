let menuOpen = true;
let searchinput = "";
const menu = document.getElementById('menu');
const rightmenuitems = document.getElementById('right-menu-items');
const menubtn = document.getElementById('menu-button');
const search = document.getElementById('job-search');
const contactbtn = document.getElementById('contactbtn');
const contact = document.getElementById('contact');
const aboutusbtn = document.getElementById('aboutusbtn');
const aboutus = document.getElementById('aboutus');
const backTopBtn = document.getElementById('backTopBtn');

const searchhandler = (e) => {
    searchinput = e.target.value
    console.log(searchinput)
};

function scrollToSection(targetid) {
    console.log(targetid)
    targetid.scrollIntoView();
}

const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.classList.remove('hidden');
        rightmenuitems.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        rightmenuitems.classList.add('hidden');
    }
};

const handleResize = () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('hidden');
        rightmenuitems.classList.remove('hidden');
    }
    else {
        menuOpen = false
        menu.classList.add('hidden');
        rightmenuitems.classList.add('hidden');
    }
};
handleResize()

console.log("rendering")

window.addEventListener('resize', handleResize);
menubtn.addEventListener('click', toggleMenu);
contactbtn.addEventListener('click', ()=>scrollToSection(contact));
aboutusbtn.addEventListener('click', ()=>scrollToSection(aboutus));
search.addEventListener('input', searchhandler);

// slider 

const slider = document.getElementById('slider');
let currentImageNumber = 0;
const totalImageSlides = slider.children.length;

function autoSlide() {
    currentImageNumber++;
    if (currentImageNumber >= totalImageSlides) {
        currentImageNumber = 0;
    }
    slider.style.transform = `translateX(-${currentImageNumber * 100}%)`;
}

setInterval(autoSlide, 3000);


// makeshift custom cursor 

const cursor = document.querySelector("[data-cursor]");
const anchorElements = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

// change cursorElement position based on cursor move
document.body.addEventListener("mousemove", function (event) {
    setTimeout(function () {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
    }, 100);
});

// add cursor hoverd class
const hoverActive = function () { cursor.classList.add("hovered"); }

// remove cursor hovered class
const hoverDeactive = function () { cursor.classList.remove("hovered"); }

// add hover effect on cursor, when hover on any button or hyperlink

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

addEventOnElements(anchorElements, "mouseover", hoverActive);
addEventOnElements(anchorElements, "mouseout", hoverDeactive);
addEventOnElements(buttons, "mouseover", hoverActive);
addEventOnElements(buttons, "mouseout", hoverDeactive);

// animattion for about section 
const section = document.querySelector('#aboutus');
const leftDiv = document.querySelector('#left-div');
const rightDiv = document.querySelector('#right-div');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // slide in
      leftDiv.classList.remove('-translate-x-full');
      rightDiv.classList.remove('translate-x-full');
    } else {
      // slide out
      leftDiv.classList.add('-translate-x-full');
      rightDiv.classList.add('translate-x-full');
    }
  });
}, { threshold: 0.5 }); 

observer.observe(section);

// animation for contct 

const contactSection = document.querySelector('#contact');

const observerContact = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Fade-in 
      contactSection.classList.remove('opacity-0');
      contactSection.classList.add('opacity-100');
    } else {
      // Fade-out 
      contactSection.classList.add('opacity-0');
      contactSection.classList.remove('opacity-100');
    }
  });
}, { threshold: 0.5 });

observerContact.observe(contactSection);

// scrooll percentage 


const handleScroll = () => {
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollEndPos = bodyHeight - windowHeight;
    const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;
    backTopBtn.innerText = totalScrollPercent.toFixed(0) + "%"
    if (totalScrollPercent > 5) {
        backTopBtn.classList.add("show");
    } else {
        backTopBtn.classList.remove("show");
    }
};

window.addEventListener("scroll", handleScroll);