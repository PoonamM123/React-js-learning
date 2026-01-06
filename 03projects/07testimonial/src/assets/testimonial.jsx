import React, { useState } from "react";

const Testimonials=()=>{
    const [index, setIndex]=useState(0)
    const testimonialsList=[
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ]; 
  const previous=()=>{
    setIndex((index+testimonialsList.length-1)% testimonialsList.length)
  }
  const next=()=>{
    setIndex((index+1) % testimonialsList.length)
  }
  return <>
        <ul>
            <li>{testimonialsList[index].quote}</li>
            <li>{testimonialsList[index].author}</li>
        </ul>
        <button onClick={previous}> previous </button>
        <button onClick={next}> Next </button>
  </>
}

export default Testimonials