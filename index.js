
'use strict';

function addItem(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('.js-shopping-list-entry').val();
    $('ul').prepend(
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
    $('#shopping-list-entry').val('');
  });
}

function deleteItem(){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
}

function checkItem(){
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}


function shoppingList(){
  $(addItem);
  $(deleteItem);
  $(checkItem);
}


shoppingList();

