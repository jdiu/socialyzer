import React, { useState, useEffect } from 'react';
import { Header, Image, Grid, GridColumn } from 'semantic-ui-react';
import io from 'socket.io-client';
import { API_URL } from 'config';
import SocialOAuth from '../SocialOAuth/SocialOAuth';
import twitterLogo from 'imgs/twitter.svg';
import redditLogo from 'imgs/reddit.svg';
import instagramLogo from 'imgs/instagram.svg';
import youtubeLogo from 'imgs/youtube.svg';

const socket = io(API_URL);
const socialPlatformList = [
  {
    'name': 'twitter',
    'logo': twitterLogo,
  },
  {
    'name': 'instagram',
    'logo': instagramLogo,
  },
  {
    'name': 'youtube',
    'logo': youtubeLogo,
  },
  {
    'name': 'reddit',
    'logo': redditLogo,
  },
];

const SocialOAuthList = () => {
  const [selectedIcon, setSelectedIcon] = useState('');
  
  return (
    <div>
      <Header as='h2' icon textAlign='center'>
        <Header.Content>Select your social media platform to analyze!</Header.Content>
      </Header>
      <br />
      <Grid centered columns='equal'>
        {socialPlatformList.map(socialPlatform => 
          <GridColumn>
            <SocialOAuth
              provider={socialPlatform}
              key={socialPlatform.name}
              socket={socket}
            />
          </GridColumn>
        )}
      </Grid>
    </div>
  );
}

export default SocialOAuthList;