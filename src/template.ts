import {RawTemplate} from "./types/cloudformation";

export class CloudformationTemplate {
    template: RawTemplate

    constructor(template: RawTemplate) {
        this.template = template;
    }
}
