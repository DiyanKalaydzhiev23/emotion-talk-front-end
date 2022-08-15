export default function ProgressBar (props) {
    let { completed, audioLengthData, displayLine } = props;
    let multiply = 1;

    if (audioLengthData <= 15000) {
        multiply = 5;
    } else if (audioLengthData <= 30000) {
        multiply = 2;
    }

    if (completed > 100) {
        completed = 100;
        multiply = 1;
    }

    const divBoxStyles = {
        display: displayLine
    }


    const containerStyles = {
        position: "absolute",
        bottom: 121,
        left: 600,
        height: 15,
        width: '39vw',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
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

    const labelStyles = {
        position: "absolute",
        bottom: -11,
		"margin": "0 0 10px 5px",
        color: 'white',
        fontWeight: 'bold',
		transform: "rotate(0deg)"
    }

    return (
        <div style={divBoxStyles}>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};
