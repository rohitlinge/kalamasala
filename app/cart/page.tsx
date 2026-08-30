import StoreShell from "@/components/StoreShell";
import CartView from "@/components/CartView";

export const metadata = {
  title: "Shopping Cart · Lata Special Kala Massala",
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
