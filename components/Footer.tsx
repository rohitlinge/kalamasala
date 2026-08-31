export default function Footer() {
  return (
    <footer className="mt-4 text-white md:mt-6">
      <a href="#top" className="block bg-nav-3 py-4 text-center text-[13px] hover:bg-[#485769]">
        Back to top
      </a>
      <div className="bg-nav-2 px-4 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-[1100px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[16px] font-bold">Get to Know Us</p>
            <ul className="mt-3 space-y-2 text-[13px] text-[#ddd]">
              <li>
                <a href="/#masala" className="hover:underline">
                  About Lata Special
                </a>
              </li>
              <li>
                <a href="/#craft" className="hover:underline">
                  How we roast
                </a>
              </li>
              <li>
                <a href="/#ingredients" className="hover:underline">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-bold">Connect with Us</p>
            <ul className="mt-3 space-y-2 text-[13px] text-[#ddd]">
              <li>Nagpur, Maharashtra</li>
              <li>Orders · 440xxx and 441xxx</li>
              <li>
                <a href="tel:+918484911196" className="hover:underline">
                  +91 8484911196
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-bold">Make Money with Us</p>
            <ul className="mt-3 space-y-2 text-[13px] text-[#ddd]">
              <li>
                <a href="/#deals" className="hover:underline">
                  Shop packs
                </a>
              </li>
              <li>
                <a href="/checkout" className="hover:underline">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[16px] font-bold">Let Us Help You</p>
            <ul className="mt-3 space-y-2 text-[13px] text-[#ddd]">
              <li>
                <a href="/#use" className="hover:underline">
                  How to use
                </a>
              </li>
              <li>
                <a href="/#store" className="hover:underline">
                  Storage &amp; spoilage
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:underline">
                  Your cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#3a4553] bg-nav px-5 py-8 text-center">
        <a href="/" className="text-[18px] font-bold">
          kalamassala<span className="text-[#febd69]">.online</span>
        </a>
        <p className="mt-2 text-[12px] text-[#999]">
          © {new Date().getFullYear()} Lata Special · Kala Massala · Nagpur, Maharashtra
        </p>
        <p className="mt-1 text-[12px] text-[#999]">
          <a href="tel:+918484911196" className="hover:underline">
            +91 8484911196
          </a>
        </p>
      </div>
    </footer>
  );
}
