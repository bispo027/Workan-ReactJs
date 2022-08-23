import React from 'react'

export const ProductList = (props) => {

  return (
    <div id="product-list">
      <header>
        <strong>Product List (0 items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            props.products.map(product => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.department}</td>
                  <td>{product.currency} {product.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
