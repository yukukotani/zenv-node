let GOARCH_MAP = {
  arm64: "arm64",
  x64: "amd64",
};

let GOOS_MAP = {
  darwin: "darwin",
  linux: "linux",
};

const arch = GOARCH_MAP[process.arch];
const os = GOOS_MAP[process.platform];

if (!arch || !os) {
  console.error("Unsupported platform");
  process.exit(1);
}

const binPath = require.resolve(`@zenv-node/${os}-${arch}`);

console.log(binPath);

const { execSync } = require("child_process");
const res = execSync(`cp ${binPath} bin/zenv`);

// console.log(String(res));
