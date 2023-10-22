import {CloudformationTemplate} from "../template";


const REGEX_TYPE = /^([a-zA-Z][a-zA-Z0-9]+)(::([a-zA-Z][a-zA-Z0-9]+))+$/

export default function checkTypes(template: CloudformationTemplate): void {
    for (const [name, resource] of Object.entries(template.template.Resources)) {
        if (!resource.Type.match(REGEX_TYPE)) {
            throw new Error(`Resource ${name} has invalid type "${resource.Type}"`)
        }
    }
}
