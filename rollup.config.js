const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const image = require("@rollup/plugin-image");
const copy = require("rollup-plugin-copy");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true
      }),
      commonjs(),
      image(),
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: [
          "**/__tests__",
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.stories.tsx",
          "**/setupTests.ts"
        ]
      }),
      postcss(),
      copy({
        targets: [
          {
            src: "src/assets",
            dest: "dist"
          }
        ]
      })
    ]
  }
];
