import Plugin from "serverless/classes/Plugin";
import Serverless from "serverless";
import Aws from "serverless/aws";
import {CloudformationTemplate} from "./template";
import checkTypes from "./checks/types";

class ServerlessLintPlugin implements Plugin {
    commands: Plugin.Commands | undefined;
    provider: Aws;
    hooks: Plugin.Hooks;
    variableResolvers: Plugin.VariableResolvers | undefined;
    serverless: Serverless

    constructor(serverless: Serverless, options: Serverless.Options, { log }: Plugin.Logging) {
        this.serverless = serverless;
        this.provider = serverless.getProvider('aws')
        this.hooks = {
            'after:package:finalize': this.performChecks.bind(this)
        };
    }

    performChecks() {
        const template = new CloudformationTemplate(this.serverless.service.provider.compiledCloudFormationTemplate)
        const checks = this.getEnabledChecks()
        for (const check of checks) {
            check(template)
        }
    }

    getEnabledChecks() {
        return [
            checkTypes
        ]
    }
}

export = ServerlessLintPlugin;
