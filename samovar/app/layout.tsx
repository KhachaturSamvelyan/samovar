import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ЧАЙ ОПТОМ ОТ ПРОИЗВОДИТЕЛЯ",
  description: "ЧАЙ ОПТОМ ОТ ПРОИЗВОДИТЕЛЯ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}