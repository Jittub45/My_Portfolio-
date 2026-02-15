import { motion } from 'framer-motion';

const TokenInfo = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto">
        {/* GitHub and LeetCode side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* GitHub */}
          <motion.div
            className="bg-karate-blue/20 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 uppercase">
              GitHub
            </h2>
            <a 
              href="https://github.com/Jittub45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center"
            >
              <picture>
                <source 
                  media="(prefers-color-scheme: dark)" 
                  srcSet="https://next.ossinsight.io/widgets/official/analyze-user-contribution-time-distribution/thumbnail.png?period=past_1_year&user_id=113817140&image_size=auto&color_scheme=bg-karate-blue/20" 
                  width="721" 
                  height="auto" 
                />
                <img 
                  alt="Contribution Time Distribution of @Jittub45" 
                  src="https://next.ossinsight.io/widgets/official/analyze-user-contribution-time-distribution/thumbnail.png?period=past_1_year&user_id=113817140&image_size=auto&color_scheme=light" 
                  width="721" 
                  height="auto"
                  className="mx-auto"
                />
              </picture>
            </a>
          </motion.div>

          {/* Leetcode */}
          <motion.div
            className="bg-karate-blue/20 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 uppercase">
              LeetCode
            </h2>
            <a 
              href="https://leetcode.com/Jittu_b45/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center"
            >
              <picture>
                <source 
                  media="(prefers-color-scheme: dark)" 
                  srcSet="https://leetcard.jacoblin.cool/Jittu_b45?theme=transparent" 
                  width="721" 
                  height="auto" 
                />
                <img 
                  alt="LeetCode Stats for lapor" 
                  src="https://leetcard.jacoblin.cool/Jittu_b45?theme=light&ext=heatmap" 
                  width="721" 
                  height="auto"
                  className="mx-auto rounded-lg"
                />
              </picture>
            </a>
          </motion.div>
        </div>

        {/* Contact me*/}
        <div className="grid grid-cols-1 gap-6 mb-4">
          <motion.div
            className="bg-karate-blue/20 p-6 rounded-xl flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5075/5075658.png"
                alt="Contact Icon"
                className="w-6 h-6 mr-2"
              />
              <span className="font-medium">Contact Me</span>
            </div>
          </motion.div>
        </div>

        {/* Learn More Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mail Me Card - Updated to side-by-side layout */}
          <motion.div
            className="bg-karate-navy/70 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-yellow-500/20 p-2 rounded-md w-10 h-10 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                  stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-linejoin="round" stroke-width="12" 
                  d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 
                  81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"></path></g></svg>
                </svg>
                </div>
                <h3 className="text-lg font-bold">Email Me</h3>
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jitendrakumaryadav2003@gmail.com&su=Subject&body=Message"
                target="_blank"
                className="bg-karate-purple/30 hover:bg-karate-purple/50 transition-colors text-white font-medium py-2 px-12 rounded-md inline-block"
              >
                Mail
              </a>
            </div>
          </motion.div>

          {/* Twitter Card - Updated to side-by-side layout */}
          <motion.div
            className="bg-karate-purple rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-md w-10 h-10 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <svg viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g 
                  id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g 
                  id="SVGRepo_iconCarrier"> <title>twitter [#154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" 
                  stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" 
                  fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> 
                  <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,
                  7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,
                  7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 
                  13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 
                  C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 
                  6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 
                  C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g> </g></svg>
                </svg>
                </div>
                <h3 className="text-lg font-bold">Twitter</h3>
              </div>
              <a
                href="https://x.com/jittub45"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors text-white font-medium py-2 px-10 rounded-md inline-block"
              >
                Tweet
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            className="bg-karate-blue/70 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-md w-10 h-10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"></path>
                    <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"></path>
                    <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">LinkedIn</h3>
              </div>
              <a
                href="https://www.linkedin.com/in/kumarjitendra1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 transition-colors text-white font-medium py-2 px-10 rounded-md inline-block"
              >
                Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
