import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setdata(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  })


  return (
    <>
      <div>
        <p>{data.length}</p>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
