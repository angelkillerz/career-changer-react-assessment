import Navbar from "./components/Navbar"
import SectorButton from "./components/SectorButton"
import { useState, useEffect } from "react"
import AdminPage from "./pages/AdminPage"
import UserPage from "./pages/UserPage"
import mockEmployees from "./data/mockEmployee"
import styled from "styled-components";
import Design from "./components/Particles"
import OwnerPage from "./pages/OwnerPage"
//import './Home.css'


const Home = () => {
  
  const [sectors, setSector] = useState("");
  const [data, setData] = useState(mockEmployees);
  const [adminVisibility, setAdminVisibility] = useState(false);
  const [userVisibility, setUserVisibility] = useState(false);
  
  console.log(sectors)
  console.log("admin",adminVisibility)
  console.log("user",userVisibility)
  const handleSector = (sector) => {
    if (sector.toLowerCase() === 'user') {
        setUserVisibility(!userVisibility);
        setAdminVisibility(false)
        setSector(sector)
        console.log(sectors)
    } else if ( sector.toLowerCase() === 'admin') {
      setAdminVisibility(!adminVisibility)
      setUserVisibility(false)
      setSector(sector)
      console.log(sectors)
    } else {
      setSector(sector)
      console.log(sectors)
    }
  }




  const addNewEmployee = (newEmployee) => {
    setData([...data, newEmployee]);
  }

  const deleteEmployee = (id) => {
    console.log("delete" + id)
    setData(data.filter((value) => value.id !== id))
  }

 



  return (
    <>
       <Content>
          

          
          <Navbar />

          <div className="title-hero">
            <div>
              <h1>Generation Thailand React Assesment</h1>
            </div>
            <div>
                <h1> {userVisibility && sectors === 'user' ? "User section" : adminVisibility && sectors === 'admin' ? "Admin section" : null }</h1>
           </div>
          </div>
          

          <SectorButton sector={sectors} handleSector={handleSector}/>

          {adminVisibility && sectors === 'admin' ? <AdminPage id={data.id} data={data} addEmployee={addNewEmployee} sector={sectors} deleteEmployee={deleteEmployee}/>
          : userVisibility && sectors === 'user' 
          ? <UserPage data={data} 
          sector={sectors}/> 
          : null}

      {/* <Design>
        
      </Design> */}
       

      </Content>    

        
        
      
    </>
  )
}

// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: -1; /* Send the background behind other content */
// `;

const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300;400;600&display=swap');
  font-family: 'Spline Sans Mono', monospace;
  color: black;

`;





export default Home;
