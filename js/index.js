const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const topNav = document.querySelectorAll('nav a');

 
topNav[0].textContent = siteContent['nav']['nav-item-1']; 
topNav[1].textContent = siteContent['nav']['nav-item-2'];
topNav[2].textContent = siteContent['nav']['nav-item-3'];
topNav[3].textContent = siteContent['nav']['nav-item-4'];
topNav[4].textContent = siteContent['nav']['nav-item-5'];
topNav[5].textContent = siteContent['nav']['nav-item-6'];

// Top Image

let topImg = document.getElementById('cta-img'); 

topImg.src = 'img/header-img.png'; 

// h1

let topH1 = document.querySelector('h1'); 

topH1.innerHTML = 'DOM<br>IS<br>AWESOME';

// Button

let topButton = document.querySelector('button'); 

topButton.textContent = 'Get Started'; 

// ================= Middle Section ==================

let midSectionHeader = document.querySelectorAll('.top-content h4'); 
let midSectionContent = document.querySelectorAll('.top-content p'); 

// Features

midSectionHeader[0].textContent = siteContent['main-content']['features-h4']; 
midSectionContent[0].textContent = siteContent['main-content']['features-content']; 

// About 

midSectionHeader[1].textContent = siteContent['main-content']['about-h4']; 
midSectionContent[1].textContent = siteContent['main-content']['about-content'];

// ================== Middle Image =================

let midImg = document.getElementById('middle-img'); 
midImg.src = siteContent['main-content']['middle-img-src']; 

// =============== Bottom Content ================

let bottomHeader = document.querySelector('.contact h4'); 
let bottomContent = document.querySelectorAll('.contact p')

// Header 
bottomHeader.textContent = siteContent['contact']['contact-h4']; 
bottomContent[0].textContent = siteContent['contact']['address']; 
bottomContent[1].textContent = siteContent['contact']['phone']; 
bottomContent[2].textContent = siteContent['contact']['email']; 


// ================== Footer ==================

let copy = document.querySelector('footer p'); 
copy.textContent = siteContent['footer']['copyright']; 

