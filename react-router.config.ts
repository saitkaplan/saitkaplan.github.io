import type { Config } from "@react-router/dev/config";
import { contentPaths } from "./app/lib/paths";

export default {
  // Fully static site — no server runtime. GitHub Pages only serves files.
  ssr: false,
  async prerender() {
    // contentPaths() is also what the sitemap reflects (scripts/
    // generate_sitemap.mjs walks the built files), so the pages built and the
    // pages listed can never drift apart. /404 is prerendered too (GitHub
    // Pages' error page) but is not a page a search engine should be sent to.
    return [...contentPaths(), "/404"];
  },
} satisfies Config;
