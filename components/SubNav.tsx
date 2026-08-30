const links = [
  { href: "/#deals", label: "All" },
  { href: "/#product", label: "Kala Massala" },
  { href: "/#deals", label: "Today's Deals" },
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#craft", label: "How it's made" },
  { href: "/#compare", label: "Why homemade" },
  { href: "/#use", label: "How to use" },
  { href: "/#store", label: "Storage" },
  { href: "/cart", label: "Cart" },
];

export default function SubNav() {
  return (
    <nav className="bg-nav-2 text-white">
      <div className="mx-auto flex max-w-[1500px] items-center gap-1 overflow-x-auto px-2 py-1.5 md:px-3">
        {links.map((l) => (
          <a key={l.href + l.label} href={l.href} className="nav-link-amz">
            {l.label}
          </a>
        ))}
        <span className="ml-auto hidden px-2 text-[13px] font-bold text-[#febd69] lg:block">
          Nagpur only · Arrives in 6 days
        </span>
      </div>
    </nav>
  );
}
