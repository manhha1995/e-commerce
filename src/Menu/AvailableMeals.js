import React, {useState, useEffect} from 'react'
// import { connect, useSelector } from 'react-redux'

import Card from './Card/Card'
import MealItem from './MealItem/MealItem'
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
    const [meals, setMeals] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState('')

    // const counter = useSelector(state => state.counter);
    
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://')

            if(!response.ok) {
                throw new Error('error')
            }

            const responseData = await response.json()

            const loadedMeals = []

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }

            setMeals(loadedMeals);
            setIsLoading(false)
        }

        fetchMeals().catch(error => {
            setIsLoading(false)
            setHttpError(error.errMessage)
        })
    }, [])

    if (isLoading) {
        return (
            <section className={classes.MealsIsLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }

    const mealsList = meals.map(meal => {
        <MealItem
        key={meal.id}
        description={meal.description}
        name={meal.name}
        price={meal.price}
        />
    })

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

// const mapStateToProps = (state) => {
//     return {
//     counter: state.counter
//     }
// }
// export default connect(mapStateToProps)(AvailableMeals)
export default AvailableMeals