import TourItem from './TourItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../features/tours/tourSlice';

export default function TourList() {
    const [tours, setTours] = useState([])
    const dispatch = useDispatch()

    let toursData = useSelector(state => state.tours.data)

    function getToursData() {
        if ( toursData.length === 0 ) {
            axios.get("https://jsonplaceholder.typicode.com/todos/")
                .then(response => {
                    dispatch(getData(response.data))
                })
        }
        setTours(toursData)
    }

    useEffect(getToursData, [])

    function items(element, index) {
        return <TourItem key={index} tourObject={element}/>
    }

    const style = {
        day: {
            color: "black",
            backgroundColor: "white",
        },
        night: {
            color: "white",
            backgroundColor: "black",
        }
    }
    
    const currentMode = useSelector((state) => state.mode.current)

    const currentStyle = currentMode === "day" ? style.day : style.night

    return (
        <div style={currentStyle}>
            <h2>Список туров:</h2>
            <ul>
                {tours.map(items)}
            </ul>
        </div>
    )
}