import React from "react"
import EditingReview from "../components/review/EditingReview"
import { useParams } from "react-router"


export default function EditReview () {
    const params = useParams()
    return (
        <EditingReview title={params.title}/>
    )
}