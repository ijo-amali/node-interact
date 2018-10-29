const { exec, execSync } = require("child_process")

function version() {
	return execSync("node --version")
}

module.exports = {
	version
}