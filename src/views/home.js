import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { Button } from '@material-ui/core';
import styles from "assets/jss/material-kit-react/views/home.js";
import { Link } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {

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
      
      <div className="page-header header-filter page_header_home pt-5">
        <div className={classes.container}>
          <GridContainer className="mt-5">
            <GridItem sm={12} md={12} lg={12} className="text-center mt-5 m-auto">
              <img src={require("../assets/images/home_top.png")} alt="Home" data-aos="fade-up"/>
              <p data-aos="fade-up">that transforms the way people transact and liberates them from centralized structures, offering true financial freedom using 100% decentralized smart contract.</p>
              <div className="banner_btn" data-aos="fade-up">
                <Button className="choose_trx_btn"><Link to="/how-to-join">How to Join</Link></Button>
                <Button className="choose_trx_btn"><Link to="/guide">Guide</Link></Button>
                <Button className="choose_trx_btn"><Link to="/join">Join Now</Link></Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <div className="main">
        {/* Funding Section */}
        <div className="features_section">
          <div className="container"> 
            <div className="section">
              <div className="funding_section mt-5">
                <GridContainer>
                  <GridItem sm={12} md={12} lg={12}>
                    <div className="home_inner_title_large" data-aos="fade-up">
                      <h2 className="home_inner_title">Crowdfunding</h2>
                      <p>The New Generation Platform</p>
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer data-aos="fade-up">
                  <GridItem sm={6} md={4} lg={3}>
                    <p className="fund_content">A trailblazing platform that uses Tron’s advanced Smart Contract technology to empower its users with peer-to-peer middle-men free transactions. Trxway has adopted decentralized nature of Tron blockchain that benefit the community with high security.</p>
                  </GridItem>
                  <GridItem sm={6} md={8} lg={9}>
                    <div className="video_section">
                      <img src={require("../assets/images/video_btn.png")} alt="Video"/>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="fund_features_section">
          <div className="container">
            <div className="section">
              <GridContainer>
                <GridItem sm={6} md={6} lg={6} data-aos="fade-up">
                  <h3>Zero Risk Factors</h3>
                  <div className="fund_features">
                    <img src={require("../assets/images/line_content.png")} alt="Icon" />
                    <h6>Decentralized technologies are resistant to hacks and have no risk factors associated with third parties since those third parties are non-existent.</h6>
                  </div>
                </GridItem>
                <GridItem sm={6} md={6} lg={6} data-aos="fade-up">
                  <h3>Instant Peer-to-Peer Payments</h3>
                  <div className="fund_features">
                    <img src={require("../assets/images/line_content.png")} alt="Icon" />
                    <h6>Withdrawals are made instantly without centralized entities monitoring your transactions, that is, only the sender and the receiver are involved.</h6>
                  </div>
                </GridItem>
                <GridItem sm={6} md={6} lg={6} data-aos="fade-up">
                  <h3>Transparency and Anonymity</h3>
                  <div className="fund_features">
                    <img src={require("../assets/images/line_content.png")} alt="Icon" />
                    <h6>Trxway transactions are transmitted to the Tron blockchain and are always available. Though transactional records are transparent, identities are protected.</h6>
                  </div>
                </GridItem>
                <GridItem sm={6} md={6} lg={6} data-aos="fade-up">
                  <h3>Immutability</h3>
                  <div className="fund_features">
                    <img src={require("../assets/images/line_content.png")} alt="Icon" />
                    <h6>Trxway is based on Ehereum blockchain, hence it mirrors the innate features of the technology where any record transmitted and stored are immutable and hack-proof.</h6>
                  </div>
                </GridItem>
                <GridItem sm={6} md={6} lg={6} data-aos="fade-up">
                  <h3>Nonhierarchically Organized</h3>
                  <div className="fund_features">
                    <img src={require("../assets/images/line_content.png")} alt="Icon" />
                    <h6>Each member has the same access to our platform as every other member as we aim to provide an unbiased crypto ecosystem to everyone equally.</h6>
                  </div>
                </GridItem>
                <GridItem sm={6} md={6} lg={6} data-aos="fade-up">
                  <h3>Transactional Surety</h3>
                  <div className="fund_features">
                    <img src={require("../assets/images/line_content.png")} alt="Icon" />
                    <h6>Once the transaction is transmitted, it is broadcast to the Tron network and cannot be altered, maligned, or corrupted whatsoever.</h6>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>


        <div className="main_features_section">
          <div className="container">
            <div className="section daily_sec" data-aos="fade-up">
              <GridContainer>
                <GridItem sm={6} md={5}>
                  <div className="home_inner_title_small">
                    <h2 className="home_inner_title">Daily</h2>
                    <p>ROI 1.5%</p>
                  </div>
                  <p className="fund_content">1% of the deposited amount is paid daily to all users by the system algorithm, up to point when the maximum deposit limit is reached (i.e. 3.6x).</p>
                  <p className="fund_content mt-4">Suppose that you support the fund with 1000 TRX; you can now receive 3650 TRX back Daily you will receive 10 TRX until 365 days, or until the maximum limit is achieved by any of the other 3 ways, whichever is reached first.</p>
                </GridItem>
                <GridItem sm={6} md={7}>
                  <div className="text-center rectangle_bg">
                    <img src={require("../assets/images/image_01.png")} alt="Icon"/>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
            <div className="section direct_sec" data-aos="fade-up">
              <GridContainer>
                <GridItem sm={6} md={7}>
                  <div className="text-center rectangle_bg_left">
                    <img src={require("../assets/images/image_02.png")} alt="Icon"/>
                  </div>
                </GridItem>
                <GridItem sm={6} md={5}>
                  <div className="direct_com">
                    <div className="home_inner_title_small">
                      <h2 className="home_inner_title">Direct</h2>
                      <p>Commission</p>
                    </div>
                    <p className="fund_content">Awarded to Sponsor when a Direct Partner makes a deposit: first deposit and re-deposits.</p>
                    <p className="fund_content mt-4">This is 10% of the deposited amount (i.e. Direct Partner deposits 10000 TRX, you receive 1000 TRX as your Commission).</p>
                    <p className="fund_content mt-4">There are NO LIMITS to how many Direct Partners you can have.*All Commissions apply toward the 3.6x limit.</p>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
            <div className="section matching_sec" data-aos="fade-up">
              <GridContainer>
                <GridItem sm={6} md={5}>
                  <div className="home_inner_title_small">
                    <h2 className="home_inner_title">Matching</h2>
                    <p>Commission</p>
                  </div>
                  <p className="fund_content">Awarded to Sponsor when a Direct Partner makes a deposit: first deposit and re-deposits.</p>
                  <p className="fund_content mt-4">This is 10% of the deposited amount (i.e. Direct Partner deposits 10 TRX, you receive 1 TRX as your Commission).</p>
                  <p className="fund_content mt-4">There are NO LIMITS to how many Direct Partners you can have.</p>
                  <p className="fund_content mt-4">*All Commissions apply toward the 3.65 limit</p>
                </GridItem>
                <GridItem sm={6} md={7}>
                  <div className="text-center rectangle_bg rectangle_bg_matching">
                    <img src={require("../assets/images/image_03.png")} alt="Icon"/>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
            <div className="section daily_top_sec" data-aos="fade-up">
              <GridContainer>
                <GridItem sm={6} md={7}>
                  <div className="text-center rectangle_bg_left">
                    <img src={require("../assets/images/image_04.png")} alt="Icon"/>
                  </div>
                </GridItem>
                <GridItem sm={6} md={5}>
                  <div className="direct_com daily_per">
                    <div className="home_inner_title_small">
                      <h2 className="home_inner_title">Daily Top</h2>
                      <p>Sponsor Pool 3%</p>
                    </div>
                    <p className="fund_content">Top 4 Daily Sponsor Pool: 3%</p>
                    <p className="fund_content mt-4">Every day, 3% of the TRX deposits is added to the Top Daily Sponsor Fund Pool.</p>
                    <p className="fund_content mt-4">10% of that pool is awarded to the TOP 4 SPONSORS of TRX volume that day, and the remaining 90% is rolled over into the next day’s pool.</p>
                    <p className="fund_content mt-4">Allocation of the 10% is as follows:</p>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
}
