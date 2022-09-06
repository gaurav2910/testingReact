import React, { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import '../css/viewData.css'

let url = 'https://gorest.co.in/public/v2/users'

const ViewData = () =>{
    const[data,setData] = useState([])
    useEffect(()=>{
        ApiService(url)
        .then((res)=>{
            console.log(res.data)
            setData(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.status}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ViewData