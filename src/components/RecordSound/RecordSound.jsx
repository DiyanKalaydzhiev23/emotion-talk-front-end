import { useState } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import { sendRecording } from '../../services/emotionTalkRequest';
import Navigation from "../Navigation/Navigation";
import VideoPlay from '../VideoPlay/VideoPlay';
import RecordStyles from './RecordSound.module.scss';

 
export default function RecordSound() {  
    const [audioState, setAudioState] = useState({
        recordState: null
    });

    const [displayWavesState, setDisplayWavesState] = useState('none');

    const [displayLineState, setDisplayLineState] = useState('block');

    const [micState, setMicState] = useState('Start');

    const [audioLength, setAudioLength] = useState({
        start: null
    })

    const start = () => {
        setFunc(() => () => stop());

        setMicState('Stop');

        setDisplayWavesState('block');

        setDisplayLineState('none');

        setAudioState({
            recordState: RecordState.START
        });
        
        setAudioLength({
            start: new Date()
        });
    }

    const stop = () => {
        setFunc(() => () => start());

        setDisplayWavesState('none');

        setDisplayLineState('block');

        setMicState('Start');

        setAudioState({
            recordState: RecordState.STOP
        });
    }

    const onStop = (audioData) => {
        handleSave(audioData);
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
    
    const [func, setFunc] = useState(() => () => start());

    return (
        <div>
            <Navigation/>
            <VideoPlay/>
            <AudioReactRecorder canvasWidth="0" canvasHeight="0" state={recordState} onStop={onStop} />

            <div className={RecordStyles.stoppedBar} style={{display: displayLineState}}></div>

            <div className={`${RecordStyles.cssAnimation} ${RecordStyles.elementToFadeInAndOut}`} style={{display: displayWavesState}}>
                <div className={RecordStyles.wrapper}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={RecordStyles.frame}>
                <input onChange={func} type="checkbox" name="toggle" id={RecordStyles.recordToggle} />
                
                <svg viewBox="0 0 100 100">
                    <circle cx="50%" cy="50%" r="45" className={RecordStyles.circleSvg} />
                </svg>
                
                <div className={RecordStyles.mic}>
                    <div className={RecordStyles.mic__head}></div>
                    <div className={RecordStyles.mic__neck}></div>
                    <div className={RecordStyles.mic__leg}></div>
                </div>
                
                <div className={RecordStyles.recording}>
                    <div className={RecordStyles.round}></div>
                    <div className={RecordStyles.round}></div>
                    <div className={RecordStyles.round}></div>
                </div>
                
                <label htmlFor={RecordStyles.recordToggle} className={RecordStyles.toggleLabel}></label>
            </div>
            <p className={RecordStyles.pg}>Press to {micState}</p>
        </div>
    );
}