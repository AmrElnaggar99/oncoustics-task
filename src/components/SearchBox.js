import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Container, FormControl } from "react-bootstrap"

const SearchBox = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate(`/`)
    }
  }
  return (
    <Form
      className="d-block d-lg-flex"
      id="search-form"
      onSubmit={submitHandler}>
      <FormControl
        type="search"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </Form>
  )
}

export default SearchBox
