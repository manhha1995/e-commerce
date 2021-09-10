/* eslint-disable react/prop-types */
import React, { useCallback, useRef } from 'react'
import classes from './Navigation.module.css'

const Navigation = (props) => {
    const navRef = useRef()
    
    const submitHandler = useCallback((e) => {
        e.event.preventDefault()

        const meal = {
            title: navRef.current.value,
        }
        props.onAddMeals(meal)
    })
    return (
        <>
        <form className={navRef} onSubmit={submitHandler}>
            <input type={props.type || "text"} />
             <button className= {classes.button} type={props.type || "button"}>
            {props.children} 
            </button>
        </form>
        </>
    )
}

export default Navigation