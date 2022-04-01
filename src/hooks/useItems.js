import React, { useEffect, useState } from 'react'

const useItems = () => {
  const [Items, setItems] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch('https://api.escuelajs.co/api/v1/products')
      const json = await data.json();
      setItems(json)
    }
    fetchData();

  }, [])
  return Items
  
}

export default useItems
