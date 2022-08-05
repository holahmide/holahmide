import React, { FC, ReactNode } from 'react'
import NavBar from './NavBar'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
        <div style={{ margin: '0 auto', maxWidth: 900, minHeight: '100vh', padding: '0 1rem' }}>
            <NavBar />
            {children}
        </div>
  )
}

export default Layout
