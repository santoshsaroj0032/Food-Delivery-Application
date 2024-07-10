import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div> 
      <footer  className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div  className="col-md-4 d-flex align-items-center">
      <Link to="/"  className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
       </Link>
      <span  className="text-muted">© 2024 Foodie, Inc</span>
    </div>
 
   { /*
      <li className="ms-3"><Link  className="text-muted" to="#"><svg  className="bi" width="24" height="24"><use xlink:to="#twitter"></use></svg></Link></li>
      <li  className="ms-3"><Link  className="text-muted" to="#"><svg  className="bi" width="24" height="24"><use xlink:to="#instagram"></use></svg></Link></li>
      <li  className="ms-3"><Link  className="text-muted" to="#"><svg  className="bi" width="24" height="24"><use xlink:to="#facebook"></use></svg></Link></li>
      */}
   </footer>
    </div>
  )
}
