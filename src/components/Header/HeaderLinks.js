/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from '@material-ui/core/Hidden';

// @material-ui/icons
import { Help, LockOpen, Assignment } from "@material-ui/icons";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list + " main_navbar"}>

      <Hidden only={['sm', 'xs']}>
        <ListItem className={classes.listItem}>
          <Link
            to="/faq"
            color="transparent"          
            className="nav-link auth_btn"
          >FAQ
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="/login"
            color="transparent"          
            className="nav-link auth_btn"
          >Login
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="/register"
            color="transparent"          
            className="nav-link auth_btn"
          >Signup
          </Link>
        </ListItem>
      </Hidden>

      <Hidden only={['md', 'lg', 'xl']}>
        <ListItem className={classes.listItem}>
          <Link
            to="/faq"
            color="transparent"          
            className="nav-link mobile_menu"
          ><Help className={classes.icons} />FAQ
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="/login"
            color="transparent"          
            className="nav-link mobile_menu"
          ><LockOpen className={classes.icons} />Login
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="/register"
            color="transparent"          
            className="nav-link mobile_menu"
          ><Assignment className={classes.icons} />Signup
          </Link>
        </ListItem>

      </Hidden>


      {/* Mobile Menu */}
      {/* <Hidden only={['md', 'lg', 'xl']}>
        <ListItem className={classes.listItem}>
          <Link
            to="#"
            color="transparent"          
            className="nav-link auth_btn"
          ><Telegram className={classes.icons} /> Telegram
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="#"
            color="transparent"          
            className="nav-link auth_btn"
          ><Facebook className={classes.icons} /> Facebook
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
            to="#"
            color="transparent"          
            className="nav-link auth_btn"
          ><Twitter className={classes.icons} /> Twitter
          </Link>
        </ListItem>
      </Hidden> */}

      {/* Desktop Menu */}
      {/* <Hidden only={['sm', 'xs']}>

        <ListItem className={classes.listItem}>
          <Link
              color="transparent"
              to="javascript:void(0)"
              target="_blank"
              className="nav-link social_links_header">
              <i className="fab fa-telegram-plane"/>
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
              color="transparent"
              to="javascript:void(0)"
              target="_blank"
              className="nav-link social_links_header">
              <i className="fab fa-facebook"/>
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link
              color="transparent"
              to="javascript:void(0)"
              target="_blank"
              className="nav-link social_links_header">
              <i className="fab fa-twitter"/>
          </Link>
        </ListItem>
      </Hidden> */}

      
      
    </List>
  );
}
