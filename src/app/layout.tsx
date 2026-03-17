import type { LayoutProps } from "@/types/globals.type";
import "@/css/global.css"
import { Sale } from "@/layouts/sale.layout";
import { Navigation } from "@/layouts/navigation.layout";
import { Footer } from "@/layouts/footer.layout";

const AppLayout = async ({ children }: LayoutProps) => {
  return (
    <html lang="ru" translate="no" className="scroll-smooth min-h-screen">
      <body className="min-h-screen flex flex-col justify-between">
        <header className="shrink-0"><Sale /></header>

        <Navigation />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default AppLayout;
