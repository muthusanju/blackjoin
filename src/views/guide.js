import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/home.js";
import { Link } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Guide(props) {

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div className="float_layer_div">
        <img src={require("../assets/images/layer_01.png")} alt="Icon" className="float_layer_01"/>
        <img src={require("../assets/images/layer_02.png")} alt="Icon" className="float_layer_02"/>
        <img src={require("../assets/images/layer_03.png")} alt="Icon" className="float_layer_03"/>
        <img src={require("../assets/images/layer_04.png")} alt="Icon" className="float_layer_04"/>
      </div>
      <Header className="header"
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={require("../assets/images/logo.png")} alt="Logo"/>}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
        {...rest}
      />
      
      <div className="page-header header-filter page_header_inner pt-5">
        <div className={classes.container}>
        <GridContainer>
            <GridItem sm={12} md={12} lg={12}>
              <h2 className="text-center">Guide</h2>
              <div className="guide_section_panel_div">
                <div className="guide_section_panel">
                  <div className="guide_section_top">
                    <GridContainer>
                      <GridItem sm={12} md={4} lg={4}>
                        <img src={require("../assets/images/guide_01.png")} alt="How to Join" className="img-fluid"/>
                      </GridItem>
                      <GridItem sm={12} md={8} lg={8}>
                        <p>Welcome to the world´s first decentralized community support fund built on TRON blockchain and smart contract technology.</p>
                        <p>The TRXWAY Smart Contract is designed to provide everyone with an independent, financial support fund, based on Smart Contract technology, surrounded and supported by multiple services including DEFI and online gaming through ECLIPCITY.</p>
                        <p>Any participant can contribute TRX towards the community fund and support the TRXWAY </p>
                        <p>1. 1% Daily return on your Deposit (maximum 365 days) 100% Passive.</p>
                        <p>2. 10% Direct Referral Commission for Sharing and Growing the Community Fund.</p>
                        <p>3. Matching Commission on Partners Daily Income every time they make a withdrawal</p>
                        <ul>
                          <li>1st generation 50%</li>
                          <li>2nd generation 10%</li>
                          <li>3rd generation 10%</li>
                          <li>4th generation 10%</li>
                          <li>5th generation 10%</li>
                        </ul>
                      </GridItem>
                    </GridContainer>
                  </div>
                  <div className="guide_section_middle">
                    <GridContainer>
                      <GridItem sm={12} md={12} lg={12}>
                        <h6>Minimum and maximum cycle limits</h6>
                        <p>1st cycle, minimum deposit 100 TRX, up to 1000K TRX.</p>
                        <p>2nd cycle, equal or greater than previous deposit, up to 2000K TRX.</p>
                      </GridItem>
                    </GridContainer>
                  </div>
                  <div className="guide_section_bottom">
                    <GridContainer>
                      <GridItem sm={12} md={7} lg={7}>
                        <h6>IMPORTANT NOTES</h6>
                        <p>*TRXWAY is a community-based project, 100% decentralized, P2P transactions through Smart Contract.</p>
                        <p>*Each Deposit Cycle is 365%.</p>
                        <p>*When 365% is received, a new deposit must be made to continue earning/receiving from any of the 4 ways.</p>
                      </GridItem>
                      <GridItem sm={12} md={5} lg={5}>
                        <img src={require("../assets/images/guide_02.png")} alt="How to Join" className="img-fluid"/>
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
                <div className="guide_section_btn">
                  <button className="choose_trx_btn"><Link to="/">Back</Link></button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <div className="main">
        {/* <div className="section">
          <div className="container">
          <GridContainer>
            <GridItem sm={12} md={12} lg={12}>
              <h2 className="text-center">How to join</h2>
              <div className="guide_section_panel">
                <div className="guide_section_top">
                  <GridContainer>
                    <GridItem sm={12} md={4} lg={4}>
                      <img src={require("../assets/images/how_join_01.png")} alt="How to Join" className="img-fluid"/>
                    </GridItem>
                    <GridItem sm={12} md={8} lg={8}>
                      <p>To join TRXWAY you need to use one of the following Dapp wallets.</p>
                      <p>To connect with the smart contract, please download, set up, and fund your preferred wallet from the instructions below.</p>
                      <p>*it is mandatory to use a referral link 1st time depositing to TRXWAY smart contract, please get back to the person that introduced you to TRXWAY.</p>
                      <p>PHONE WALLET:</p>
                      <p>TRON WALLET - download at offical site:</p>
                      <Link to="https://www.tronwallet.me/" target="_blank">https://www.tronwallet.me/</Link>
                      <p>TRONWALLET is a secure p2p crypto wallet and exchange for TRON (TRX)</p>
                      <p>Download and set up TRON WALLET to phone Fund TRON wallet with TRX Go to Dapp browser in wallet and enter the ref link Select amount to deposit and click join</p>
                    </GridItem>
                  </GridContainer>
                </div>
                <div className="guide_section_middle">
                  <GridContainer>
                    <GridItem sm={12} md={12} lg={12}>
                      <p>TRONLINK Wallet - PC BROWSER EXTENSION</p>
                      <p>What is TRONLINK?</p>
                      <p>TRONLINK is Available as a browser extension and as a mobile app, TronLink equips you with a key vault, secure login, and token wallet—everything you need to manage your digital assets.</p>
                      <p>TronLink generates passwords and keys on your device, so only you have access to your accounts and data.</p>
                    </GridItem>
                  </GridContainer>
                </div>
                <div className="guide_section_bottom">
                  <GridContainer>
                    <GridItem sm={12} md={6} lg={6}>
                      <p>How to connect TRONLINK to TRXWAY smart contract?</p>
                      <ul>
                        <li>Open Web browser with TronLink download</li>
                        <li>Enter TRXWAY.COM (ref link) an click enter</li>
                        <li>Allow TRONLINK wallet to connect to trxway.com</li>
                      </ul>
                    </GridItem>
                    <GridItem sm={12} md={6} lg={6}>
                      <img src={require("../assets/images/how_join_02.png")} alt="How to Join" className="img-fluid"/>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          </div>
        </div> */}
        <Footer/>
      </div>
    </div>
  );
}
