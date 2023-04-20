const express = require('express');
const app = express();

app.use(express.json());

const shoppingList = [];

function addToShoppingList(item) {
  shoppingList.push(item);
}

function getShoppingList() {
  return shoppingList;
}

app.post('/api/shopping-list', (req, res) => {
  const newItem = req.body.item;
  if (!newItem) {
    return res.status(400).json({ error: 'Item is required.' });
  }
  addToShoppingList(newItem);
  res.status(201).json({ message: 'Item added to the list.' });
});

app.get('/api/shopping-list', (req, res) => {
  res.json(getShoppingList());
});

module.exports = { app, addToShoppingList, getShoppingList };
