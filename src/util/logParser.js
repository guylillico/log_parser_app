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

export const parseLogData = (file) => {
  const fileData = file.split("\n")
  const uniqueIps = generateUniqueIpsObj(fileData)
  console.log(uniqueIps)
}
