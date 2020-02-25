import React from "react";
import "./App.css";
import { MediaPlayerControls } from "@cassette/player";
import { PlayerContextProvider, playerContextFilter } from "@cassette/core";
import { MediaProgressBar } from '@cassette/components';

import "@cassette/player/dist/css/cassette-player.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          title: "Они любили свои самолеты",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_01_eisenvoegel.mp3"
        },
        {
          title: "Перо",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_02_feather.mp3"
        },
        {
          title: "Через ров",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_03_through_moat.mp3"
        },
        {
          title: "Феникс из пепла",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_04_phoenix.mp3"
        },
        {
          title: "Джейн",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_05_jane.mp3"
        },
        {
          title: "Трамваи",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_06_tramvai.mp3"
        },
        {
          title: "Пятна",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_07_spots.mp3"
        },
        {
          title: "Дождь",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_08_rain.mp3"
        },
        {
          title: "Эвридика",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_09_evridika.mp3"
        },
        {
          title: "Ангел",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/sky_10_angel.mp3"
        },
        {
          title: "Гавань",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/Eisenvoegel-Haven.mp3"
        },
        {
          title: "Кофейная песенка",
          artist: "Железные птицы",
          url: "http://eisenvoegel.ru/mp3/coffee.mp3"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="header">Header</div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <div>
          <PlayerContextProvider playlist={this.state.songs}>
            <MediaPlayerControls
              controls={[
                "spacer",
                "backskip",
                "playpause",
                "forwardskip",
                "mute",
                "spacer",
                "progress"
              ]}
            ></MediaPlayerControls>
            <div>
              <h3>Select a track:</h3>
              <PlaylistMenu />
            </div>
          </PlayerContextProvider>
        </div>
      </div>
    );
  }
}


function PlaylistMenu({ playlist, activeTrackIndex, onSelectTrackIndex }) {
  return (
    <ol>
      {playlist.map((track, i) => {
        const playing = activeTrackIndex === i;
        return (
          <li key={track.title}>
            {playing && <div>
              <strong>{track.title} (playing)</strong>
              <MediaProgressBar
                  progressDirection="right"
                  style={{ background: 'black', height: 30 }}
                  progressStyle={{ background: 'orange' }}
                  handle={
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        background: '#fff',
                        borderRadius: '10%',
                        border: '2px solid black'
                      }}
                    />
                  }
                />
            </div>}
            {!playing &&
              <button
                onClick={() => onSelectTrackIndex(i)}
              >
                {track.title}
              </button>}
          </li>
        );
      })}
    </ol>
  );
}

PlaylistMenu = playerContextFilter(PlaylistMenu, [
  'playlist',
  'activeTrackIndex',
  'onSelectTrackIndex'
]);

export default App;
