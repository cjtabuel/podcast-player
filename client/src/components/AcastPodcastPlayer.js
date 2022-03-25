import React, { useState } from 'react';
import { useSelector } from 'react-redux'
// imported components
import { AcastPodcastMediaController } from './AcastPodcastMediaController';
import { AcastPodcastContentDisplay } from './AcastPodcastContentDisplay';
// import selectors
import selectAdMarkersFromShortaudio from '../selectors/selectAdMarkersFromShortAudio';
import selectNonAdMarkersFromShortAudio from '../selectors/selectNonAdMarkersFromShortAudio';
// MUI components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Container';
// MUI icons
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
// react-use-audio-player components
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player';

// Media player main component
const AcastPodcastPlayer = () => {
  // component state
  const [volumeSliderPositionState, setVolumeSliderPositionState] = useState(0.5);
  // selector fetches state from redux store with episode information
  const selectEpisodes = useSelector(state => state)

  // destructured methods from useAudioPosition component for handling audio
  const { duration, seek, position } = useAudioPosition({ highRefreshRate: true })

  const { togglePlayPause, playing, volume: setPodcastVolume, playing: isAudioPlaying } = useAudioPlayer({
    src: `static${selectEpisodes[0].audio}`,
    format: 'mp3',
    autoplay: false
  })

  // brute force solution for targeteting ad and non-ad markers specifically
  // returns and object with ad/non-ad marker position and relative ad content (e.g, content, link)
  const adMarkersAndInfo = selectAdMarkersFromShortaudio(selectEpisodes, position)
  const nonAdMarkersAndInfo = selectNonAdMarkersFromShortAudio(selectEpisodes, position)

  // handles volume slider and sets podcast volume
  const handleChangeVolume = (e, newValue) => {
    const volumeValue = e.target.value
    setPodcastVolume(volumeValue)
    setVolumeSliderPositionState(volumeValue)
  }
  return (
    <Container maxWidth='md'>
      <Card
        sx={{ display: 'flex', p: 2, mt: 25, mb: 25 }}
        alignItems="center">
        <Grid
          columnspacing={{ md: 2 }}
          direction="column"
          alignItems="center"
        >
          <AcastPodcastContentDisplay
            adMarkersAndInfo={adMarkersAndInfo}
            nonAdMarkersAndInfo={nonAdMarkersAndInfo}
            isAudioPlaying={isAudioPlaying}
          />
          <AcastPodcastMediaController
            togglePlayPause={togglePlayPause}
            playing={playing}
            duration={duration}
            seek={seek}
            position={position}
            adMarkersAndInfo={adMarkersAndInfo}
          />
          <Grid item='true' xs={12} md={6}>
            <Box
              justifyContent='center'
              display='flex'
              alignItems='center'
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ display: 'flex', mb: 5 }}
              >
                <VolumeDown />
                <Slider
                  aria-label="Volume"
                  value={volumeSliderPositionState}
                  size='small'
                  onChange={handleChangeVolume}
                  sx={{ width: 200 }}
                  step={0.01}
                  min={0.0}
                  max={1.0}
                />
                <VolumeUp />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export { AcastPodcastPlayer }