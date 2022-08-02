export const orderByCount = (obj) => {
  const orderedItemsObj = {}
  const arr = Object.keys(obj).map((key) => obj[key])
  arr.sort((a, b) => {
    return b.count - a.count
  })
  arr.forEach((item, index) => (orderedItemsObj[index] = { ...item }))
  return orderedItemsObj
}

export const generateUniqueIpsObj = (dataArray) => {
  const uniqueIpsObj = {}
  const ipRegex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(.|$)){4}\b/

  dataArray.forEach((item) => {
    console.log(item)
    const matchIp = item.match(ipRegex)
    const ip = matchIp && matchIp.length ? matchIp[0] : null

    if (!ip || ip === "") return
    if (uniqueIpsObj[ip]) {
      uniqueIpsObj[ip]["count"]++
    } else {
      uniqueIpsObj[ip] = {
        count: 1,
        ip: ip,
      }
    }
  })

  return orderByCount(uniqueIpsObj)
}

export const generateUniqueUrlsObj = (dataArray) => {
  const uniqueUrlsObj = {}
  // Match response path using positive lookahead
  const urlRegex = /[^\s]+(?=\s+HTTP)/
  dataArray.forEach((item) => {
    const matchUrl = item.match(urlRegex)
    let url = matchUrl && matchUrl.length ? matchUrl[0].replace("http://example.net", "") : null

    if (!url) return
    if (uniqueUrlsObj[url]) {
      uniqueUrlsObj[url]["count"]++
    } else {
      uniqueUrlsObj[url] = {
        count: 1,
        url: url,
      }
    }
  })
  return orderByCount(uniqueUrlsObj)
}

export const parseLogData = (file) => {
  const fileData = file.split("\n")
  const uniqueIps = generateUniqueIpsObj(fileData)
  const uniqueUrls = generateUniqueUrlsObj(fileData)

  console.log(uniqueUrls)

  return {
    uniqueIps,
    uniqueUrls,
  }
}

export const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
