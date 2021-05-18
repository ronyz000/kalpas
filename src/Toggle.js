import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toggle from 'react-bootstrap-toggle';
 import {useState,useEffect} from 'react'
 import axios from 'axios'
function Tog(){
  const [values,setValues]=useState([])
  useEffect(()=>{
    getvalues();
  },[])

const getvalues=()=>{
  axios.get('/news.json')
  .then((res)=>{
    console.log("hi")
    setValues(res.data.data)
    console.log(values)
  })
  .catch((err)=>{
    console.log(err)
  })
}
console.log(values)

    return (
     
     <div>
  {
    values.map(function(val){
      return<div>{val.summary}</div>
    })
  }
     </div>
    )
  
 
}
export default Tog
 