import React from "react"
import { Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="dark"
      role="status"
      style={{
        margin: "auto",
        display: "block",
      }}></Spinner>
  )
}

export default Loader
