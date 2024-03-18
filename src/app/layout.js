import QueryClientProvider from "@/provider/query-client";
import Header from "./components/header";
import Footer from "./components/footer";

import { ITALIANNO, LORA, ANDIKA, TANGERINE } from "./fonts";

import "./globals.css";

export const metadata = {
  title: "SS Jewels",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
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
