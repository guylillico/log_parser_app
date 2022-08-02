import React from "react"
import { FileInput } from "./FileUpload.styled"

const FileUpload = ({ onLogFileChange }) => {
  return (
    <FileInput
      id="file-upload"
      data-testid="file-input"
      type="file"
      accept=".log"
      onChange={(e) => onLogFileChange(e.target.files)}
    />
  )
}

export default FileUpload
