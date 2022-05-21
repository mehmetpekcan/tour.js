const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

const args = process.argv.slice(2);

const parseArgs = (args) =>
  Object.fromEntries(args.map((arg) => arg.split('=')));

const { watch = false } = parseArgs(args);

esbuild
  .build({
    entryPoints: ['src/index.js'],
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    minify: true,
    format: 'cjs',
    target: ['esnext'],
    watch: Boolean(watch),
    plugins: [sassPlugin()],
  })
  .then((result) => {
    if (Boolean(watch)) {
      console.log('Watching for your changes...');
    } else {
      console.log('Build done...');
    }
  })
  .catch(() => process.exit(1));
