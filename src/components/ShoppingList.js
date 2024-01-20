import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  const itemsToDisplay = items
    .filter((item) => selectedCategory === "All" || selectedCategory === item.category)
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>

      <Filter 
        category={selectedCategory}
        onCategoryChange={setSelectedCategory} 
        search={search}
        onSearchChange={setSearch} 
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
