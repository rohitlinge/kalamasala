import type { Metadata } from "next";
import StoreShell from "@/components/StoreShell";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Your Lata Special Kala Massala cart. Nagpur delivery only.",
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <StoreShell>
      <div className="mx-auto max-w-[1500px] px-3 py-5 md:px-4">
        <CartView />
      </div>
    </StoreShell>
  );
}
