// As Morgane
// I want to display the image in a modal
// so i can enjoy a bigger quality

// On image click open modal
// store clicked image src
// change modal image source
// on close button click close modal

// const imgTarget = document.getElementById('cinema');

const modal = document.getElementById('modal');

const modalImg = document.getElementById('modalImg');

const close = document.getElementById('close');

const body = document.body;

// imgTarget.onclick = (clickEvent) => {
//     modal.style.display = 'flex';
//     modalImg.src = clickEvent.target.src;
//     modalImg.alt = clickEvent.target.alt;
//     body.classList.add("noScroll")
// };

// close modal
// on click on "X"

close.onclick = (clickEvent) => {
    modal.style.display = 'none';
    body.classList.remove("noScroll")
};


// on modal open, no scroll possible
// on modal close, scroll available


// i want all my pictures to open a modal on click 

const imagesToOpen = document.getElementsByClassName('item');

for(let i = 0; i < imagesToOpen.length; i++) {
    imagesToOpen[i].onclick = (clickEvent) => {
        modal.style.display = 'flex';
        modalImg.src = clickEvent.target.src;
        modalImg.alt = clickEvent.target.alt;
        body.classList.add("noScroll")
    };
}





