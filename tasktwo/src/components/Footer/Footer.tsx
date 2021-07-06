import { Typography } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import useStyles from "./Footer.styles";

type Props = {
  year: number;
};

export const Footer: React.FC<Props> = (props) => {
  const { year } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BottomNavigation>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<HomeIcon />}
        ></BottomNavigationAction>
      </BottomNavigation>

      <Typography
        align="center"
        color="textSecondary"
        component="p"
        variant="subtitle1"
      >
        Copyright (C) CDM Ukraine. {year}
      </Typography>
    </div>
  );
};
