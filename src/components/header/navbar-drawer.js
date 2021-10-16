/** @jsx jsx */
import { jsx, Box, Image, Button, MenuButton } from 'theme-ui';
import React, { useContext } from 'react';
import { withRouter } from 'next/router'
import { Link as ScrollLink} from 'react-scroll';
import Link  from 'next/link';
import { rgba } from 'polished';
import { DrawerContext } from 'contexts/drawer/drawer-context';
import Drawer from 'components/drawer';
import Logo from 'components/logo';
import menuItems from './header.data';
import close from 'assets/images/icons/close.png';

const NavbarDrawer = ({router}) => {
  const mainPage = router.pathname === "/";
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <Box sx={styles.handler}>
          <MenuButton />
        </Box>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={close} alt="close" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Box sx={styles.wrapper}>
        <Logo sx={styles.logo} />
        <Box as="ul" sx={styles.navbar}>
          {menuItems.map(({ path, label }, i) => (
            <Box as="li" key={i}>
              {mainPage && <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {label}
              </ScrollLink> }
              {!mainPage && <Link href={"/#" + path}>
              <a style={{"textDecoration": "none"}}>
                {label}
                </a></Link>}
            </Box>
          ))}
      <Button variant="text" sx={styles.button}>
          {/* <Link href="/contact-us"><a style={{"paddingLeft": "15px", "textDecoration": "none"}} >Contact Us</a></Link> */}
          <a href="mailto:contact@rosai.co.uk" style={{"color":"inherit","paddingLeft": "15px", "textDecoration": "none"}}>Contact Us</a>
        </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
export default withRouter(NavbarDrawer);

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
  drawer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    outline: 0,
  },
  mask: {
    opacity: 0.2,
  },
  close: {
    position: 'absolute',
    top: 35,
    right: 30,
    zIndex: '1',
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    p: 0,
  },
  wrapper: {
    height: '100%',
    paddingTop: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    ml: 30,
    mb: 45,
  },
  navbar: {
    listStyle: 'none',
    m: 0,
    p: 0,
    'li > a': {
      backgroundColor: 'transparent',
      borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      color: rgba('#02073E', 0.4),
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      minHeight: 44,
      marginLeft: 6,
      position: 'relative',
      transition: 'all 0.3s ease-in-out 0s',
    },
    'li:last-child > a': {
      borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
    },
    '.active': {
      color: 'primary',
    },
  },
  button :{
    "backgroundColor": "#FFCC77;",
    "color":"#292929",
    "padding":"15px",
    "marginTop": "40px",
    "marginLeft": "10px",
  },
  donateNow: {
    fontSize: 1,
    minHeight: 45,
    margin: 'auto 30px 40px',
  },
};
