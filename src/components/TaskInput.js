import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/reducers/taskSlice';
import { fetchWeather } from '../redux/reducers/weatherSlice';
import { TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');
  const dispatch = useDispatch();
  
  // Accessing the weather data from Redux store (optional: display weather info here)
  const weatherData = useSelector((state) => state.weather.data);

  // Handle adding a task
 // TaskInput.js (or similar)
const handleAdd = () => {
  if (text.trim() !== '') {
    // Dispatch action to add a task with a valid string
    dispatch(addTask({ id: Date.now(), text: text || '', priority }));
    dispatch(fetchWeather(text));  // Assuming weather fetching is correct
    setText('');
  }
};


  // Ensure weather data is defined before accessing properties
  const temperature = weatherData?.main?.temp;
  const location = weatherData?.name;
  const description = weatherData?.weather?.[0]?.description;

  return (
    <Grid container spacing={2} direction="row" sx={{ marginBottom: 2 }}>
      <Grid item xs={12} sm={8}>
        <TextField
          label="Enter Task"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={2}>
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            label="Priority"
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={2}>
        <Button variant="contained" onClick={handleAdd} fullWidth>
          Add Task
        </Button>
      </Grid>

      {/* Optionally display weather info if available */}
      {weatherData ? (
        <Grid item xs={12}>
          <div>
            <h4>Weather Info:</h4>
            <p>Location: {location}</p>
            <p>Temperature: {temperature ? (temperature - 273.15).toFixed(2) : "N/A"} °C</p>
            <p>Description: {description || "N/A"}</p>
          </div>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <p>Loading weather data...</p>
        </Grid>
      )}
    </Grid>
  );
};

export default TaskInput;
