const { exec, execSync } = require("child_process");

function version() {
	return execSync("npm --version");
}

function search(arg) {
	return execSync("npm search " + arg)
}

function betterVersion() {
	exec("npm --version", (err, out, stderr) => {
		if (err || stderr) throw err

	})
}

module.exports = {
	version, betterVersion, search
}