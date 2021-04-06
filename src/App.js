import { useState, useEffect } from 'react'
import './App.css';
import ArtDisplay from './ArtDisplay'
import ButtonBar from './ButtonBar'

function App() {
  let [data, setData] = useState({})
  let [objectId, setObjectId] = useState(12770)

  useEffect(() => {
    document.title='Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(response => response.json())
    .then(resdata => {
      setData(resdata)
    })
  }, [objectId])

  const handleIterate = (e) => {
    setObjectId(objectId + e.target.value)
  }

  const displayImage = () => {
    if(!data.primaryImage) {
      return (
        <h2>No Image!</h2>
      )
    }
    return (
      <ArtDisplay objectImg={data.primaryImage} title={data.title} />
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{'width': '100%'}}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
