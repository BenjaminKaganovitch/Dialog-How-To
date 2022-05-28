# How to Use Dialog in Web Dev

## What is a Dialog?
The 'dialog' element is used in the same way that a typical 'div' modal is used when you want content to emerge on a user's screen; similar to the Popup div.

#### Modals vs Popup Divs
A 'Dialog' is just a Popup div packaged into a browser's default styling. You must custom style your 'div' to display in front of all other content on your screen, move it to the desired area, add a backdrop, and build a method to close your modal when making a Popup. All of this is preconfigured in a 'dialogue,' and you can simply modify some of the default styling with CSS if you don't like it.

## How to use it
#### HTML
In HTML, simply use 'dialog' in the same way you would a popup 'div', as follows: '<dialog>'content'</dialog>' When your dialog opens, the content is what you want to see. Make sure you have a button to open and close your dialog (dialogues will close by default when the esc key is pressed).
```html
    <button id='open'>Open Dialog</button>

    <dialog id="modal">
        <h1>dialog are awesome!</h1>
	    <h5>Ben is also awesome!</h5>
        <p>Lorem Ipsum Dolor</p>
        <button id='close'>Close Dialog</button>
    </dialog>
```

#### JavaScript
In the Javascript file; assign event listeners to each of the buttons that open and close the dialog.
```js
const open = document.getElementById('open');
const close = document.getElementById('close');
const dialog = document.getElementById('modal');

open.addEventListener('click', () => {
    dialog.showModal();
});

close.addEventListener('click', () => {
    dialog.close();
});
```
Now Its up and running and looks great!

## Conclusion
Finally, 'dialogue' is a helpful new element that makes it simple create popup modals with built-in appearance and functionality. 

Check out the examples located in this directory. 
## References
- [How to Create HTML Modal Dialogs with the dialog Tag](https://usefulangle.com/post/110/html-dialog-element-to-create-modal-lightbox)
- [You can finally make use of the HTML dialog element](https://towardsdev.com/you-can-finally-make-use-of-the-html-dialog-element-f4b7c591b1b6)
[HTML 'dialog' Tag](https://www.w3docs.com/learn-html/html-dialog-tag.html)
