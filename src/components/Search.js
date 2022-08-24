import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });
  const [products, setProducts] = useState(props.products);

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice({ ...price, [name]: value });
    filterProducts();
  }

  const onCheckboxClick = (name, checked) => {
    setColumns({ ...columns, [name]: checked });
  }

  const filterProducts = () => {
    setProducts(props.products.filter(product => {
      if (product.price >= price.priceFrom && product.price <= price.priceTo) {
        return product.name;
      }
    }))
  }
 
  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={(name, checkbox) => onCheckboxClick(name, checkbox)}
        columns={columns} />

      <ProductList
        products={products}
        columns={columns} />
    </div>
  );
}

export default Search;
