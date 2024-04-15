import QueryClientProvider from "@/provider/query-client";
import Header from "./components/header";
import Footer from "./components/footer";
import ContactModal from "./components/ContactModal";
import useModalStore from "@/lib/store";
import { TANGERINE, CRIMSON, ROBOTO } from "./fonts";
import { Toaster } from "react-hot-toast";

import "./globals.css";

export const metadata = {
  title: "SS Jewels",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${CRIMSON.variable} ${ROBOTO.variable} ${TANGERINE.variable}`}>
        <QueryClientProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
          <useModalStore />
        </ QueryClientProvider>
      </body>
    </html>
  );
}
