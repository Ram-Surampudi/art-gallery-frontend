import React from "react";

const Home = () => {
  return (
    <div
      className="page-template-default page page-id-144158 page-parent theme-tenweb-website-builder-theme woocommerce-js e-wc-error-notice e-wc-message-notice e-wc-info-notice elementor-default elementor-kit-144197 elementor-page elementor-page-144158 tbdemo_owner e--ua-blink e--ua-chrome e--ua-webkit vsc-initialized"
      style={{
        "--e-global-color-twbb_bg_1": "#5A5E3226",
        "--e-global-color-twbb_bg_2": "#DBC75B26",
        "--e-global-color-twbb_link": "#5A5E32",
        "--e-global-color-twbb_accent_hover": "#5A5E32CC",
        "--e-global-color-twbb_link_hover": "#5A5E3280",
        "--e-global-color-accent": "#5A5E32",
        "--e-global-color-secondary": "#DBC75B",
      }}
    >
      {/* Top Notification Bar */}
      <div className="tbdemo-sharebar-container tbdemo-owner">
        <div className="tbdemo-circle-icon-border" data-tooltip="Upgrade to 10Web Pro">
          <div className="tbdemo-circle-icon tbdemo-pro"></div>
        </div>
        <div className="tbdemo-circle-icon-border" data-tooltip="Make a quick customization">
          <div className="tbdemo-circle-icon tbdemo-customize"></div>
          <div
            className="tbdemo-circle-icon tbdemo-customize-close tbdemo-close-circle"
            style={{ display: "none" }}
          ></div>
        </div>
        <div className="tbdemo-circle-icon-border tbdemo-edit-icon" data-tooltip="Edit your website">
          <div className="tbdemo-circle-icon tbdemo-edit"></div>
          <div
            className="tbdemo-circle-icon tbdemo-edit-close tbdemo-close-circle"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="twbb-pu-bar twbb-pu-bottom-bar" style={{ display: "block" }}>
        <div>
          <span>Edit your website with 10Web editor based on Elementor.</span>
          <button className="twbb-pu-button twbb-button-blue">Edit</button>
        </div>
      </div>

      {/* Popup */}
      <div className="tbdemo-popup tbdemo-big-popup" style={{ display: "none" }}>
        <div className="tbdemo-popup-left">
          <div>
            <div className="tbdemo-popup-title">Get $20 credit by inviting your friends</div>
            <div className="tbdemo-popup-description">
              For every friend who upgrades to one of 10Web’s paid plans you will get a $20 credit.
              Help your community join the AI revolution.
            </div>
            <ul>
              <li>Become a part of AI revolution</li>
              <li>Share your AI generated website</li>
              <li>Get $20 credit for each paid user</li>
            </ul>
            <div className="tbdemo-popup-share">
              <div className="tbdemo-popup-share-cont">
                <div className="tbdemo-popup-share-text">Share this link via:</div>
                <div className="tbdemo-popup-share-buttons">
                  <div className="tbdemo-popup-share-button">
                    <a
                      href="https://twitter.com/intent/tweet?url=https://10web-site.ai/119/nearby-pigeon/&text=It took me less than a minute to build this website with @10Web’s %23AI Website Builder.%0AHow awesome is that%3F🤯"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://10web-site.ai/119/wp-content/plugins/ai-builder-demo-plugin-master/assets/images/twitter.svg"
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div className="tbdemo-popup-share-button">
                    <a
                      href="https://www.facebook.com/sharer.php?u=https://10web-site.ai/119/nearby-pigeon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://10web-site.ai/119/wp-content/plugins/ai-builder-demo-plugin-master/assets/images/facebook.svg"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div className="tbdemo-popup-share-button">
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://10web-site.ai/119/nearby-pigeon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://10web-site.ai/119/wp-content/plugins/ai-builder-demo-plugin-master/assets/images/linkedin.svg"
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tbdemo-popup-copy">
                <img
                  className="tbdemo-popup-share-copy-icon"
                  src="https://10web-site.ai/119/wp-content/plugins/ai-builder-demo-plugin-master/assets/images/link.svg"
                  alt="Link Icon"
                />
                <div className="tbdemo-popup-text-to-copy">
                  https://10web-site.ai/119/nearby-pigeon/
                </div>
                <div className="tbdemo-popup-copyied">Copy</div>
              </div>
            </div>
          </div>
          <button className="tbdemo-button tbdemo-button-promo-got-it">
            <span className="tbdemo-button-text">Got it</span>
          </button>
        </div>
        <div className="tbdemo-popup-right"></div>
        <div className="tbdemo-popup-close tbdemo-big-popup-close"></div>
      </div>
    </div>
  );
};

export default Home;
