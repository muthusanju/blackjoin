/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className="footer_top_sec">
        <div className="footer_support_sec" data-aos="fade-up">
          <h2>Supported</h2>
          <p>Wallets</p>
          <div className="footer_support_sec_panel">
            <div className="text-center">
              <div className="footer_img"><img src={require("assets/images/tron_wallet.png")} alt="Icon"/></div>
              <p>TronWallet</p>
              <ul className="app_list">
                <li><Link to="/" target="_blank"><img src={require("assets/images/android_icon.png")} alt="icon"/></Link></li>
                <li><Link to="/" target="_blank"><img src={require("assets/images/apple_icon.png")} alt="icon"/></Link></li>
              </ul>
            </div>
            <div className="text-center">
              <div className="footer_img"><img src={require("assets/images/tron_link.png")} alt="Icon"/></div>
              <p>TronLink</p>
              <ul className="app_list">
                <li><Link to="/" target="_blank"><img src={require("assets/images/android_icon.png")} alt="icon"/></Link></li>
                <li><Link to="/" target="_blank"><img src={require("assets/images/apple_icon.png")} alt="icon"/></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_download_sec" data-aos="fade-up">
          <h2>Download</h2>
          <p>Marketing Materials</p>
          <div className="footer_support_sec_panel">
            <div className="text-center">
              <div className="footer_img"><img src={require("assets/images/pdf_icon.png")} alt="Icon"/></div>
              <Link to="/" target="_blank">PDF<span>Presentation</span></Link>
            </div>
            <div className="text-center">
              <div className="footer_img"><img src={require("assets/images/ppt_icon.png")} alt="Icon"/></div>
              <Link to="/" target="_blank">PPT<span>Presentation</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="d-flex align-items-center justify-content-between footer_home">
            <div className="smart_contract_add">
              <label>Smart-contract-address:</label>
              <Link to="/" target="_blank">TUSAmtPo56k1CHYJ8hzisbWS5UqPNyrCou</Link>
            </div>
            <ul className="social_icons">
              <li><Link to="/" target="_blank"><i className="fab fa-telegram-plane"></i></Link></li>
              <li><Link to="/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to="/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
