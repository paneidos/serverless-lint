import Serverless from "serverless";
import ServerlessLintPlugin from "../../src";

export function buildSls(service: any = undefined): Serverless {
    const sls = new Serverless({
        commands: [],
        options: {},
        service
    });
    sls.pluginManager.addPlugin(ServerlessLintPlugin);
    return sls;
}

describe('ServerlessLintPlugin', () => {
    it('installs', () => {
        expect(buildSls()).not.toBeNull();
    })

    it('registers the plugin', () => {
        const sls = buildSls()
        const plugin = sls.pluginManager.plugins[0] as ServerlessLintPlugin;
        expect(plugin).not.toBeNull()
    })

    it('runs checks on package', () => {
        const sls = buildSls()
        const plugin = sls.pluginManager.plugins[0] as ServerlessLintPlugin;
        expect(plugin.hooks['after:package:finalize']).not.toBeNull()
    })

    it('checks types', () => {
        const sls = buildSls({
            provider: {
                name: 'aws'
            }
        })
        sls.service.provider.compiledCloudFormationTemplate = {
            Resources: {
                InvalidType: {
                    Type: 'AWS:Invalid::Type'
                }
            }
        }
        const plugin = sls.pluginManager.plugins[0] as ServerlessLintPlugin;
        expect(() => plugin.performChecks()).toThrowError(/invalid type/)
    })
})
