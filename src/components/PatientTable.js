import react, { useState, useEffect } from 'react';
import { API_PATIENT_LIST } from '../constants/ApiUrls';
import "../theme1.css"
import axios from 'axios';


const PatientTable = (props) => 
{

    const [patients, setPatients] = useState([]);

    useEffect(()=>{
        axios.get(API_PATIENT_LIST)
        .then((response)=> {
            if (response.data.results && response.data.results.length > 0)
            {
                setPatients(response.data.results);
            }
        })
        .catch((error)=> {console.log(error)})
    },[]);



    const rowClassNames = ["small", "pt-1", "fw-bold"];

    return (
        <>
        <table>
          <tbody>
            <tr>
                <th>Nr.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Date of birth</th>
            </tr>
          {patients?.map((item) => (
            <tr key={item.id}>
              <td className={rowClassNames.join(' ')}>
                <span><a href={'patient?patient_id=' + item.id} className='fw-bold'>{item.id}</a></span>
              </td>
              <td className={rowClassNames.join(' ')}>
                <a href={'patient?patient_id=' + item.id} className='fw-bold'>{item.first_name + " " + item.last_name}</a>
              </td>
              <td className={rowClassNames.join(' ')}>
                {item.email}
              </td>
              <td className={rowClassNames.join(' ')}>
                {item.phone_number}
              </td>
              <td className={rowClassNames.join(' ')}>
                {item.dob}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        </>

    )

};

export default PatientTable;