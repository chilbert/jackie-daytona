export const site = {
  name: 'Jackie Daytona',
  description: "Official site for Jackie Daytona. New album 'She's So Hot' out now.",
  bookingEmail: 'jackiedaytona@outlook.com',

  // Analytics. Leave an ID empty to skip loading that tracker.
  // The old Universal Analytics IDs (UA-…) stopped collecting data in 2023;
  // add a GA4 measurement ID (G-…) here to turn Google Analytics back on.
  gaId: '',
  metaPixelId: '1594991487319402',

  mailchimp: {
    action: 'https://jackiedaytona.us15.list-manage.com/subscribe/post',
    u: '2c43051c5f0ee262fe699336a',
    id: '83d4bc8b58',
  },
};

export const album = {
  title: "She's So Hot",
  year: 2018,
  label: 'Tremolo Records',
  spotifyId: '5oLBigqpYLLQyAqaagtNKN',
  videoId: 'MlTyONVvrGI',
  tracks: [
    'Hot & Sweaty',
    "She's So Hot",
    'California',
    'Uptown Baby',
    'Spark',
    "You're So Good To Me",
    "Comin' To Get You",
  ],
  credits: [
    ['Produced & engineered by', 'Jackie Daytona'],
    ['Drums & percussion', 'Justin Robinson'],
    ['Mixed & mastered by', 'Norman Matthew'],
    ['Cover painting', 'Philip Walker'],
    ['Cover design', 'Ty Richards'],
  ],
};

export const links = {
  bandcamp: 'https://jackiedaytona.bandcamp.com/releases',
  digital: 'http://smarturl.it/Jackie_Daytona',
};

export const streaming = [
  { name: 'Spotify', icon: 'spotify', href: `https://open.spotify.com/album/${album.spotifyId}` },
  { name: 'Apple Music', icon: 'applemusic', href: 'https://apple.co/2BAdxoX' },
  { name: 'Amazon Music', icon: 'music', href: 'http://amzn.to/2BFUARq' },
  { name: 'YouTube', icon: 'youtube', href: `https://www.youtube.com/watch?v=${album.videoId}` },
] as const;

export const social = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/jackiedaytona/' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/jackiedaytona/' },
  { name: 'X', icon: 'x', href: 'https://twitter.com/jackiedaytona' },
  { name: 'Spotify', icon: 'spotify', href: `https://open.spotify.com/album/${album.spotifyId}` },
  { name: 'Apple Music', icon: 'applemusic', href: 'https://apple.co/2BAdxoX' },
] as const;
