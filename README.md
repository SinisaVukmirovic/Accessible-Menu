### Accessible Menu
___

#### Interactive elements should be created as HTML button element, so that keyboards and screenreaders can press it.
#### Alt attribute for icon images in those elements should be left blank, so that screenreaders will ignore it.
##### But should have its width and height so that the browser knows its aspect ratio.

#### role="dialog" indicated that it contains additional content on the website that you can access by interacting with a control. (hamburger menus, accordions, pop-up modals) 
##### Other part of the "dialog" is the element that controls whather the dialog's content is expanded or hidden, aria-expanded="false/true".
##### In order to give screenreaders context for these 2 parts of the dialog we need to give them a label, with aria-labeledby attribute and value of the ID of labeling element, to the, both, menu and open btn.

##### aria-label="Close" instead of aria-labelby to only label the button itself
###### *aria-label can be used in cases where text that could label the element is not visible. If there is visible text that labels an element, use aria-labelledby instead. The purpose of aria-label is the same as aria-labelledby . Both provide an accessible name for an element.*

### to check the width of the device on which the website was first loaded on, we use "window.matchMedia". To check if its on mobile screen:
```
    const media = window.matchMedia('(width < 40em)');
```
### inert attribute is used to hide element from the accessibility tools.
##### *The inert global attribute is a Boolean attribute indicating that the browser will ignore the element.* 
##### *Prevents the click event from being fired when the user clicks on the element.*
##### *Prevents the focus event from being raised by preventing the element from gaining focus.*
##### *Hides the element and its content from assistive technologies by excluding them from the accessibility tree.*
#### *The inert attribute can be added to sections of content that should not be interactive. When an element is inert, it along with all of the element's descendants, including normally interactive elements such as links, buttons, and form controls are disabled because they cannot receive focus or be clicked.*