$(() => {
/* Exercise Begin */


// Grabbing "About the Game" button. #openModal is the id defined for this button in HTML
 const $openBtn = $('#openModal');
//
// // Grabbing modal element
 const $modal = $('#modal');
//
//  Grabbing close button
 const $closeBtn = $('#close');
 //  Event handler to open the modal
  const openModal = () => {
    //Make a setTimeout for the modal to automatically pop-up after 5 seconds.
    setTimeout(openModal, 5000);
    $modal.css('display', 'block');//change the css property. setting the display to block so the box pops up after every 5 secs.
  }
// Add event listener to About the Game button
 $openBtn.on('click', openModal);

// Event handler to close the modal
 const closeModal = () => {
   $modal.css('display', 'none');//change the css property. setting the display property to none so the box closes after clicking close button.
 }
// Add event listener to Close button
 $closeBtn.on('click', closeModal);

/* Exercise End */

});
