import { ITALIANNO, LORA, ANDIKA, TANGERINE } from "./fonts";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { QueryClient } from "@tanstack/react-query";
import QueryClientProvider from "@/provider/query-client";
export const metadata = {
  title: "SS Jewels",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={`${LORA.variable} ${ANDIKA.variable} ${TANGERINE.variable}`}>
        <QueryClientProvider>
          <Header />
          {children}
          <Footer />
        </ QueryClientProvider>
      </body>
    </html>
  );
}
