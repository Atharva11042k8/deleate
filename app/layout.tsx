
export const metadata = { title: "Atharva Hadke - Danger Programmer" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-textLight">{children}</body>
    </html>
  );
}
