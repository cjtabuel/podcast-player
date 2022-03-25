import React from 'react';
// MUI components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// MUI icons
import Forward5Icon from '@mui/icons-material/Forward5';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Replay5Icon from '@mui/icons-material/Replay5';
import Slider from '@mui/material/Slider';

const AcastPodcastMediaController = ({ togglePlayPause, playing, duration, seek, position, adMarkersAndInfo }) => {
  // handles forward/replay media progress
  const handleMediaReplay5s = () => (seek(position - 5))
  const handleMediaForward5s = () => (seek(position + 5))

  // handles play/pause functionality
  const handlePlayPause = () => (togglePlayPause())
  // handles playback timeline changes and progress
  const handleTimelineChange = (e, newValue) => (seek(e.target.value))

  return (
    <div>
      <Grid item='true' xs={12} md={6}>
        <Box
          alignItems='center'
          display='flex'
          justifyContent='center'
        >
          <Slider
            aria-label="Progress slider"
            onChange={handleTimelineChange}
            min={0.0}
            max={(duration)}
            size='small'
            step={1.0}
            sx={{ width: 400 }}
            value={position}
          />
        </Box>
      </Grid>
      <Grid item='true' xs={12} md={6}>
        <Box
          alignItems='center'
          display='flex'
          justifyContent='space-between'
          px={{ md: 20 }}
        >
          <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={10}>
            {new Date(position * 1000).toISOString().substr(11, 8)}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={10}>
            {new Date(duration * 1000).toISOString().substr(11, 8)}
          </Typography>
        </Box>
      </Grid>
      <Grid item='true' xs={12}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="Replay 5" onClick={handleMediaReplay5s} >
            <Replay5Icon sx={{ height: 30, width: 30 }} />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={handlePlayPause}>
            {playing ? <PauseIcon sx={{ height: 60, width: 60 }} /> : <PlayArrowIcon sx={{ height: 60, width: 60 }} />}
          </IconButton>
          <IconButton
            aria-label="Forward 5"
            onClick={handleMediaForward5s}
            disabled={(!!adMarkersAndInfo.isPositionAtFirstAd || !!adMarkersAndInfo.isPositionAtSecondAd)}
          >
            <Forward5Icon sx={{ height: 30, width: 30 }} />
          </IconButton>
        </Box>
      </Grid>
    </div>
  )
}

export { AcastPodcastMediaController }