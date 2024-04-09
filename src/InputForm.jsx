import React from 'react'

function InputForm({submissions,setSubmissions,login,password,allWorkers,setlogin,setPassword,setErrorMsg}) {

    function nameChangeHandler (e) {
        e.preventDefault();
        setlogin(e.target.value)
      }
      function passwordChangeHandler (e) {
        e.preventDefault();
        setPassword(e.target.value);
      }
      
      function submitButton () {
        if(login === '') setErrorMsg('You didnt enter the login');
        if(password === '') setErrorMsg('You didnt enter the password')
        for(let i=0; i<allWorkers.length; i++){
          if(allWorkers[i].login !== login && allWorkers[i].password !== password){
            setErrorMsg('Login or Password is incorrect')
          }
        }
        allWorkers.filter(( _,i) => {
          if(login === allWorkers[i].login && 
            password !== allWorkers[i].password
            ) {
            setErrorMsg('Login or Password is incorrect');
          }
          else if(login !== allWorkers[i].login && 
            password === allWorkers[i].password
            ) {
            setErrorMsg('Login or Password is incorrect');
          }
          else if(allWorkers[i].login === login && 
            allWorkers[i].password === password) {
              setErrorMsg('')
              setSubmissions(submissions.concat({
                fullName: allWorkers[i].fullName,
                date: Date().toString().slice(0, 24)
              }));
          }
        })
        setTimeout(() => setErrorMsg(''), 2000);
        setlogin('');
        setPassword('');
      }

  return (
    <div>
        <div className='Name'>
            <input required value={login} onChange={nameChangeHandler} placeholder='Login'></input>
            <input required type='password' value={password} onChange={passwordChangeHandler} placeholder='Password'></input>
            <button onClick={submitButton}>Log In</button>
        </div>
    </div>
  )
}

export default InputForm