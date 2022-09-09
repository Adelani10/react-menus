import { useState } from 'react'
import React from 'react'
import './index.css'

export default function Chow (props) {
    return (
        <div className="w-full flex flex-col md:flex-row space-y-3 md:space-x-3 p-3">
            <img src={props.img} alt="image here" className="w-full md:w-[40%] h-64 md:h-48 border-4 border-amber-600 rounded-md object-cover" />
            <div className='space-y-3 md:w-[60%]'>
                <section className="flex justify-between font-bold tracking-wider border-b-2">
                    <h1 className="pb-1">{props.title}</h1>
                    <h1 className="text-amber-600">${props.price}</h1>
                </section>
                <article className="text-zinc-400">
                    {props.desc}
                </article>
            </div>
        </div>
    )
}