import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">friendName</th>
                                    <th scope="col">friendNickName</th>
                                    <th scope="col">DescribeYourFriend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th >{value.name}</th>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                        </tr>
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
