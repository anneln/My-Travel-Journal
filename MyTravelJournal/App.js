import React from 'react'
import data from './data'
import Navbar from './components/Navbar'
import TravelList from './components/TravelList'

 export default function App(){
   const travels = data.map(item =>{
         return (
             <TravelList 
             key={item.id}
             item={item}/>
         )
     })
     return(
         <div>
            <Navbar />
                <section className='travels-list'>
                {travels}
                </section>
         </div>
         )
 }
