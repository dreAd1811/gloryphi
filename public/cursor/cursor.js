// easier syntax
const cursor = document.querySelector('.cursor');
const cursorActive = document.querySelectorAll('.cursor-activate');

// we set up a way to look for mouse movements
document.addEventListener("mousemove", (event) => {
  // we set the coordinates to match the cursor
  cursor.style.left = `${event.clientX - 10}px`;
  cursor.style.top = `${event.clientY - 10}px`;
});

//iterate through all the 'activateCursor' elements and add an listener to each one
for(let i=0; i < cursorActive.length; i++){
  // change the size of the cursor while hovering over activation elements
  cursorActive[i].addEventListener("mouseover", (e) => {
    cursor.style.transform = 'scale(2, 2)';
  });
  // change the cursor back to normal on mouse out
  cursorActive[i].addEventListener("mouseout", (e) => {
    cursor.style.transform = 'scale(1, 1)';
  });
}

// image move animation
// check when the cursor is over the element
imgWrapper.addEventListener("mouseover", (e) => {
  // get the mouse movement 
  imgWrapper.addEventListener("mousemove", (e) => {
    // get the coordinates of the image wrapper(e.target) 
    const rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    const scrollAmount = 3; //an arbitrary number for adjusting the movement
    
    //scale the image, and move it
    //the (x/3) is the width of 300 / 3 to get a range from 0-100 - as done to y/4 next
    //the '-50' part is to put 0 in the middle of the photo on both axis
    //we then divide by the scroll amount variable to further lessen the effect so our image won't move too far and reveal the background or move in wierd ways
    img.style.transform = `scale(1.5) translate(${((x/3)-50)/scrollAmount}%, ${((y/4)-50)/scrollAmount}%)`;
  });
});

// check when the cursor leaves the image
imgWrapper.addEventListener("mouseout", (e) => {
  //once it does, remove the mousemove event listener, since we don't need it anymore
  imgWrapper.removeEventListener("mousemove", (e));
  //also bring the image back to the default styling
  img.style.transform = ``;
});

// this is just to show that pointer actions are possible and are not obscured by the .cursor div
button.addEventListener("click", (e)=>{
  alert(`i have been clicked!!!`);
})