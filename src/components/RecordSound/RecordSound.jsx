import { useState } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import { sendRecording } from '../../services/emotionTalkRequest';


export default function RecordSound() {  
    const [audioState, setAudioState] = useState({
        recordState: null
    });

    const [audioLength, setAudioLength] = useState({
        start: null
    })

    const start = () => {
        setAudioState({
            recordState: RecordState.START
        })
        
        setAudioLength({
            start: new Date()
        })
    }

    const stop = () => {
        setAudioState({
            recordState: RecordState.STOP
        })
    }

    const onStop = (audioData) => {
        handleSave(audioData)
    }

    const handleSave = async (audioData) => {
        const audioBlob = await fetch(audioData.url).then((r) => r.blob());
        const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
        const audioLengthData = new Date() - audioLength.start;
    
        const formData = new FormData();

        formData.append('recording', audioFile);
        formData.append('owner_id', 1);

        sendRecording(formData, audioLengthData);
    };

    const { recordState } = audioState

    return (
        <div>
            <AudioReactRecorder state={recordState} onStop={onStop} />

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}