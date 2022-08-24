/* eslint-disable array-callback-return */
import React from 'react'

export const ProductList = (props) => {

  const ProductTd = (data) => {
    const { name, product } = data
    return (
      <td>{product[name]}</td>
    )
  }

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {
              Object.keys(props.columns).map((column, index) => {
                if (props.columns[column]) {
                  return <th key={index}>{column}</th>
                }
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            props.products.map((product) => {
              return (
                <tr key={product.id}>
                  {
                    Object.keys(props.columns).map((column, index) => {
                      if (props.columns[column]) {
                        return <ProductTd
                          key={index}
                          product={product}
                          name={column}
                        />
                      }
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}
