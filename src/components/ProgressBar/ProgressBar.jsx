import ProgressBarStyles from './ProgressBarStyles.module.scss';


export default function ProgressBar (props) {
    let { completed, audioLengthData, displayLine } = props;
    let multiply = 1;

    if (audioLengthData <= 15000) {
        multiply = 5;
    } else if (audioLengthData <= 30000) {
        multiply = 2;
    }

    if (completed == 99) {
        multiply = 1;
    } 

    if (completed >= 100) {
        completed = 100;
        multiply = 1;
    }

    const divBoxStyles = {
        display: displayLine
    }
    
    const fillerStyles = {
        position: "absolute",
        height: '15px',
        width: `${completed * multiply}%`,
        background: "linear-gradient(45deg, #3af9da 25%, #7B1FA2 50%, #F06292 90%)",
        borderRadius: 'inherit',
        textAlign: 'right',
		transition: 'width 1s ease-in-out'
    }

    return (
        <div style={divBoxStyles}>
            <div className={ProgressBarStyles.containerStyles}>
                <div style={fillerStyles}>
                    <span className={ProgressBarStyles.labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};
