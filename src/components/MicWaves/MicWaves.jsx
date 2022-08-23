import MicWavesStyles from './MicWavesStyles.module.scss';


export default function MicWaves(props) {
    const { displayWaves } = props;

    return (
        <div className={`${MicWavesStyles.cssAnimation} ${MicWavesStyles.elementToFadeInAndOut}`} style={{display: displayWaves}}>
        <div className={MicWavesStyles.wrapper}>
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
    );
}