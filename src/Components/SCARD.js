import * as React from "react";
import Button from "@material-ui/core/Button";
import { Formik, Field, Form } from "formik";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel
} from "@material-ui/core";
import { TextField, Select, Switch } from "formik-material-ui";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ranges from "./SelectOptions/Ranges";
import regPerfomEmail from "./reg-perfom-email";
import ChangeSize from "./ChangeSize";

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  full: {
    width: "100%"
  },
  textFieldFullNoMargin: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    width: "100%"
  }
});

const SCARDID = 192168;

function SCARD(props) {
  const { classes } = props;
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        select: "none",
        tags: [],
        rememberMe: true
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={({ submitForm, isSubmitting, values, setFieldValue }) => (
        <React.Fragment>
          <Form>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Change Details
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  component={TextField}
                />
                <br />
                <Field
                  type="password"
                  label="Password"
                  name="password"
                  component={TextField}
                />
                <br />
                <FormControlLabel
                  control={
                    <Field
                      label="Remember Me"
                      name="rememberMe"
                      component={Switch}
                    />
                  }
                  label="Remember Me"
                />
                <br />
                <Field
                  type="text"
                  name="select"
                  label="With Select"
                  select
                  helperText="Please select Range"
                  margin="normal"
                  component={TextField}
                  InputLabelProps={{
                    shrink: true
                  }}
                >
                  {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                <br />
                <FormControl>
                  <InputLabel shrink={true} htmlFor="tags">
                    Tags
                  </InputLabel>
                  <Field
                    type="text"
                    name="tags"
                    component={Select}
                    multiple={true}
                    inputProps={{ name: "tags", id: "tags" }}
                  >
                    <MenuItem value="dogs">Dogs</MenuItem>
                    <MenuItem value="cats">Cats</MenuItem>
                    <MenuItem value="rats">Rats</MenuItem>
                    <MenuItem value="snakes">Snakes</MenuItem>
                  </Field>
                </FormControl>
                <br />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="raised"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
                </Button>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  SCARD Participants
                </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Size of Change
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ChangeSize />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Operational Safety Impact of the Change
                </Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Regulatory Impact
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  If you are unsure if the proposed change has an associated
                  regulatory impact or to discuss the change’s safety reporting
                  requirements, contact Regulatory Performance:{" "}
                  <a href={regPerfomEmail(SCARDID)}>
                    RegulatoryPerformance@AirservicesAustralia.com
                  </a>
                  . <br />
                  Does the proposed change require an amendment to a Provider
                  Certificate schedule, or requires the issuance of an exemption
                  / instrument?
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Additional Information
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography>
                      If necessary, list any ralated documents or additional
                      relevant information.
                      <br />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="additionalInformation"
                      label="Additional Information"
                      fullWidth
                      multiline
                      rows="4"
                      component={TextField}
                      className={classes.textFieldFullNoMargin}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel disabled>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Results</Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </Form>
          <pre />
        </React.Fragment>
      )}
    />
  );
}

export default withStyles(styles)(SCARD);
