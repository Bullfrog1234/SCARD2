import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return [
    "Assess the significance of the change within Airservices",
    "Assess the significance of the change outside Airservices",
    "Assess the operational impact of the change on the systems, service and users (i.e. operators, maintainers, etc).",
    "Assess the technical impact of the change on the operating system(s).",
    "How complex is the implementation of and transition to the new or changed system or service?",
    "How substantial is the education and training associated with the change?"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Consider the work areas affected. Consider the effects on engineering (disciplines, systems and locations), ATS (service environments, core services, service classes and locations) and ARFF (stations, equipment, services)";
    case 1:
      return "Consider the number and extent of service users and/or stakeholders affected, including the interfaces between these parties.";
    case 2:
      return `Does the change:\n
              - enhance existing system functionality, provide different/new/novel functionality, or remove functionality;\n
              - alter the services provided;\n
              - affect the users’ roles including their required skills and abilities, HMI interaction, work environments, systems and procedures of work, responsibilities, security requirements, organisation and staffing or teams and communication? `;

    case 3:
      return `Does the change: \n
-	affect single or multiple systems\n
(e.g. NAIPS/Eurocat/AFTN/VHF Communications/INTAS etc.);\n
-	affect operational or non-operational systems\n
-	introduce new, or reconfigure, hardware or software affecting operational capability and/or performance\n
- affect system interfaces\n
- affect redundancy, maintainability, integrity, etc\n
-	affect operational or business data and/or databases?\n`;
    case 4:
      return `Consider: \n
-	temporary removal of a system, ghosting/mimicking, operational test and evaluation, control and monitoring, rollback/fallback required, etc\n
-	resources available, training, documentation, procedures, communication, time lines, approvals, etc\n`;
    case 5:
      return " Consider type of training required and for whom, none, classroom, online or simulation, time line for design/development and roll-out, duration, resources for design/development and delivery, impact on operational resources, currency, recency and licensing requirements, ongoing/refresher requirements, etc.";
    default:
      return "Unknown step";
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    {getStepContent(index)}
                  </FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    name={`ChangeSize[` + index + `]`}
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                  </RadioGroup>
                </FormControl>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
