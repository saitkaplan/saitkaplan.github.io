import { type RouteConfig, index, route } from "@react-router/dev/routes";

// One literal route per real page — never a catch-all dynamic segment. A
// dynamic segment also matches every unknown one-segment URL, /404 included,
// and the prerendered 404.html would render that page instead of
// not_found.tsx. Every unknown URL must reach the "*" route below.
export default [index("routes/home.tsx"), route("*", "routes/not_found.tsx")] satisfies RouteConfig;
