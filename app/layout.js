import "./globals.css";

export const metadata = {
  title: "Food Animation",
  description: "Simple food animation showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
