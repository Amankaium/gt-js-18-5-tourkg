import { Link } from 'react-router-dom';


export default function TourItem({tourObject}) {
    return <li><Link to={`/tour/${tourObject.id}/`}>{tourObject.title}</Link></li>
}