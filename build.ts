await Bun.build({
  entrypoints: ["./src/index.html"],
  outdir: "./dist",
  minify: true,
});