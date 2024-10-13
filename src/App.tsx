import { Route, Routes } from "react-router-dom"
import HomePage from "@/views/HomePage"
import React from "react"
import NotFoundPage from "@/views/NotFoundPage"

function App(): React.ReactElement {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      {/* <Route path="/about" element/>
      <Route path="/teams" element/>
      <Route path="/faq" element/>
      <Route path="/blogs" element/> */}
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App
