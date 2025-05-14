import React from 'react'

const Project = async({params} : { params: { all:string[]}}) => {
  const {all} = await params

  return (
    <div>
      <h1>
        project {all}
      </h1>
      <br/>
      {all.map((p)=>(
        <li key ={p} > {p}</li>
      ))}
    </div>
  )
}

export default Project