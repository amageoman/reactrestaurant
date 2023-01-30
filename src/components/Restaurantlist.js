import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import  Container  from 'react-bootstrap/Container'

function Restaurantlist() {

    const [allrestaurant,setallrestaurant]=useState([])
       // function to call api for datas inside json file

       const getrestaurantdata = async()=>{
        await fetch('/restaurants.json').then(data=>data.json()).then(result=>{
            // console.log(result);
            setallrestaurant(result.restaurants)
            
        })

       }

       console.log(allrestaurant);

       useEffect(()=>{
        getrestaurantdata()
       },[])
  return (

 
   <div style={{padding:"10px",width:"100%"}}>
      <div style={{display:"flex",flexWrap:"wrap",width:"100%",height:"auto",justifyContent:"space-evenly",gap:"20px",alignItems:"center"}}>
      {
        allrestaurant.map(item=>(
          <RestCard  data={item}/>
        ))
      }
      </div>
   </div>
  )
}

export default Restaurantlist