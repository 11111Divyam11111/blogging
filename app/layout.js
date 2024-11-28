import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogging",
  description: "Create and Read some of the best thoughts of the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider>

        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Navbar/>
          {children}
        </main>
      </Provider>

      </body>
    </html>
  );
}
