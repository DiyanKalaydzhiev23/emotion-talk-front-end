import VideoStyles from './VideoPlay.module.css'


export default function VideoPlay(props) {
    const { videoURL } = props; 
    
    return (
        <video src={videoURL} autoPlay>
            Sorry, your browser doesn't support embedded videos.
        </video>
    );
};
