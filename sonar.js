const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "d185976485048554195aabf31cf52d9cb689dfc5",
    options: {
      "sonar.projectName": "proyecto2",
      "sonar.projectDescription": "practica4",
      "sonar.sources": "./",
      "sonar.tests": "test",
      "sonar.javascript.coveragePlugin": "lcov",
      "sonar.javascript.lcov.reportPaths": "test/coverage/lcov.info",
    },
  },
  () => process.exit()
);
