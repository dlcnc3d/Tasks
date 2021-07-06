import { Typography } from "@material-ui/core";
//import { defaultTheme } from "../../themes/default";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";


type Props ={
    year:number;
}

export  const Footer: React.FC<Props> = (props) => {
const {year} = props;

  return (
    <>
      <Typography></Typography>

      <BottomNavigation
      //value={value}
      //onChange={handleChange}
      >
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
    </>
  );
}
