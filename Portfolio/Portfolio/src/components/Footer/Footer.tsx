const Footer = () => {
  return (
    <footer className="bg-karate-darkblue text-white py-12">
      <div className="container mx-auto">
        {/* Privacy & Terms Notice */}
        <div className="text-center text-sm">
          By using the site you agree to our{" "}
          <a href="#" className="text-karate-purple hover:underline">
            Privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-karate-purple hover:underline">
            Terms & Conditions
          </a>
        </div>

        {/* Logo & Social Icons */}
        {/* <div className="flex flex-col items-center justify-center mb-8">
          <img
            src="https://ext.same-assets.com/3883402804/3167267342.svg"
            alt="Karate Combat Logo"
            className="h-12 mb-6"
          />

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/KarateCombatOfficial" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/791625036.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="https://www.instagram.com/karatecombat/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/3228671461.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a href="https://twitter.com/karatecombat" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/3488758817.svg"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
            <a href="https://discord.com/invite/EuKrxxbQfX" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/2989821662.svg"
                alt="Discord"
                className="h-6 w-6"
              />
            </a>
            <a href="https://t.me/karatecombat_world" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/177868923.svg"
                alt="Telegram"
                className="h-6 w-6"
              />
            </a>
            <a href="https://www.youtube.com/KarateCombat" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/222938149.svg"
                alt="YouTube"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div> */}

        {/* Divider */}
        <div className="flex justify-center mb-8">
          <img
            src="https://ext.same-assets.com/3883402804/4091763233.svg"
            alt="Divider"
            className="w-full max-w-4xl"
          />
        </div>

        {/* Footer Links */}
        {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-sm">
          <a href="/" className="hover:text-karate-purple transition-colors">Home</a>
          <a href="/events" className="hover:text-karate-purple transition-colors">Events</a>
          <a href="/fighters" className="hover:text-karate-purple transition-colors">Fighters</a>
          <a href="/tickets" className="hover:text-karate-purple transition-colors">Tickets</a>
          <a href="/how-to-watch" className="hover:text-karate-purple transition-colors">How to watch</a>
          <a href="/about-us" className="hover:text-karate-purple transition-colors">About us</a>
          <a href="/docs" className="hover:text-karate-purple transition-colors">Developers</a>
          <a href="/faq" className="hover:text-karate-purple transition-colors">FAQ</a>
          <a href="/rules-and-regulations" className="hover:text-karate-purple transition-colors">Rules & regulations</a>
          <a href="/terms-and-conditions" className="hover:text-karate-purple transition-colors">Terms & conditions</a>
          <a href="/privacy-policy" className="hover:text-karate-purple transition-colors">Privacy policy</a>
        </div> */}

        {/* Download App Section */}
        {/* <div className="text-center mb-8">
          <h3 className="text-lg font-bold mb-4">Download The App</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://apps.apple.com/us/app/karate-combat-vote-live/id6444110279" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/3003855495.svg"
                alt="iOS App"
                className="h-10"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.karate.combat&hl=en&gl=US" target="_blank" rel="noopener noreferrer">
              <img
                src="https://ext.same-assets.com/3883402804/2117769839.svg"
                alt="Android App"
                className="h-10"
              />
            </a>
          </div>
        </div> */}

        {/* Description */}
        <div className="text-center text-sm max-w-4xl mx-auto mb-8 text-gray-400">
        A portfolio is a collection of assets, projects, or achievements representing a person's or organization's work. 
        In finance, it includes investments like stocks and bonds. In business, a project portfolio consists of multiple 
        projects managed strategically. A professional portfolio showcases skills, experiences, and past work, often used 
        for job applications. Portfolios help assess performance, growth, and expertise in various fields.
        </div>

        {/* Contact */}
        <div className="text-center text-sm">
          {/* <div className="mb-2">
            Wanna fight:{" "}
            <a
              href="mailto:fight@karate.com?subject=I%20wanna%20fight&body=Fights%3A%0D%0ASocial%20Media%20Links%3A"
              className="text-karate-purple hover:underline"
            >
              fight@karate.com
            </a>
          </div> */}
          <div>
            Inquiries:{" "}
            <a
              href="#"
              className="text-karate-purple hover:underline"
            >
              © 2022 Jitendr Kumar. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
