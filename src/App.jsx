import React from "react"
import FileUpload from "./components/FileUpload/FileUpload"
import FeaturedMetricsWrapper from "./components/FeaturedMetricsWrapper/FeaturedMetricsWrapper"
import FeaturedMetric from "./components/FeaturedMetric/FeaturedMetric"
import MetricsTable from "./components/MetricsTable/MetricsTable"
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
      <div className="container">
        {error && <p>{error}</p>}
        {!error && Object.keys(uniqueIps).length > 0 && (
          <React.Fragment>
            <FeaturedMetricsWrapper>
              <FeaturedMetric title="Total unique IP addresses">
                <span>{totalUniqueIps}</span>
              </FeaturedMetric>
              <FeaturedMetric title="Top 3 most active IP addresses">
                <ol>
                  {Object.keys(uniqueIps)
                    .splice(0, 3)
                    .map((key) => {
                      return <li key={key}>{uniqueIps[key]?.ip}</li>
                    })}
                </ol>
              </FeaturedMetric>
              <FeaturedMetric title="Top 3 most visited URLs">
                <ol>
                  {Object.keys(uniqueUrls)
                    .splice(0, 3)
                    .map((key) => {
                      return <li key={key}>{uniqueUrls[key]?.url}</li>
                    })}
                </ol>
              </FeaturedMetric>
            </FeaturedMetricsWrapper>
            <MetricsTable
              title="Requests per IP Address"
              metric="ip"
              header={["IP", "No. of Requests"]}
              body={uniqueIps}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default App
