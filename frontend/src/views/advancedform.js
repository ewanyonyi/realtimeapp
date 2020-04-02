import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

const AdvancedForm = () => {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h2" gutterBottom>
        Create New Machine
      </Typography>
      <Typography paragraph>
        Advanced.
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                                      
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="software"
                    component={Select}
                    label="Software"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="python">Python</MenuItem>
                    <MenuItem value="r">R</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="instances"
                    component={Select}
                    label="Instaces"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="1">One</MenuItem>
                    <MenuItem value="2">Two</MenuItem>
                    <MenuItem value="3">Three</MenuItem>
                    <MenuItem value="4">Four</MenuItem>
                    <MenuItem value="5">Five</MenuItem>
                  </Field>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={12}>
                    <Field
                      name="Purge Date"
                      component={DatePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Purge Date"
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="ram"
                    component={Select}
                    label="RAM Size"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="2">2 GB</MenuItem>
                    <MenuItem value="4">4 GB</MenuItem>
                    <MenuItem value="8">8 GB</MenuItem>
                    <MenuItem value="16">16 GB</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="cpu"
                    component={Select}
                    label="CPU Cores"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="2">2 Cores</MenuItem>
                    <MenuItem value="4">4 Cores</MenuItem>
                    <MenuItem value="8">8 Cores</MenuItem>
                    <MenuItem value="16">16 Cores</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="disk"
                    component={Select}
                    label="Disk Size"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="40">40 GB</MenuItem>
                    <MenuItem value="80">80 GB</MenuItem>
                    <MenuItem value="128">8 GB</MenuItem>
                    <MenuItem value="250">250 GB</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="os"
                    component={Select}
                    label="Operating System"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="ubuntu">Ubuntu</MenuItem>
                    <MenuItem value="80">Centos</MenuItem>
                    <MenuItem value="128">Fedora</MenuItem>
                    <MenuItem value="250">Kali Linux</MenuItem>
                  </Field>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      />
    </div>
  );
}

export default AdvancedForm
