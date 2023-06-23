import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    // vanilla JS function to enable more key/value pairs
    // it only works with the Links
    function genNewSearchParamString(key, value) {
        const searchP = new URLSearchParams(searchParams)
        if (value === null) {
            searchP.delete(key)
        } else {
            searchP.set(key, value)
        }
        console.log(searchP.toString())
    }
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className='van-list-filter-buttons'>
                <button onClick={genNewSearchParamString('type', 'simple')}>simple</button>
                <button onClick={genNewSearchParamString('type', 'luxury')}>luxury</button>
                <button onClick={genNewSearchParamString('type', 'rugged')}>rugged</button>
                <button onClick={genNewSearchParamString('type', null)}>Clear</button>
                <Link
                    to={genNewSearchParamString('type', 'simple')}
                    className='van-type simple'
                >Simple</Link>
                <Link
                    to={genNewSearchParamString('type', 'rugged')}
                    className='van-type rugged'
                >rugged</Link>
                <Link
                    to={genNewSearchParamString('type', 'luxury')}
                    className='van-type luxury'>
                    luxury</Link>
                <Link
                    to={genNewSearchParamString('type', null)}
                    className='van-type clear-filters'
                >Clear</Link>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
