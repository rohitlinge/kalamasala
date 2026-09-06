import { SocialIcons } from "./SocialDock";

export default function Footer() {
  return (
    <footer className="mt-4 overflow-x-hidden text-white md:mt-6">
      <a href="#top" className="block bg-nav-3 py-4 text-center text-[13px] hover:bg-[#485769]">
        Back to top
      </a>
      <div className="bg-nav-2 px-4 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-[1100px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[16px] font-bold">Get to Know Us</p>
            <ul className="mt-3 space-y-2 text-[13px] text-[#ddd]">
              <li>
                <a href="/owner" className="hover:underline">
                  About owner
                </a>
              </li>
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
                <a href="/#faq" className="hover:underline">
                  Nagpur masala online FAQ
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
        <div className="mx-auto mt-8 max-w-[1100px]">
          <p className="text-[16px] font-bold">Visit the kitchen</p>
          <p className="mt-1 text-[13px] text-[#ddd]">
            16 A, Great Nag Road, near Ambience Interior Mall, Untkhana, Nagpur, Maharashtra 440024
          </p>
          <div className="mt-4 overflow-hidden rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7442.797094131783!2d79.09582031473985!3d21.136531901734333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0b0525c2f5b%3A0x4c1e02cdfa4d2020!2s16%20A%2C%20Great%20Nag%20Rd%2C%20near%20Ambience%20Interior%20Mall%20-%20Furniture%2C%20Decor%2C%20Spacewood%20Dealer%20in%20Nagpur%2C%20Untkhana%2C%20Nagpur%2C%20Maharashtra%20440024!5e0!3m2!1sen!2sin!4v1788682198686!5m2!1sen!2sin"
              title="Lata Special kitchen on Great Nag Road, Nagpur"
              className="h-[220px] w-full border-0 md:h-[320px]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="border-t border-[#3a4553] bg-nav px-5 py-8 text-center">
        <SocialIcons className="mb-4 justify-center md:hidden" />
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
