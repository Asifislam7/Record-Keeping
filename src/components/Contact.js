import React from 'react'
import {Link,Outlet} from 'react-router-dom';
function Contact() {
  return (
    <div>
  <Link to={'insta'}> <h1>Contact via Instagram</h1></Link>
  <Link to={'mail'}> <h2>Contact via mail</h2></Link> 
  <h1>This is the contact page</h1>
  <h2>Again checking through vs code</h2>
{/* we are  learning nested routes means from the same page we are providing links to different pages
Such kind of activites are being used in very big projects*/}
{/* ye nested ho gya yha se to ki link to that we havemade isgoing to the app.js router decleartion where have delc
ared the route path for the insta..
 <Route path='insta' element={<Insta/>}/>
 in the above line we can see this is the decleration for insta and component to display when user clicks on that is under element tag */}
<Outlet/>

     

      
    </div>
  )
}

export default Contact
