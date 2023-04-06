import React from 'react'
import Select, { createFilter } from 'react-select'
import { useId, useState, useEffect } from 'react'
import data from '../src/data.json'

export default function Search({ setText }) {
  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    noOptionsMessage: 'Hola'
  }

  return (
    <>
      <div className="selector">
        <Select
          placeholder="Escribe un destino"
          isClearable="true"
          options={data}
          onChange={(event) => {
            if (event) {
              setText(event.label)
            } else {
              setText('')
            }
          }}
          instanceId={useId()}
        />
      </div>
    </>
  )
}
