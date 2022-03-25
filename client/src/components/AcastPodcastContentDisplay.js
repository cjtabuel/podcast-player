import React from 'react';
// MUI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// MUI icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AcastPodcastContentDisplay = ({ adMarkersAndInfo, nonAdMarkersAndInfo, isAudioPlaying }) => {
  const isAtFirstAdPosition = adMarkersAndInfo.isPositionAtFirstAd
  const isAtSecondAdPosition = adMarkersAndInfo.isPositionAtSecondAd
  const isAtFirstNonAdPosition = nonAdMarkersAndInfo.isPositionAtFirstNonAd

  return (
    <div>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          {
            (isAtFirstAdPosition || isAtSecondAdPosition)
            &&
            <Button
              component='a'
              href={ isAtFirstAdPosition ? 'https://en.wikipedia.org/wiki/Angry_Mom': '' || isAtSecondAdPosition ? 'https://en.wikipedia.org/wiki/Nymphicula_xanthobathra' : ''}
              target="_blank" size='small'
              endIcon={<ChevronRightIcon />}
            >
              Click Ad
            </Button>
          }
        </Box>
        <CardMedia
          component="img"
          sx={{ mt: 2 }}
          image={isAtSecondAdPosition ? 'static/images/image01.jpg' : 'static/images/image04.jpg'}
          alt="Live from space album cover"
        />
      </Grid>
      <Grid item='true' xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', pb: 1 }}>
          <CardContent sx={{ flex: '1 0 auto', mt: 1 }}>
            <Typography variant="subtitle1" color="text.secondary" component="div" noWrap>
              {
                (isAtFirstAdPosition && <p>{adMarkersAndInfo.markerContentA}</p>) ||
                (isAtSecondAdPosition&& <p>{adMarkersAndInfo.markerContentB}</p>) ||
                (isAtFirstNonAdPosition && <p>{nonAdMarkersAndInfo.markerContentC}</p>) ||
                (!isAtFirstNonAdPosition && !isAtSecondAdPosition && !isAtFirstAdPosition
                  && <p>Keep listening with Acast</p>)
              }
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </div >
  )
}

export { AcastPodcastContentDisplay }