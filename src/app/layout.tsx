import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CartProvider } from "@/context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <MaxWidthWrapper>
            {children}
            <ToastContainer />
          </MaxWidthWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
