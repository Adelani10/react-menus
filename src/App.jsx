import { useState } from 'react'
import React from 'react'
import './index.css'
import Chow from './chow'
import menu from './data'
import Button from './buttons'


let buttonCategories = new Set (menu.map(item => {
  return item.category
}))

  buttonCategories = ["all", ...buttonCategories]



function App() {
  const [menuData, setMenuData] = useState(menu)


  function filterItems (category) {
    if (category === 'all'){
      setMenuData(menu)
      return;
    }
    const newData = menu.filter(item => {
        if (category === item.category){
          return item
        }
    })
    setMenuData(newData)
  }

  const menuElements = menuData.map(item => {
    return <Chow 
              key={item.id} 
              title={item.title} 
              category={item.category}
              price={item.price}
              img={item.img}
              desc={item.desc}
            />
  })

  return (
    <div className="App space-y-8">
      <div className='flex flex-col items-center space-y-8'>
        <h1 className="font-bold text-2xl md:text-5xl text-zinc-700">Our Menu</h1>

        <Button filterItems={filterItems} buttonCategories={buttonCategories} />
      </div>
      
      <div className='md-space-y-0 space-y-3 md:grid md:grid-cols-2 md:gap-3'>
        {menuElements}
      </div>
    </div>
  )
}

export default App
