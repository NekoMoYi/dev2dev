import fs from 'fs-extra'
import path from 'path'
import yaml from 'yaml'
import Ajv from 'ajv'

const ROOT = path.resolve(__dirname, '..')

const ajv = new Ajv()
const validator = ajv.compile(
  fs.readJSONSync(path.join(ROOT, 'schema', 'site.json'))
)

const DATA_DIR = path.join(ROOT, 'data')

const sites = []

const files = fs.readdirSync(DATA_DIR).filter((x) => x.endsWith('.yml'))
for (const file of files) {
  const content = fs.readFileSync(path.join(DATA_DIR, file)).toString()
  try {
    const parsed = yaml.parse(content)
    const valid = validator(parsed)
    if (!valid) {
      throw new Error(validator.errors.map((x) => x.message).join(','))
    }
    sites.push(parsed)
  } catch (e) {
    console.warn(`Site config ${file} is invalid: ${e.message}`)
  }
}

const script = `export default ${JSON.stringify(sites)}`

export default function datasetPlugin() {
  const virtualFileId = 'virtual:dev2dev-dataset'

  return {
    name: 'dev2dev-dataset',
    resolveId(id) {
      if (id === virtualFileId) return virtualFileId
    },
    load(id) {
      if (id === virtualFileId) return script
    }
  }
}
