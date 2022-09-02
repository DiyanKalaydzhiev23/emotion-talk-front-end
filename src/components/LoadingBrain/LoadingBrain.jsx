import RecordStyles from '../RecordSound/RecordSound.module.scss';

export default function LoadingBrain(props) {
    const { rotation } = props;
    const displayImg = rotation ? 'block' : 'none';

    const styles = {
        display: displayImg,
        transform: `rotate(${rotation}deg)`
    }

    return (
        <img src="brain.png" className={RecordStyles.brain} style={styles} alt="Brain image" />
    );
}