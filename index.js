const { spawn } = require('child_process');

const didSucceed = (code) => `${code}` === '0';

function npmInstall(_, config) {
	const spawnOptions = config.verbose ? {
		cwd: config.path,
		shell: true,
		stdio: 'inherit',
	} : {
		cwd: config.path
	};

	return new Promise((resolve, reject) => {
		const npmI = spawn('npm', ['install'], spawnOptions);

		npmI.on('close', (code) => {
			if (didSucceed(code)) {
				resolve(`npm install ran correctly`);
			} else {
				reject(`npm install exited with ${code}`);
			}
		});
	});
}

module.exports = function (plop) {
	plop.setDefaultInclude({ actionTypes: true });
	plop.setActionType('npmInstall', npmInstall);
};
