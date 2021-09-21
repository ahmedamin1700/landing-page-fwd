# Landing Page Project.

## Table of Contents.
* [Instructions](#instructions)
* [Architecture](#architecture)
* [Usability](#usability)
* [Prerequisites](#prerequisites)
* [Functions](#functions)
---
 

### Introduction
This project aims to manipulating the DOM by appending dynamically added data to it and use javacript to improve the usability of an otherwise static site.


### Architecture
The project structure like the one shown below. All files present and the app successfully renders a home page with clear design and functionality added when index.html is loaded in the browser finally no errors displayed in console.

    css
    - styles.css    
    js
    - app.js
    index.html
    README.md


### Usability
All features are usable across modern desktop, tablet, and phone browsers.


### Prerequisites
- There are at least 4 sections that should be added to the page.
- Navigation is built dynamically as an unordered list. Start with empty `ul` and dynamically build navigation using `appendChild`, `textContent` and `setAttribute`.
- It should be clear which section is being viewed while scrolling through the page. 
- When clicking an item from the navigation menu, the link should scroll to the appropriate section. 


### Functions
Here I will clarify fuctions used to apply all ***Prerequisites***.

- `getNavData`: loop over sections to get initial data.
  * @returns array of objects.

- `generateNavLinks`: generate nav links and set it's attribute and event listener.
  * @param {Array} data array of sections data object.

- `navLinkScroll`: listener function used to apply smooth scroll and toggle activeness through nav links.   
  * @param {Event} evt HTML event.

- `toggleActiveness`: loop through elements and apply active class only if clicked or appeare in viewport.
  * @param {string} attrName attribute name to validate if it is really the item to apply the class.
  * @param {string} attrValue attribute value to validate if it is really the item to apply the class.
  * @param {string} tag which tag to loop through and apply the class.
  * @param {string} classToToggle the class to apply

- `toggleSectionsActiveness`: listener functions used for check whick section currently appear in viewport and apply active class as well as the nav links.

- `menuMobileToggle`: used to add functionalty for the menu icon when screen less 500 by toggle show class.