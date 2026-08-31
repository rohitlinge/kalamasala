const links = [
  { href: "/#product", label: "Shop" },
  { href: "/#deals", label: "Deals" },
  { href: "/#ingredients", label: "Ingredients", short: "Spices" },
  { href: "/#craft", label: "How it's made", hideOnMobile: true },
  { href: "/#use", label: "How to use", short: "Use" },
  { href: "/#store", label: "Storage", hideOnMobile: true },
  { href: "/cart", label: "Cart" },
];

export default function SubNav() {
  return (
    <nav className="bg-nav-2 text-white">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-0.5 px-1 py-1 md:flex-nowrap md:overflow-x-auto md:px-3">
        {links.map((l) => (
          <a
            key={l.href + l.label}
            href={l.href}
            className={`nav-link-amz ${l.hideOnMobile ? "max-md:hidden" : ""}`}
          >
            <span className="md:hidden">{l.short ?? l.label}</span>
            <span className="hidden md:inline">{l.label}</span>
          </a>
        ))}
        <span className="ml-auto hidden shrink-0 px-2 text-[13px] font-bold text-[#febd69] lg:block">
          Nagpur only · Arrives in 6 days
        </span>
      </div>
    </nav>
  );
}
