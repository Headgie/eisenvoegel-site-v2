import React from "react";
import "./App.css";
import { MediaPlayer } from '@cassette/player';
import '@cassette/player/dist/css/cassette-player.css';



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
    return <div className="App">
    <div className="header">Header</div>
    
    <MediaPlayer playlist={this.state.songs}
    controls={[
      'spacer','backskip',
      'playpause',
      'forwardskip',
      'mute',
     
      'spacer',
      'progress'
    ]}  />
    
    </div>;
  }
}

export default App;
