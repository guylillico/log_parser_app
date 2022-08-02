const IP_REGEX = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(.|$)){4}\b/
const URL_REGEX = /[^\s]+(?=\s+HTTP)/

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

  dataArray.forEach((item) => {
    const matchIp = item.match(IP_REGEX)
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

  dataArray.forEach((item) => {
    // Match response path using positive lookahead
    const matchUrl = item.match(URL_REGEX)
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
