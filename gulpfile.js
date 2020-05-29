const gulp = require("gulp");
const childProcess = require("child_process");

const commandOptions = {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
};

gulp.task("compile", (done) =>
{
    const command = process.cwd() + "/node_modules/.bin/tsc -p ./tsconfig.test.json";

    childProcess.spawnSync(command, commandOptions);

    done();
});

gulp.task("test:unit", (done) =>
{
    const mochaBinFile = process.cwd() + "/node_modules/.bin/_mocha";
    const nycBinFile = process.cwd() + "/node_modules/.bin/nyc";

    const command = nycBinFile + " --reporter=html --reporter=text-summary " + mochaBinFile + " --colors " + process.cwd() + "/dist/test/unit/**/*.js";

    childProcess.spawnSync(command, commandOptions);

    done();
});

gulp.task("default", gulp.series("compile", "test:unit"));
