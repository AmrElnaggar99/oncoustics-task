import React from "react"
import Image from "react-bootstrap/Image"
const SideNavbar = () => {
  return (
    <div id="sidenavbar">
      <a href="#" className="d-block logo-icon-link">
        <Image
          fluid
          width={50}
          height={50}
          src="https://fakestoreapi.com/icons/logo.png"
          alt="logo"
        />
      </a>
    </div>
  )
}

export default SideNavbar
