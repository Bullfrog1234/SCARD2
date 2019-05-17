import React from "react";
import { Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import PropTypes from "prop-types";
//import classNames from 'classnames';
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

/*const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];
*/
class FormikForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ email: "", color: "red", firstName: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <Field
                type="email"
                name="email"
                label="Email"
                component={TextField}
                className={classes.textField}
                margin="normal"
              />
              <Field
                label="Colour"
                component={TextField}
                select
                name="color"
                className={classes.textField}
                margin="normal"
              >
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
              </Field>

              <Field
                name="firstName"
                label="First Name"
                component={TextField}
                className={classes.textField}
                margin="normal"
              />

              <Field
                name="lastName"
                label="Last Name"
                component={TextField}
                className={classes.textField}
                margin="normal"
              />
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    );
  }
}

FormikForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormikForm);
