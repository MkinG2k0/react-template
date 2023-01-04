import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
	schemaFile: 'https://link/to/swagger.json',
	apiFile: './BaseApi.ts',
	apiImport: 'baseApi',
	outputFile: './GenApi.ts',
	exportName: 'genApi',
	argSuffix: '_arg',
	responseSuffix: '_res',
	hooks: true,
	tag: true,
}

export default config
