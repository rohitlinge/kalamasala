import StoreShell from "@/components/StoreShell";
import OrderSection from "@/components/OrderSection";
import { razorpayKeyId } from "@/lib/env";

export const metadata = {
  title: "Checkout · Lata Special Kala Massala",
};

export default function CheckoutPage() {
  const razorpayKey = razorpayKeyId() ?? "";

  return (
    <StoreShell>
      <div className="mx-auto max-w-[1100px] px-3 pt-5 md:px-4">
        <h1 className="text-[22px] font-medium md:text-[28px]">Checkout</h1>
        <p className="text-[13px] text-[#565959]">Select a pack, add your Nagpur address, and pay.</p>
      </div>
      <OrderSection razorpayKey={razorpayKey} />
    </StoreShell>
  );
}
