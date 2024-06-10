import axios from 'axios'
import React, { useState } from 'react'

const ViewAll = () => {
    const[data,setData]=useState([])
    const fetchData =() => {
        axios.get("https://friendsapi-re5a.onrender.com/adddata").then(
            (response)=()=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch().finally()
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>

    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="col">Name</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Describe</th>
          </tr>
        }
    )}
  </thead>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
