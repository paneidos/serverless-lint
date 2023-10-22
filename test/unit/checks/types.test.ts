import checkTypes from "../../../src/checks/types";
import {CloudformationTemplate} from "../../../src/template";

describe('Type checker', () => {
    it('rejects types with single colon', () => {
        const template = new CloudformationTemplate({
            Resources: {
                InvalidType: {
                    Type: 'AWS:Oops::NoDoubleColon'
                }
            }
        })
        expect(() => checkTypes(template)).toThrowError("Resource InvalidType has invalid type \"AWS:Oops::NoDoubleColon\"")
    })
})
