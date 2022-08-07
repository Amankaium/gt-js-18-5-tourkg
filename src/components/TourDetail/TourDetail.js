import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";


export default function TourDetail() {
    const [tour, setTour] = useState({})
    const tours = useSelector(state => state.tours.data)
    const { id } = useParams()

    function getTour() {
        const ourTour = tours.find(item => Number(item.id)===Number(id))
        setTour(ourTour)
    }

    useEffect(getTour, [])

    return (
        <div>
            Инфо по туру {id}:
            <h2>id: {tour.id}</h2>
            <h2>Название: {tour.title}</h2>
        </div>
    )
}