const { exec, execSync } = require("child_process")

function version() {
	return process.versions.node || execSync("node --version").toString
}

module.exports = {
	version
}