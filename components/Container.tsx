import React, { Children } from 'react'

interface ContainerType {
  children: React.ReactNode
}

const Container: React.FC<ContainerType> = ({children}) => {
  return (
    <div className='max-w-[1140px] mx-auto px-4 md:px-5 '>
      {children}
    </div>
  )
}

export default Container
