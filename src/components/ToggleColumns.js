import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    props.onCheckboxClick(e.target.name, e.target.checked);
  }

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      {
        Object.keys(props.columns).map((column, index) => {
          return (
            <div key={index}>
              <label htmlFor={column}>
                {column}
              </label>
              <input
                id={column}
                name={column}
                type="checkbox"
                checked={props.columns[column]}
                onChange={(e) => onCheckboxClick(e)} />
            </div>)
        })
      }
    </div>
  );
}
