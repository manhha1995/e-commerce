import React, {Component, useState, useEffect, useReducer } from 'react'
import classes from './Menu.module.css'

const mealReducer = (state, action) => {
    if (action.type === 'ADD') {
        return {value: action.value, errMessage: null}
    }
}

if (!mealReducer) {
    throw new Error('invalid')
}
const Menu = () => {
    const [isMenu, setIsMenu] = useState(false)
    const [menu, dispatchMenu] = useReducer(mealReducer, {
        value: '',
        errMessage: null,
    })
    const menuHandler = () => {
        dispatchMenu({type: 'ADD'})
    }
    useEffect(() => {
        setTimeout(() => {
            console.log('Checking menu')
        }, 200)
        clearTimeout()
    }, [])
    
    const onAddMeals = (e) => {
        e.event.preventDefault()
        if (!isMenu) {
            setIsMenu(true)
        }
    }

   const menuClass =  `${classes.menu} ${menu.value ? '' : classes.invalid}`
     return (
        <div className={menuClass}>
            {menuHandler}
        </div>
    )
}


class MenuDetails extends Component {
    render() {
        return <h2>Details</h2>
    }
}

export default {Menu, MenuDetails};