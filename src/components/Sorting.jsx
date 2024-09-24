import React, { useContext } from 'react'
import { MyContext } from '../App'

function Sorting() {
      const { filters,setFilters }=useContext(MyContext)
  return (
    <div>
      Sorting
    </div>
  )
}

export default Sorting
