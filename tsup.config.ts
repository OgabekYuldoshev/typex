import { defineConfig } from "tsup";
import postcssPlugin from 'esbuild-postcss'

export default defineConfig({
  entry: ["./src/index.tsx"],
  format: ["esm", "cjs"],
  external: ["react"],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  treeshake:true,
  esbuildPlugins: [
    postcssPlugin(),
  ],
});
