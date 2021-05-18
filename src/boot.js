import {Navbar,Nav,Form,FormControl,Button,Carousel,Container,Col,Row,Accordion,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Toggle from 'react-bootstrap-toggle';
function Boots(){
 const [values,setvalues]=useState([])
 function submit(e){
  e.preventDefault()
  let obj={firstname:e.target.fname.value,lastname:e.target.lname.value,address:e.target.add.value,country:e.target.cou.value,email:e.target.email.value,phone:e.target.phn.value}
  console.log(obj)
  let abc=values.concat(obj)
  setvalues(abc)
 }
console.log(values)
  return (
    <div>
      <div id="wrapper">

        
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
            <li>
            <div class="card">
 
    <h4><b>Hi Reader!</b></h4> 
    <p>Here is your News!</p> 
</div>
            </li>
            
            <div style={{margin:"30px"}}class="card"> Have FeedBack ?
            
               
                     <Navbar bg="dark" variant="dark" className="sidebar">
    <Nav className="sidebar-wrapper">
            <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Listening
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <h3>Provide Data Below</h3><br/>
      <form onSubmit={submit} >
      First Name<br/>
      <input type="text" name="fname"/><br/>
      Last Name<br/> <input type="text" name="lname"/><br/>
      Address<br/> <input type="text" name="add"/><br/>
      Country<br/> <input type="text" name="cou"/><br/> 
       EmailId<br/> <input type="text" name="email"/> <br/>
        Phone No<br/> <input type="text" name="phn"/> <br/>
        <button>Submit FeedBack</button>
        </form>

       </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>

    </Nav>
  </Navbar>
  </div>
             
                
                
            </ul>
        </div>


    </div>
  
    </div>
  );
}
export default Boots