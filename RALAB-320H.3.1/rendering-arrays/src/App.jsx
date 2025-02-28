import { useState } from 'react'
import './App.css'
import learners from './data/Learner.js'
import Learners from './components/Learners'
import Form from './components/Form.jsx'

function App() {
  const [learnerList, setLearnerList] = useState(learners)


  function addNewLearner(newLearner) {
    const learnerWithId = {
      id: learnerList.length + 1,
      name: newLearner.name,
      bio: newLearner.bio,
      scores: [],
    };

    setLearnerList((prev) => [...prev, learnerWithId]);
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
