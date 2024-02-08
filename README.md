### Accessible Menu
___

#### Interactive elements should be created as HTML button element, so that keyboards and screenreaders can press it.
#### Alt attribute for images in those elements should be left blank, so that screenreaders will ignore it.
##### But should have its width and height so that the browser knows its aspect ratio.

#### role="dialog" indicated that it contains additional content on the website that you can access by interacting with a control. (hamburger menus, accordions, pop-up modals) 
##### Other part of the "dialog" is the element that controls whather the dialog's content is expanded or hidden, aria-expanded="false/true".
##### In order to give screenreaders context for these 2 parts of the dialog we need to give them a label, with aria-labeledby attribute and value of the ID of labeling element, to the, both, menu and open btn