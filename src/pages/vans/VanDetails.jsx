import React from "react"
import { useParams, useLocation, Link } from "react-router-dom"

export default function VanDetails() {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    // console.log(params)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || '';

    return (
        <div className="van-detail-container">
            <Link to={`..${search}`} relative='path' className='back-button'
            >&larr; <span>Back to vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}