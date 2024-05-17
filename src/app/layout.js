import QueryClientProvider from "@/provider/query-client";
import Header from "./components/header";
import Footer from "./components/footer";
import { TANGERINE, CRIMSON, ROBOTO, LORA, HIND, KALAM } from "./fonts";
import { Toaster } from "react-hot-toast";

import "./globals.css";
export const metadata = {
  title: "SS Jewels",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${CRIMSON.variable} ${ROBOTO.variable} ${TANGERINE.variable} ${LORA.variable} ${HIND.variable} ${KALAM.variable}`} >
        <QueryClientProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ QueryClientProvider>
      </body>
    </html>
  );
}
