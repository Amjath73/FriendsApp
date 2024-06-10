import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddFriends = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName": "",
            "DescribeYourFriend": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })

    }
    const readValue = () => {
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("ADDED")
                }
                else {
                    alert("ERROR")
                }
            }
        ).catch().finally()

    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">FriendName</label>
                                <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Firend NickName</label>
                                <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">DescribeYourFriend</label>
                                <textarea name='DescribeYourFriend' id="" className="form-control" value={data.DescribeYourFriend} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFriends
