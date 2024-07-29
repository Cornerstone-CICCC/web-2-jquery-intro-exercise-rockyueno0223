$(function() {
  // YOUR CODE HERE
  $('#toggleButton').on('click', () => {
    $('#myParagraph').toggle();
  })

  $('#colorButton').on('click', () => {
    $('#colorDiv').css('background-color', 'yellow');
  })

  $('#addClassButton').on('click', () => {
    $('#classDiv').addClass('new');
  })

  $('#removeClassButton').on('click', () => {
    $('#classDiv').removeClass('new');
  })

  $('#fadeInButton').on('click', () => {
    $('#fadeDiv').fadeIn();
  })

  $('#fadeOutButton').on('click', () => {
    $('#fadeDiv').fadeOut();
  })

  $('#slideUpButton').on('click', () => {
    $('#slideDiv').slideUp();
  })

  $('#slideDownButton').on('click', () => {
    $('#slideDiv').slideDown();
  })
})
