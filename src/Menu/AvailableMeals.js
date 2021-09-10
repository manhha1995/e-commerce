import React, {useState, useEffect} from 'react'
import { connect, useSelector } from 'react-redux'

import Card from './Card/Card'

const AvailableMeals = () => {
    const [meal, setMeal] = useState('')
    const [loading, isLoading] = useState(true)
    const [httpError, setHttpError] = useState('')

    const counter = useSelector(state => state.counter);
    

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https')

            if(!response.ok) {
                throw new Error('error')
            }
        }
    })
}

const mapStateToProps = (state) => {
    return {
    counter: state.counter
    }
}
export default connect(mapStateToProps)(AvailableMeals)