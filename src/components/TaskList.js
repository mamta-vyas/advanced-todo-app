import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/reducers/taskSlice';
import { Button, Typography, Stack, Chip } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const weatherData = useSelector((state) => state.weather.data); // Weather data
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'error'; // red
      case 'Medium':
        return 'warning'; // yellow
      case 'Low':
        return 'success'; // green
      default:
        return 'default';
    }
  };

  return (
    <Stack spacing={2}>
      {tasks.map((task) => (
        <Stack key={task.id} direction="row" alignItems="center" spacing={2}>
          {/* Ensure task.text is not undefined before rendering */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {task.text || 'No task description'} {/* Fallback if task.text is undefined */}
          </Typography>

          {/* Priority label with color */}
          <Chip
            label={task.priority}
            color={getPriorityColor(task.priority)}
            size="small"
            sx={{ marginRight: 2 }}
          />

          <Button variant="outlined" color="error" onClick={() => handleDelete(task.id)}>
            Delete
          </Button>

          {/* Display weather data for task if available and if task text includes weather data's location */}
          {weatherData && task.text && weatherData.name && 
            task.text.toLowerCase().includes(weatherData.name.toLowerCase()) && (
              <div>
                <Typography variant="body2">
                  Weather for {weatherData.name}: {(weatherData.main.temp - 273.15).toFixed(2)} °C, {weatherData.weather[0]?.description || 'No description'}
                </Typography>
              </div>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default TaskList;
