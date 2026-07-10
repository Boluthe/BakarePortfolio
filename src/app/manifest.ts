import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tioluwani Bakare — Full Stack Engineer Portfolio",
    short_name: "Bakare Portfolio",
    description:
      "Interactive portfolio and enterprise banking/AI system architectures of Tioluwani Bakare, Full Stack Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#ef4444",
    icons: [
      {
        src: "/profile.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
