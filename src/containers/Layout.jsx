import React from 'react'
import { Routes } from 'react-router-dom'

export const Layout = ({children}) => {
  return (
      <Routes>
          {children}
      </Routes>
  )
}
