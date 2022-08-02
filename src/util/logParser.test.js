import { parseLogData } from "./logParser"

test("parseLogData function returns ordered uniqueIps object", () => {
  const mockLogData = `177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"
168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
168.41.191.40 - - [09/Jul/2018:10:10:38 +0200] "GET http://example.net/blog/category/meta/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) RockMelt/0.9.58.494 Chrome/11.0.696.71 Safari/534.24"
177.71.128.21 - - [10/Jul/2018:22:22:08 +0200] "GET /blog/2018/08/survey-your-opinion-matters/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"
168.41.191.40 - - [09/Jul/2018:10:12:03 +0200] "GET /docs/manage-websites/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20100101 Firefox/6.0"
168.41.191.34 - - [10/Jul/2018:22:01:17 +0200] "GET /faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"
177.71.128.21 - - [10/Jul/2018:22:21:03 +0200] "GET /docs/manage-websites/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0"`

  const { uniqueIps } = parseLogData(mockLogData)

  expect(uniqueIps).toEqual({
    0: {
      count: 3,
      ip: "177.71.128.21",
    },
    1: {
      count: 3,
      ip: "168.41.191.40",
    },
    2: {
      count: 1,
      ip: "168.41.191.34",
    },
  })
})
