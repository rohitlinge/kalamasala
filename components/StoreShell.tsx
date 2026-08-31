import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import Footer from "@/components/Footer";
import AddedToCart from "@/components/AddedToCart";

export default function StoreShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SubNav />
      <AddedToCart />
      <main className="min-w-0 max-w-full overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
