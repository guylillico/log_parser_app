import "./App.css"

const App = () => {
  const handleUploadFileChange = async (files) => {
    const uploadFileData = await new Response(files[0]).text()

    console.log(uploadFileData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Log parser app</h1>
      </header>

      <input id="file-upload" type="file" accept=".log" onChange={(e) => handleUploadFileChange(e.target.files)} />
    </div>
  )
}

export default App
