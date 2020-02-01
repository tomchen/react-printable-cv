import React, { lazy, Suspense } from 'react'

// import Form from "./js/components/Form"
const Form = lazy(() => import('./js/components/Form'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form />
    </Suspense>
  )
}

export default App
