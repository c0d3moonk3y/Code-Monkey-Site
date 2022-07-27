import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  canvas: {
    backgroundColor: "#f1f1f1",
  },
}));

function MainLayout() {
  const classes = useStyles();
  return (
    <Box
      id="container"
      flex={1}
      display="flex"
      flexDirection="column"
      className={classes.canvas}
    >
      <Grid></Grid>
    </Box>
  );
}

export default MainLayout;
