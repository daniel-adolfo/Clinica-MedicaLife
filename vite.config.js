import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/Clinica-MedicaLife",
    plugins: [],
    resolve: {
        /*something*/
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./index.html"),
            },
        },
    },
});