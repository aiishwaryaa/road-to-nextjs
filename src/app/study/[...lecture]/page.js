//catch all segments of route

'use client'
export default function Lecture({params})  {
    console.log(params);
    return(
      <div>
      <h1>Day: {params.lecture[0]} </h1>
      <h1>Lecture: {params.lecture[1]} </h1>
      <h1>Topic: {params.lecture[2]} </h1>
      </div>
    )
}


