const args = process.argv.slice(2);

require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    outdir: "dist",
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    target: ["esnext"],
  })
  .then((result) => {
    console.log("Build done...");
  })
  .catch(() => process.exit(1));
