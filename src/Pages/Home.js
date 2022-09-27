import React from 'react'
import Products from '../Component/Products'

function Home() {
  return (
      <>
          <h2 className="heading">WelCome To Redux ToolKit Store</h2>

          <section>
              <h2>Products</h2>
              <Products/>
          </section>
      
      </>
  )
}

export default Home