import mothershipConfig from "@wearemothership/eslint-config";

export default [
	...mothershipConfig,
	{
		ignores: ["test/js/claygl.js"]
	}
];
