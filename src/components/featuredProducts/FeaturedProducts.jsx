import React from 'react'
import "./featuredProducts.scss"
import Card from './../card/Card';

const FeaturedProducts = ({type}) => {
  return (
      <div className='featuredProducts'>
          <div className="top">
              <h1>{type} products</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas.
              </p>
          </div>
          <div className="bottom">
              <Card />
          </div>
    </div>
  )
}

export default FeaturedProducts