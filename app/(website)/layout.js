import Header from '@/components/header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Header />
        {children}
    </div>
  )
}

export default layout