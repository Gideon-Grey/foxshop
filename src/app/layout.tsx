import "./styles/global.scss";
import { StoreProvider } from "./providers/StoreProvider";
import { CartDrawer } from "@/widgets/cart-drawer/ui/CartDrawer";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";

export const metadata = {
  title: "Fox-shop",
  description: "Marketplace template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          <Header />

          <CartDrawer />

          <main style={{ minHeight: "80vh", paddingTop: "140px" }}>
            {children}
          </main>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
