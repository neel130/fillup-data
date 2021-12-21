import React,{useState} from 'react'



function Form() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [date,setDate]=useState('');
const [city,setCity]=useState('');
const [state,setState]=useState('');

const [data,setData]=useState([])

const subData = (e)=>{
    e.preventDefault();
    setData([name,email,date,city,state])
console.log(data);

}
const [aname,aemail,adate,acity,astate] = data
    return (
       <>
       
       
       <form className="row g-3 needs-validation my-3 mx-5 container" >
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Name</label>
    <input type="text" 
      value={name} 
     onChange={(e)=>{setName(e.target.value)}}
      className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Email</label>
    <input type="email" 
      value={email} 
     onChange={(e)=>{setEmail(e.target.value)}}
      className="form-control" id="validationCustom02"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Date</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend"></span>
      <input type="date" 
        value={date} 
       onChange={(e)=>{setDate(e.target.value)}}
        className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a date
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" 
      value={city} 
     onChange={(e)=>{setCity(e.target.value)}}
      className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">State</label>
    <input type="text" 
      value={state} 
     onChange={(e)=>{setState(e.target.value)}}
      className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid State.
    </div>
  </div>
 
  <div className="col-12">
    <button className="btn btn-primary" onClick={subData} type="submit">Submit form</button>
  </div>
</form>
      
<div className="container">

<table class="table caption-top" border='1'>
  <caption>Records</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Date</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{aname}</td>
      <td>{aemail}</td>
      <td>{adate}</td>
      <td>{acity}</td>
      <td>{astate}</td>
    </tr>
    
  </tbody>
</table>
</div>

    
       </>
    )
}

export default Form;
