import React from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

const Footer: React.FC = () => {
  const classes = useStyles()
  
    return (
      <footer className={classes.footer}>
        <Container>
          <Nav>
            <NavItem >
              <NavLink href="https://www.kenet.or.ke" className={classes.navlink}>kenet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.kenet.or.ke/content/kenya-education-network-0" className={classes.navlink}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.kenet.or.ke/blog" className={classes.navlink}>Blog</NavLink>
            </NavItem>
          </Nav>
          <div className={classes.copyrigh}>
            © {new Date().getFullYear()} {" "}
            Transforming Education Through ICT.
          </div>
        </Container>
      </footer>
    );
  
}

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      padding: '5px',
      color: '#000000',
      background: '#D1CDCD',
    },
    navlink: {
      color: '#000000',
    },
    copyright: {
      marginLeft: '480px',
      paddingBottom: '20px',
    }
  }),
)

export default Footer;
