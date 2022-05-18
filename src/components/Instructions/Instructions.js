import React from 'react';
import './Instructions.css';

const Instructions = () => (
  <div className="instructionsWrapper">
      <h3>Instructions on how to use Shopping List app.</h3>
      <ul>
        <li>Navigate to Shopping List app at the top of navigation.</li>
        <li>In the input field type in your item and press <b>Add Item</b> or <b>Enter</b>. Field cannot be blank.</li>
        <li>Added item will appear below. You can edit item by pressing <b>Edit</b> button and once corrections are made press <b>Submit</b>.</li>
        <li>Added items can be deleted by using <b>Delete</b> button.</li>
        <li>List is saved in your local storage, meaning, that items will not dissappear after refreshing the page.</li>
        <li>Please note: app will not let users submit empty input. There are no restrictions on capitalization of letters.</li>
        <li>Happy shopping!</li>
      </ul>
  </div>
);


export default Instructions;
