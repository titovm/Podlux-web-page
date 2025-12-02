import { useState, useRef, useEffect } from 'react';
import svgPathsMobile from "./imports/svg-jwr91t2k48";
import svgPathsDesktop from "./imports/svg-4tfah38jxr";
import imgBackground from "figma:asset/e392cae85ecf7586202140d22ccf666294c6d2fb.png";
import imgCover from "figma:asset/e86360af3fbddf9c71549231151f94741fc89c80.png";

// Noise overlay component
function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate noise
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Create sparse white pixels (about 0.5% coverage for subtle effect)
      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() < 0.005) {
          // White pixel
          data[i] = 255;     // R
          data[i + 1] = 255; // G
          data[i + 2] = 255; // B
          data[i + 3] = 180; // A (semi-transparent)
        } else {
          // Transparent pixel
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Animate noise at ~15fps to simulate low-res gif
    const interval = setInterval(generateNoise, 66);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    />
  );
}

// AzuraCast Now Playing API interfaces
interface NowPlayingSong {
  title: string;
  artist: string;
  album?: string;
  art?: string;
}

interface NowPlayingData {
  now_playing?: {
    song?: NowPlayingSong;
  };
  station?: {
    listen_url?: string;
  };
}

interface LayoutProps {
  onPlayClick: () => void;
  isPlaying: boolean;
  songTitle: string;
  songArtist: string;
  albumArt: string;
}

