// get the modal 
const modal = document.getElementById('modal');
// get the modal image 
const modalImg = document.getElementById('modalImg');
// get the close button 
const close = document.getElementById('close');
// get the body (toggle scroll class)
const body = document.body;
// get images based on class name 
const imagesToOpen = document.getElementsByClassName('item');
// get the modal figcaption 
const captionText = document.getElementById("caption");
// get keyevent to leave modal
const escKey = event.key;


// for each image attach onclick event that open modal => action 
for(let i = 0; i < imagesToOpen.length; i++) {
    imagesToOpen[i].onclick = (clickEvent) => {
        // execute the function 
       openModal(clickEvent);
    };
}

// function to open modal and add no scroll => what it's executed 
// 1 : define the fuction and pass it the argument event 
// 2 : make the modal visible by changing the display from none to flex
// 3 : attribute new value to the source of the modal image and get the target (image being clicked) source 
// 5 : add CSS class (noScroll) on the body 
// 6 : make the alt attribute content as figcaption for modal 
openModal = (event) => {
    modal.style.display = 'flex';
    modalImg.src = event.target.src;
    modalImg.alt = event.target.alt;
    body.classList.add("noScroll"); 
    captionText.innerHTML = event.target.alt;
};

// attach onClick event to close button
// call the function closeModal 
close.onclick = () => {
    closeModal();
};

// function to close modal by clicking on "X"
// 1 : define the function for closing modal 
// 2 : make the modal invisible by changing display from flex to none
// 3 : remove CSS class noScroll from body 
closeModal = () => {
    modal.style.display = 'none';
    body.classList.remove("noScroll")
};

// function to close modal by clicking on background
window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};

// function to close modal by pressing EscKey 
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modal.style.display = "none";
    }
}, false);