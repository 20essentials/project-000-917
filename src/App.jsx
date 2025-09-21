import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider, Box } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <Box
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: "url(preview/n917.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </MantineProvider>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(<App />);