function MobileLayout({ onPlayClick, isPlaying, songTitle, songArtist, albumArt }: LayoutProps) {
  return (
    <div className="mobile-layout" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 1.5rem' }}>
      {/* Logo/Title - Top */}
      <div style={{ flexShrink: 0, width: '100%' }}>
        <div className="font-black italic text-black text-center" style={{ fontFamily: "'ABC Gravity Cyrillic Wide', sans-serif", fontSize: 'clamp(32px, 10vw, 56px)', lineHeight: '0.9' }}>
          <p className="mb-0">Podgorica</p>
          <p>Lux</p>
        </div>
      </div>
      
      {/* Play button - Second box */}
      <div style={{ flexShrink: 0 }}>
        <button 
          onClick={onPlayClick}
          className="relative block cursor-pointer size-[136px]"
          aria-label="Play/Pause"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
            <g>
              <circle cx="68" cy="68" fill="var(--fill-0, black)" r="68" />
              {isPlaying ? (
                <rect x="46" y="46" width="44" height="44" fill="var(--fill-0, white)" />
              ) : (
                <path d={svgPathsMobile.p2fb0e2f0} fill="var(--fill-0, white)" />
              )}
            </g>
          </svg>
        </button>
      </div>

      {/* Album Art - Third box */}
      <div style={{ flexShrink: 0, width: '136px', height: '136px' }}>
        <img alt="Album Art" className="w-full h-full object-cover pointer-events-none" src={albumArt} />
      </div>

      {/* Song Info - Bottom box */}
      <div style={{ flexShrink: 0, width: '100%', maxWidth: '100%' }}>
        <div className="font-black italic text-black text-center" style={{ fontFamily: "'ABC Gravity Cyrillic Wide', sans-serif", fontSize: 'clamp(24px, 8vw, 56px)', lineHeight: '0.95', padding: '0 1rem', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          <p style={{ marginBottom: '0.25rem', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {songTitle}
          </p>
          <p style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{songArtist}</p>
        </div>
      </div>
    </div>
  );
}

function DesktopLayout({ onPlayClick, isPlaying, songTitle, songArtist, albumArt }: LayoutProps) {
  return (
    <div className="desktop-layout">
      <div className="absolute bottom-0 h-full left-1/2 translate-x-[-50%] w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBackground} />
      </div>
      
      <div className="absolute font-black italic left-[48px] text-black text-nowrap top-[48px] whitespace-pre z-10" style={{ fontFamily: "'ABC Gravity Cyrillic Wide', sans-serif", fontSize: 'clamp(32px, 2.5vw, 64px)', lineHeight: '1' }}>
        <p className="mb-0">Подгорица</p>
        <p>Люкс</p>
      </div>
      
      <div className="absolute font-black italic left-[calc(50%+0.5px)] text-black text-center text-nowrap top-[48px] translate-x-[-50%] whitespace-pre z-10" style={{ fontFamily: "'ABC Gravity Cyrillic Wide', sans-serif", fontSize: 'clamp(32px, 2.5vw, 64px)', lineHeight: '1' }}>
        <p className="mb-0">
          {songTitle}
        </p>
        <p>{songArtist}</p>
      </div>
      
      <div className="absolute right-[48px] size-[68px] top-[48px] z-10">
        <img alt="Album Art" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={albumArt} />
      </div>
      
      <div className="absolute right-[116px] top-[48px] z-10">
        <button 
          onClick={onPlayClick}
          className="bg-black box-border content-stretch flex gap-[10px] items-center justify-center pl-[24px] pr-[18px] py-[18px] rounded-[34px] size-[68px] cursor-pointer text-center"
          aria-label="Play/Pause"
        >
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32.15625", "--transform-inner-height": "27.84375" } as React.CSSProperties}>
            {isPlaying ? (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-[22px] relative w-[22px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <rect width="22" height="22" fill="var(--fill-0, white)" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="flex-none rotate-[90deg]">
                <div className="h-[27.854px] relative w-[32.163px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28">
                    <path d={svgPathsDesktop.p7331f80} fill="var(--fill-0, white)" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // AzuraCast configuration - Update these with your station details
  const AZURACAST_BASE_URL = 'https://radio.podlux.me';
  const STATION_SHORTCODE = 'podgorica_lux';
  const POLL_INTERVAL = 15000; // 15 seconds as recommended by AzuraCast
  
  // Now Playing state
  const [songTitle, setSongTitle] = useState('Champagne Coast');
  const [songArtist, setSongArtist] = useState('Blood Orange');
  const [albumArt, setAlbumArt] = useState(imgCover);
  const [streamUrl, setStreamUrl] = useState('');
  
  // Fetch now playing data
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          `${AZURACAST_BASE_URL}/api/nowplaying/${STATION_SHORTCODE}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch now playing data');
        }
        
        const data: NowPlayingData = await response.json();
        
        // Update song information
        if (data.now_playing?.song) {
          const song = data.now_playing.song;
          setSongTitle(song.title || 'Unknown Title');
          setSongArtist(song.artist || 'Unknown Artist');
          
          // Update album art if available
          if (song.art) {
            setAlbumArt(song.art);
          }
        }
        
        // Update stream URL if available
        if (data.station?.listen_url) {
          setStreamUrl(data.station.listen_url);
        }
        
      } catch (error) {
        console.error('Error fetching now playing data:', error);
        // Keep using default values on error
      } finally {
        // Schedule next fetch
        timeoutId = setTimeout(fetchNowPlaying, POLL_INTERVAL);
      }
    };
    
    // Initial fetch
    fetchNowPlaying();
    
    // Cleanup on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Update Media Session API whenever track info changes
  useEffect(() => {
    if ('mediaSession' in navigator && isPlaying) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: songTitle,
        artist: songArtist,
        album: 'Podgorica Lux',
        artwork: [
          { src: albumArt, sizes: '96x96', type: 'image/png' },
          { src: albumArt, sizes: '128x128', type: 'image/png' },
          { src: albumArt, sizes: '192x192', type: 'image/png' },
          { src: albumArt, sizes: '256x256', type: 'image/png' },
          { src: albumArt, sizes: '384x384', type: 'image/png' },
          { src: albumArt, sizes: '512x512', type: 'image/png' },
        ]
      });

      // Set up media session action handlers
      navigator.mediaSession.setActionHandler('play', () => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      });

      navigator.mediaSession.setActionHandler('stop', () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setIsPlaying(false);
        }
      });
    }
  }, [songTitle, songArtist, albumArt, isPlaying]);

  const handlePlayClick = () => {
    if (!audioRef.current) {
      // Create audio element on first click
      audioRef.current = new Audio();
      // Use the stream URL from AzuraCast if available, otherwise use default
      audioRef.current.src = streamUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
      audioRef.current.load();
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('Playback failed:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="size-full">
      <NoiseOverlay />
      <MobileLayout 
        onPlayClick={handlePlayClick} 
        isPlaying={isPlaying}
        songTitle={songTitle}
        songArtist={songArtist}
        albumArt={albumArt}
      />
      <DesktopLayout 
        onPlayClick={handlePlayClick} 
        isPlaying={isPlaying}
        songTitle={songTitle}
        songArtist={songArtist}
        albumArt={albumArt}
      />
    </div>
  );
}
