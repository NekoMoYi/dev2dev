import sites, { ISite } from 'virtual:dev2dev-dataset'

const siteMap = new Map<string, ISite>(sites.map((x) => [x.host, x]))

function strip(url: string) {
  const i = url.indexOf('.')
  if (i === -1) return ''
  return url.substr(i + 1)
}

function match(url: string) {
  let result: ISite | undefined = undefined
  do {
    result = siteMap.get(url)
    url = strip(url)
  } while (url && !result)
  return result
}

function random(skip?: ISite) {
  for (;;) {
    const i = Math.floor(Math.random() * sites.length)
    const site = sites[i]
    if (!skip || site.host !== skip.host) return site
  }
}

export async function recommend(referrer: string) {
  const cur = match(referrer)
  const next = random(cur)
  return { cur, next }
}

export async function list() {
  return sites
}
