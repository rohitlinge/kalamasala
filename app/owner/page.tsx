import StoreShell from "@/components/StoreShell";
import Reviews from "@/components/Reviews";
import { SocialIcons } from "@/components/SocialDock";
import { owner } from "@/lib/content";

export const metadata = {
  title: "About Lata Linge · Lata Special Kala Massala",
  description:
    "Lata Linge has roasted homemade Kala Massala in Nagpur for about 9 years. Now her kitchen packets are online.",
};

export default function OwnerPage() {
  return (
    <StoreShell>
      <div className="mx-auto max-w-[900px] px-3 py-5 md:px-4 md:py-8">
        <div className="amz-card p-4 md:p-8">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#565959]">About the owner</p>
          <div className="mt-4 flex flex-col items-center text-center">
            <img
              src={owner.photo}
              alt={owner.name}
              className="h-52 w-52 rounded-full object-cover object-top shadow-md md:h-64 md:w-64"
            />
            <h1 className="mt-4 text-[26px] font-medium md:text-[32px]">{owner.name}</h1>
            <p className="mt-1 text-[13px] text-[#565959]">Nagpur kitchen · Lata Special</p>
            <SocialIcons className="mt-4 justify-center" />
          </div>
          <p className="font-hindi mx-auto mt-6 max-w-xl text-center text-[16px] leading-7 text-[#0f1111]">{owner.bioHi}</p>
          <p className="mx-auto mt-3 max-w-xl text-center text-[14px] leading-6 text-[#565959]">{owner.bio}</p>
        </div>
      </div>
      <Reviews showFirstProduct />
    </StoreShell>
  );
}
