import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function DateTimePicker({
  selectedDate,
  selectedStartTime,
  selectedEndTime,
  onDateChange,
  onStartTimeChange,
  onEndTimeChange
}) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <Grid xs={12} sm={4} item>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/YYYY"
            margin="normal"
            label="Date"
            value={selectedDate}
            onChange={onDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <KeyboardTimePicker
            margin="normal"
            label="Start Time"
            value={selectedStartTime}
            onChange={onStartTimeChange}
            KeyboardButtonProps={{
              "aria-label": "start time"
            }}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <KeyboardTimePicker
            margin="normal"
            label="End Time"
            value={selectedEndTime}
            onChange={onEndTimeChange}
            KeyboardButtonProps={{
              "aria-label": "end time"
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
