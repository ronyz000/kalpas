 import {Navbar,Nav,Form,FormControl,Button,Carousel,OverlayTrigger} from 'react-bootstrap';
 import {Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import {useState,useEffect} from 'react'
 import axios from 'axios'
function Carousell(){
   const [values,setValues]=useState([])
   const [popoverOpen, setPopoverOpen] = useState(false);
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const toggle = () => setPopoverOpen(!popoverOpen);
  useEffect(()=>{
    getvalues();
  },[])

const getvalues=()=>{
  axios.get('https://api.first.org/data/v1/news')
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
function Deletetask(indextodelete){
    let newarr=values.filter(function(val,index){
      if (indextodelete==index) {
        return false

      }else{return true}
    })

      setValues(newarr)
  }
  return(
  <div>
  <h1>News Feeds</h1>
  
  
  <Carousel  activeIndex={index} onSelect={handleSelect}>


      <Carousel.Item >
      <div className="carousel">
       {
    values.slice(0, 5).map(function(val,index){
      return<div id="pop" class="alert alert-primary" role="alert">{val.summary} <button onClick={()=>{Deletetask(index)}}>X</button><p>{val.published}</p></div>
    })
  }
  </div>
      </Carousel.Item>
      <Carousel.Item>
         {
    values.slice(10, 15).map(function(val,index){
      return<div  id="pop"class="alert alert-primary" role="alert">{val.summary}<button onClick={()=>{Deletetask(index)}}>X</button><p>{val.published}</p></div>
    })
  }
      </Carousel.Item>
      <Carousel.Item>
         {
    values.slice(16, 21).map(function(val,index){
      return<div id="pop"class="alert alert-primary" role="alert">{val.summary}<button onClick={()=>{Deletetask(index)}}>X</button><p>{val.published}</p></div>
    })
  }
          </Carousel.Item>
      </Carousel>
      

        </div>
  );
}
export default Carousell
