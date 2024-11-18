import { getStoriesByRoomId, getUsers, getVotesByStoryId } from "@/api";
import { PaginatedResponse, User, Story, VALID_VOTES, Vote } from "@/types";
import { Grid2 as Grid, Typography, Paper, Box, Button, List, ListItem, ListItemText, ListItemButton, Stack, IconButton } from "@mui/material";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const INITIAL_SECONDS = 60;

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');

  const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export function Room() {
  let { id } = useParams();
  // const [timerSeconds, setTimerSeconds] = React.useState(INITIAL_SECONDS);
  
  const storiesQuery = useQuery<PaginatedResponse<Story>>({
    queryKey: ['stories', 'byRoomId', id],
    queryFn: () => getStoriesByRoomId(id!),
    placeholderData: keepPreviousData
  })

  const usersQuery = useQuery<PaginatedResponse<User>>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
    placeholderData: keepPreviousData
  })


  return (
    <Grid container spacing={2} columns={12}>
      {/*  1st column */}
      <Grid container>
          {/*  Replace the following with a custom component */}
          {VALID_VOTES.map((item) => 
            <Paper key={`vote-${item}`} sx={{ padding: 5 }}>
              <Typography component='div' variant="h5">{item}</Typography>
            </Paper>
          )}
        <Grid>
          <Typography variant="h4">Stories</Typography>
          <Button variant="outlined" size="small" onClick={() => console.log('Create new story')}>Create new story</Button>
          {/*  Replace the following with a custom component */}
          <List>
            <ListItem 
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton
                selected={true}
                onClick={(event) => console.log(event, 1)}
              >
                <ListItemText primary="ABC-001 Create a new SignUp form" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="ABC-002 Add SearchField to the table" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="ABC-003 Create a new Story" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/*  2nd column */}
      <Grid container>
        <Box>
          <Typography>Timer: 00:45</Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Start</Button>
            <Button variant="outlined">Show results</Button>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4">Players</Typography>
          <ul>
            {/*  Replace the following with a custom component */}
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
          </ul>
        </Box>
      </Grid>
    </Grid>
  )
}
