declare module 'virtual:dev2dev-dataset' {
  export interface ISite {
    host: string
    name: string
    owner: string
    logo: string
  }
  const sites: ISite[]
  export default sites
}
