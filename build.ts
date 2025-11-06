import tailwind from "bun-plugin-tailwind"

await Bun.build({
  plugins: [tailwind],
  outdir: "dist",
  entrypoints: ["src/index.html"],
  minify: true
})