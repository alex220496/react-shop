import React, { useState } from 'react'

export const Testimonials = () => {

    const arrTestimonials = [
        {name:"Jack",text:"Отличная мышь, очень доволен что взял, даже боюсь делать лишние клики лол, чтобы ничего не случилось, но сама по себе отличная, клик оптический, звук клика очень оприятный по сравнению с теми мышками что у меня были до неё"},
        {name:"Olja",text:"Мне она очень понравилась за свою форму и клик" }
    ]

    const [testimonials,setTestimonials] = useState(arrTestimonials)
    const [newTestimonials,setnewTestimonial] = useState({
        name:"",
        text:"",
    })

    const handleNameChange = (e) => (
        setnewTestimonial(value => ({
            ...value,
            name:e.target.value
        }))
    )
    const handleTextChange = (e) => (
        setnewTestimonial(value => ({
            ...value,
            text:e.target.value
        }))
    )
    
    
    const onSend = (e) => {
        e.preventDefault();

        setTestimonials(value => {
            return [...value,newTestimonials]
        })
           
        setnewTestimonial({
            name: "",
            text: "",
        })
           
    }
 
    return (
        <>
            <h1 className="page-title">Testmonials</h1>
            {
                testimonials.map((item,i) => 
                    <div key={i} style={{background:"rgba(255,255,255,0.75)",padding:"10px"}}>
                        <div style={{marginBottom:"15px"}}>Name: {item.name}</div>
                        <div style={{marginBottom:"15px"}}>Description: {item.text}</div>
                    </div>
                )
            }

            <form style={{marginTop:"30px"}} onSubmit={onSend}> 
                <div>
                   <input type="text"
                   placeholder="Your name"
                   value={newTestimonials.name}
                    onChange={handleNameChange}
                   /> 
                </div>
                <div>
                    <textarea 
                    cols="100" 
                    rows="10" 
                    placeholder="Your text"
                    value={newTestimonials.text}
                    onChange={handleTextChange}
                    ></textarea>
                </div>
                <button>Leav a comment</button>
            </form>
        </>
    )
}