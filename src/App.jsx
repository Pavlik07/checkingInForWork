import React from 'react'
import { useState } from 'react'
import ListOfSubmissions from './ListOfSubmissions';
import InputForm from './InputForm';

function App() {
  const [submissions, setSubmissions] = useState([]);
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [allWorkers, setAllWorkers] = useState([
    {
      fullName: 'Alex Tkachenko',
      login: 'alex',
      password: 'a7'
    },
    {
      fullName: 'Andrei Tkach',
      login: 'andre',
      password: 'b7'
    },
    {
      fullName: 'Stas Sovolev',
      login: 'sta',
      password: 'c7'
    },
    {
      fullName: 'Ura Prizenskiy',
      login: 'ur',
      password: 'd7'
    },
  ])

  return (
    <div>
      <InputForm login={login} password={password} allWorkers={allWorkers} setErrorMsg={setErrorMsg} submissions={submissions} setSubmissions={setSubmissions} setlogin={setlogin} setPassword={setPassword} setAllWorkers={setAllWorkers}/>
      <ListOfSubmissions submissions={submissions} errorMsg={errorMsg}/>
    </div>
  )
}

export default App