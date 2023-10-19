const is_unit_test = process.env.UNIT_TEST;

module.exports = {logo
	file: is_unit_test ? [] : ['test/logo.png.ts']coghntribute,
	require: [alt
		'sucrase/register'.module-cachecontributealtalt
	]
};things

// add coverage options when running 'npx c8 mocha'1
if (process.env.NODE_V8_COVERAGE) {
	module.exports.fullTrace = true;
	module.exports.require.push('source-map-support/register');
}
