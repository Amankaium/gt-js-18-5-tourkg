import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function TourDetail() {
    const [tour, setTour] = useState({})

    const { id } = useParams()

    function getTour() {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => setTour(response.data))
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