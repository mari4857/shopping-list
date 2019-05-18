// To complete this challenge requires:

// - Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// - Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// - Linking to your application JavaScript file from the index.html page.
// - Using this and event delegation

// Requirements
// In terms of user experience, your shopping list app must allow users to:

// - Enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// - Check and uncheck items on the list by clicking the "Check" button
// - Permanently remove items from the list

// Additionally:

// - You must use a CDN-hosted version of jQuery
// - Put your application code in a file called index.js and link to it in index.html
// - Be sure to put both script elements at the bottom of the <body> element.
// - Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. 
// Write JavaScript code that works with the existing HTML and CSS to implement the required features.
// - Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), 
// toggleClass(), and closest().


$(function(){

  // listen for form submission
  $('#js-shopping-list-form').submit(function(event) {

    // stop default form submission
    event.preventDefault();

    // get text value for the new list item
    const listItem = $('#shopping-list-entry').val();


    // clear text input so you can input a new one
    $('#shopping-list-entry').val('');

    // add new shopping list item as a li
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  // listen for click events on delete buttons for shopping list and put the event listener on parent element

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {

    // this will look for the closest parent `li` element and remove it.
    $(this).closest('li').remove();
  });


  // when you click the 'check' button, this will cause the checked off styles to appear
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

    // go up to parent li, then find the child`.shopping-item`  and
    // toggle `.shopping-item__checked` class.
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});