import React , {useEffect, useMemo, useState} from 'react'
const ReactHooks = () => {

    const [ count ,setcount ] = useState(0)
    // useEffect(() =>  {
    //     document.title = `clicks ${count}`
    // } , [count] )
     useEffect(() =>{
        document.title =`click ${count}
        `
     } , [count])
  return (
    <div>
        {/* <p> {count} </p>
        <button onClick={() => setcount(count + 1) } >click me</button>
        <button onClick={() => setcount(count - 1) } >click- </button> */}
        <p>{count}</p>
        <button onClick={() => setcount(count + 1)}>clickme</button>
        <button onClick={() => setcount(count - 1)}>clickme</button>
    </div>
  )
}

export default ReactHooks