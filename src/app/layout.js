
import "./globals.css";
export const metadata = {
  title: "Toor",
  description: "Where dreams sparkle and stories unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
          {children}
      </body>
    </html>
  );
}
