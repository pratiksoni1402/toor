import { ITALIANNO, LORA, ANDIKA } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "SS Jewels",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ITALIANNO.variable} ${LORA.variable} ${ANDIKA.variable}`}>
        {children}
      </body>
    </html>
  );
}
