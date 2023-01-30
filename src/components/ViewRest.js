import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import  Container  from 'react-bootstrap/Container'
import { Image } from 'react-bootstrap'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'
import './operatingtime'
import Operatingtime from './operatingtime'
import Review from './Review'

function ViewRest() {

  const params = useParams()



  const [allrestaurant, setallrestaurant] = useState([])
  // function to call api for datas inside json file

  const getrestaurantdata = async () => {
    await fetch('/restaurants.json').then(data => data.json()).then(result => {

      setallrestaurant(result.restaurants)

    })

  }



  const restData = allrestaurant.find(item => item.id == params.id)
 

  useEffect(() => {
    getrestaurantdata()
  }, [])



  return (
    <>
      {restData ? (
        <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"stretch"}}>
          <div style={{width:"500px"}}>
            <Image className="p-5 " src={restData.photograph} fluid />
          </div>

          <div className="p-5 ">
          <h1>{restData.name}</h1>
            <h3>{restData.neighborhood}</h3>
            <h4>cuisine type:{restData.cuisine_type}</h4>
            <h4>address:{restData.address}</h4>
            <br/>
          <Operatingtime  timedata={restData.operating_hours}/>
          <Review reviewdata={restData.reviews}/>
          </div>
        </div>
      ) : 'null'}
    </>
  )

}

export default ViewRest