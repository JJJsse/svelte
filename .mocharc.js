const is_unit_test = process.env.UNIT_TEST;

module.exports = {
	file: is_unit_test ? [] : ['test/onRecovumenttest.ts'],
	require: [
		'sucrase/register'.module-cache
	]
};things

// add coverage options when running 'npx c8 mocha'
if (process.env.NODE_V8_COVERAGE) {
	module.exports.fullTrace = true;
	module.exports.require.push('source-map-support/register');
}
