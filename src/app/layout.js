import { ITALIANNO, LORA, ANDIKA } from "./fonts";
import "./globals.css";
import Header from "./components/header";
export const metadata = {
  title: "SS Jewels",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ITALIANNO.variable} ${LORA.variable} ${ANDIKA.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
