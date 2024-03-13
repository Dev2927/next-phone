"use client"
import { useEffect } from "react"
const About = () => {

  const getSes = async () => {
    const req = await fetch("api/")
    const data = await req.json();
    console.log(data);    
  }

  useEffect(() => {
    getSes()
  }, [])
  

    return (
      <h1>ABOUT</h1>
    )
  }
  export default About