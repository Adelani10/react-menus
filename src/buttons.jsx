import { useState } from 'react'
import React from 'react'
import './index.css'


export default function Button(props) {
    const buttonElements = props.buttonCategories.map((item, index) => {
        return <button 
                    key={index}
                    onClick={() => props.filterItems(item)}
                    className="px-3 py-1 hover:border-2 border-amber-600 rounded-md text-amber-600 hover:bg-amber-600 hover:text-white tracking-widest font-semibold">{item}
                </button>
    })
    return (
        <div className="btn-container flex md:space-x-6 space-x-1">
            {buttonElements}
        </div>
    )
}