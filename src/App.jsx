import React from "react"
import FileUpload from "./components/FileUpload/FileUpload"

import { parseLogData } from "./util/logParser"
import "./App.css"

const App = () => {
  const [error, setError] = React.useState("")

  const handleUploadFileChange = async (files) => {
    if (!files) {
      setError("Error: Something went wrong uploading your log file.")
      return
    }
    const uploadFileData = await new Response(files[0]).text()
    parseLogData(uploadFileData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Log parser app</h1>
      </header>
      <p>Select a log file to view metrics</p>
      <FileUpload onLogFileChange={handleUploadFileChange} />

      {error && <p>{error}</p>}
    </div>
  )
}

export default App
