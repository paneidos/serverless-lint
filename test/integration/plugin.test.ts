import Serverless from "serverless";
import ServerlessLintPlugin from "../../src";

function buildSls(): Serverless {
    const sls = new Serverless({
        commands: [],
        options: {}
    });
    sls.pluginManager.addPlugin(ServerlessLintPlugin);
    return sls;
}

describe('ServerlessLintPlugin', () => {
    it('installs', () => {
        expect(buildSls()).not.toBeNull();
    })
})
