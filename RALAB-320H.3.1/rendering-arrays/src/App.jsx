import { useState } from 'react'
import './App.css'
import learners from './data/Learner.js'
import Learners from './components/Learners'
import Form from './components/Form.jsx'

function App() {
  const [learnerList, setLearnerList] = useState(learners)


  function addNewLearner() {
    //TODO
    // setLearnerList()
  }

  return (
    <>
      <h1>Rendering Arrays</h1>
      <Learners learnerList={learnerList} />

      <Form addNewLearner={addNewLearner} />
    </>
  )
}

export default App
