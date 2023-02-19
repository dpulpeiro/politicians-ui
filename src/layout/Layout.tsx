/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import { Footer } from './Footer'

type Props = { children: ReactNode }

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={'w-screen max-w-screen h-screen overflow-y-scroll bg-gray-50'}>
      <NavBar />
      <main className={'min-h-full'}>
        <div className='sm:px-8 mt-12 md:mt-28 '>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
              <div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
