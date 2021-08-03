/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isWhite, ...props }) {
  let colour = "#2f3640";
  if (isWhite) {
    colour = "#f5f6fa";
  }
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <h2 style={{"padding":"0px", "margin":"0px", "color":colour}}>ROSAI</h2>
      {/* <LogoSvg isWhite={isWhite} /> */}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
