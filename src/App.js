import React, { lazy, Suspense } from 'react'
import './App.css'

// import Form from "./components/Form"
const Form = lazy(() => import('./components/Form'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form />
    </Suspense>
  )
}

export default App
