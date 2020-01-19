import React, { Component, lazy, Suspense } from 'react'

// import Form from "./js/components/Form"
const Form = lazy(() => import("./js/components/Form"));

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
          <Form />
      </Suspense>
    )
  }
}
