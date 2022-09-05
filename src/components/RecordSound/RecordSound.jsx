import { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import { sendRecording } from '../../services/emotionTalkRequest';
import Navigation from "../Navigation/Navigation";
import VideoPlay from '../VideoPlay/VideoPlay';
import ProgressBar from '../ProgressBar/ProgressBar';
import RecordStyles from './RecordSound.module.scss';
import MicWaves from '../MicWaves/MicWaves';
import LoadingBrain from '../LoadingBrain/LoadingBrain';
import TypeWriterTextBox from '../TypeWriterTextBox/TypeWriterTextBox';
import { emotionsTextData } from '../../services/utills';
 

export default function RecordSound() {  
    const [video, setVideo] = useState("helloMaria.webm");
    const [videoReady, setVideoReady] = useState("");
    const [textToDisplay, setTextToDisplay] = useState("Hello, I'm Maria. Let me guess what are you feeling.");
    const [textToDisplayReady, setTextToDisplayReady] = useState('');
    const [textDisplaySeconds, setTextDisplaySeconds] = useState(3);
    const [loadingBrain, setLoadingBrain] = useState(0);
    const [displayMic, setDisplayMic] = useState('block');
    const [randomText, setRandomText] = useState('');
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

        if (t == 0) console.log('too big');

        return t;
    }

    const start = () => {
        setTextDisplaySeconds(1);
        setDisableBtn(RecordStyles.nonVisible);
        setVideo('listening.webm');
        setVideoReady('listening.webm');
        setTextToDisplay('I am listening.');
        setTextToDisplayReady('I am listening.');

        setTimeout(() => {
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

            setDisableBtn(RecordStyles.visible);
        }, 2000);
    }

    const stop = () => {
        setFunc(() => () => start());

        setDisplayWavesState('none');
        setDisplayLineState('block');
        setDisplayMic('none');

        setLoadingBrain(45);
        setMicState('Start');
        setTextToDisplay(' ');

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
        setTimeoutCustom(calculateTimeout(audioLengthData));
        setAddToBar(1);
        setRandomText('Sending Data');
        const emotionResult = await sendRecording(formData, audioLengthData);
        displayEmotionResult(emotionResult);
    };

    const displayEmotionResult = (emotionData) => {
        let emotionToDisplay = Math.floor(Math.random() * 4) + 1;
        
        while (`${emotionData.emotion}${emotionToDisplay}` == videoReady) {
            emotionToDisplay = Math.floor(Math.random() * 4) + 1;
        }

        setRandomText('');
        setCompleted(100);
        setVideoReady(`${emotionData.emotion}${emotionToDisplay}.webm`);
        setTextToDisplayReady(`${emotionData.emotion}${emotionToDisplay}`);

        if (emotionData.emotion == "neutral") {
            setVideoReady('neutral.webm');
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => setDisableBtn(RecordStyles.visible), 5000);
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => document.body.style.overflow = "visible";
    });

    useInterval(() => {
        if (completed < 99) {
            setCompleted(completed + addToBar);
        }
        
        if (completed >= 100) {
            setVideo(String(videoReady));
            setTextToDisplay(emotionsTextData[textToDisplayReady]);
            setDisplayMic('block');
            setLoadingBrain(0);
        }
    }, timeout);

    useInterval(() => {
        if (randomText != '') {
            let randomIndex = Math.floor(Math.random() * 6);
            let textOptions = [
                'Analyzing',
                'Transforming audio',
                'Relistening',
                'Compiling data',
                'Calculating response',
                'Fetching data from audio',
                'Fetching data from response'
            ];
            setRandomText(textOptions[randomIndex]);
        }

    }, 1500);

    useInterval(() => {
        if (loadingBrain != 0) {
            let rotation = loadingBrain + 4;
            setLoadingBrain(rotation);
        }
    }, 40);

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
        })
        .catch(function(err) {
            alert("No mic for you");
        });

    return (
        <div>
            <Navigation/>
            <TypeWriterTextBox animSec={textDisplaySeconds} text={textToDisplay}/>
            <div className={RecordStyles.videoFrame}>
                <VideoPlay videoURL={video}/>
            </div>
            <div style={{display: 'none'}}>
                <AudioReactRecorder canvasWidth="0" canvasHeight="0" state={audioState.recordState} onStop={onStop} />
            </div>
            <ProgressBar completed={completed} audioLengthData={trackLength} displayLine={displayLineState} />
            
            <div className={RecordStyles.wavesHolder}>
                <MicWaves displayWaves={displayWavesState}/>
            </div>

            <LoadingBrain rotation={loadingBrain}/>

            <div className={disableBtn}></div>
            <div id={RecordStyles.randomText}>
                <p>{randomText}</p>
            </div>

            <div className={RecordStyles.frame} style={{display: displayMic}}>
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
            <p style={{display: displayMic}} className={RecordStyles.pg}>Press to {micState}</p>
        </div>
    );
}