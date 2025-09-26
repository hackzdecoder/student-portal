import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/school-logo.png';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';
import { APP_DEFAULT_PATH } from 'config';
import { Box } from '@mui/material';

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ sx, to }) {
  return (
    <ButtonBase disableRipple component={Link} to={to || APP_DEFAULT_PATH} sx={sx}>
      <Box
        component="img"
        src={headerLogo}
        alt="header-logo"
        sx={{
          height: 65,
          width: 65,
          mt: 3.5,
          mb: 3.5,
          objectFit: 'contain'
        }}
      />
    </ButtonBase>
  );
}

LogoSection.propTypes = { reverse: PropTypes.bool, isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any };
