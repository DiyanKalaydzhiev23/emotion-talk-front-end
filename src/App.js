import './App.css';

import React, { Component } from 'react'
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import { sendRecording } from './services/emotionTalkRequest';

 
class App extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      recordState: null
    }
  }
 
  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.handleSave(audioData)
  }

  handleSave = async (audioData) => {
    const audioBlob = await fetch(audioData.url).then((r) => r.blob());
    const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
    const formData = new FormData(); // preparing to send to the server

    formData.append('recording', audioFile);  // preparing to send to the server
    formData.append('owner_id', 1);  // preparing to send to the server
    sendRecording(formData); // sending to the server
  };
 
  render() {
    const { recordState } = this.state
 
    return (
      <div>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />
        
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
}

export default App;
