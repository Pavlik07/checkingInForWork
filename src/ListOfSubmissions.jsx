import React from 'react'

function ListOfSubmissions({submissions, errorMsg}) {
    return (
        <div className='ListOfSubmissions'>
            {submissions[0]  ?
              <ol>
                {submissions.map(submission => 
                  <li key={submission.date}>
                    <span style={{color:'green'}}>{submission.fullName} </span><span style={{color:'black'}}>{submission.date}</span>
                  </li>
                )}
              </ol>
              : <h3>The list for Submitted People is empty for NOW</h3>
            }
            <span style={{color:'red'}}>{errorMsg}</span>
        </div>
    )
}

export default ListOfSubmissions