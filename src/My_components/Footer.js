import React from 'react'

function footer() {
    let footerstyle={
        position:"absolute",
        height:"35vh",
        width:"100%",
        backgroundColor:"rgb(3,11,34)",
        border:"2px solid  rgb(3,15,30)"
    }
    return (
        
        <footer className=" text-light" style={footerstyle}>
            <p className="text-center my-3">
           <b><i>Copyrights-2021 @ MyTodo'S.COM</i></b>
            </p>
            <p className="text-center">Desktop app
Mobile app  Plan Security
Features About FAQS<br/> Press Releases Media Kit Events Desktop app Mobile app Plan<br/> Security Features</p>
        </footer>
    )
}

export default footer
