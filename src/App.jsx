import React from "react"
import FileUpload from "./components/FileUpload/FileUpload"

import { parseLogData } from "./util/logParser"
import "./App.css"

const App = () => {
  const [error, setError] = React.useState("")
  const [uniqueIps, setUniqueIps] = React.useState({})
  const [totalUniqueIps, setTotalUniqueIps] = React.useState(0)
  const [uniqueUrls, setUniqueUrls] = React.useState({})

  const handleUploadFileChange = async (files) => {
    if (!files) {
      setError("Error: Something went wrong uploading your log file.")
      return
    }
    const uploadFileData = await new Response(files[0]).text()
    const { uniqueIps, uniqueUrls } = parseLogData(uploadFileData)
    console.log(uniqueIps)
    setUniqueIps(uniqueIps)
    setTotalUniqueIps(Object.keys(uniqueIps).length)
    setUniqueUrls(uniqueUrls)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Log parser app</h1>
      </header>
      <p>Select a log file to view metrics</p>
      <FileUpload onLogFileChange={handleUploadFileChange} />

      {error && <p>{error}</p>}
      {!error && Object.keys(uniqueIps).length > 0 && (
        <div>
          <p>Total unique IP addresses</p>
          <span>{totalUniqueIps}</span>
          <p>Top 3 most active IP addresses</p>
          <ol>
            {Object.keys(uniqueIps)
              .splice(0, 3)
              .map((key) => {
                return <li key={key}>{uniqueIps[key]?.ip}</li>
              })}
          </ol>
          <p>Top 3 most visited URLs</p>
          <ol>
            {Object.keys(uniqueUrls)
              .splice(0, 3)
              .map((key) => {
                return <li key={key}>{uniqueUrls[key]?.url}</li>
              })}
          </ol>
        </div>
      )}
    </div>
  )
}

export default App
