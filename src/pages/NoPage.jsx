import React from 'react'
import {useRouteError} from "react-router-dom"

export default function NoPage() {
  const error = useRouteError();
  return (
    <div>NoPage
        <h1>Error 404</h1>
        <p>{error.statusText || error.message}</p>
    </div>
  )
}
