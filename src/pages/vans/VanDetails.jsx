import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetails() {
    const params = useParams()
    // console.log(params)
    return (
        <h1>Hello van details</h1>
    )
}