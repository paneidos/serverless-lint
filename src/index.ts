import Plugin from "serverless/classes/Plugin";
import Serverless from "serverless";

class ServerlessLintPlugin implements Plugin {
    commands: Plugin.Commands | undefined;
    hooks: Plugin.Hooks;
    variableResolvers: Plugin.VariableResolvers | undefined;
    serverless: Serverless

    constructor(serverless: Serverless, options: Serverless.Options, { log }: Plugin.Logging) {
        this.serverless = serverless;
        this.hooks = {};
    }
}

export = ServerlessLintPlugin;
