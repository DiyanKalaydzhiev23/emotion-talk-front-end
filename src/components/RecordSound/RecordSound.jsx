import { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import { sendRecording } from '../../services/emotionTalkRequest';
import Navigation from "../Navigation/Navigation";
import VideoPlay from '../VideoPlay/VideoPlay';
import ProgressBar from '../ProgressBar/ProgressBar';
import RecordStyles from './RecordSound.module.scss';
import MicWaves from '../MicWaves/MicWaves';
import TypeWriterTextBox from '../TypeWriterTextBox/TypeWriterTextBox';

 
export default function RecordSound() {  
    const [audioState, setAudioState] = useState({recordState: null});
    const [timeout, setTimeoutCustom] = useState(0);
    const [trackLength, setTrackLength] = useState(0);
    const [addToBar, setAddToBar] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [disableBtn, setDisableBtn] = useState(RecordStyles.nonVisible);
    const [displayWavesState, setDisplayWavesState] = useState('none');
    const [displayLineState, setDisplayLineState] = useState('block');
    const [micState, setMicState] = useState('Start');
    const [audioLength, setAudioLength] = useState({start: null});
    const [func, setFunc] = useState(() => () => start());

    const calculateTimeout = (audioLengthData) => {
        const timings = {
            6000: audioLengthData / 1,
            18000: audioLengthData / 2,
            36000: audioLengthData / 3,
            64000: audioLengthData / 4,
            128000: audioLengthData / 5,
        };

        let t = 0;

        for (let [time, aLength] of Object.entries(timings)) {
            if (audioLengthData <= Number(time)) {
                t = aLength / 100;
                break;
            }
        }

        if (audioLengthData <= 2000) {
            t = -1;
        }

        if (t == 0) console.log("too big");

        return t;
    }

    const start = () => {
        setFunc(() => () => stop());

        setMicState('Stop');
        setCompleted(0);
        setAddToBar(0);

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
        const audioLengthData = (new Date() - audioLength.start);
    
        const formData = new FormData();

        formData.append('recording', audioFile);
        formData.append('owner_id', 1);
        
        setTrackLength(audioLengthData);
        sendRecording(formData, audioLengthData);
        setTimeoutCustom(calculateTimeout(audioLengthData));
        setAddToBar(1);
    };

    useEffect(() => {
        const timer = setTimeout(() => setDisableBtn(RecordStyles.visible), 5000);
    }, []);

    useInterval(() => setCompleted(completed + addToBar), timeout);

    return (
        <div>
            <Navigation/>
            <TypeWriterTextBox/>
            <VideoPlay/>
            <AudioReactRecorder canvasWidth="0" canvasHeight="0" state={audioState.recordState} onStop={onStop} />
            <ProgressBar completed={completed} audioLengthData={trackLength} displayLine={displayLineState} />
            <MicWaves displayWaves={displayWavesState}/>

            <div className={disableBtn}></div>

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