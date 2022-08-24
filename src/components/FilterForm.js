import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = (e) => {
    props.onPriceInputChange(e.target.name, parseFloat(e.target.value));
  }

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        value={props.priceFrom || ''}
        onChange={(e) => onPriceInputChange(e)} />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        value={props.priceTo || ''}
        placeholder="Price to..."
        onChange={(e) => onPriceInputChange(e)} />
    </div>
  )
}
