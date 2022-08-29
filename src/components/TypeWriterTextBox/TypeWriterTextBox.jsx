import TypeWriterStyles from './TypeWriterStyles.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function TypeWriterTextBox(props) {
    const matches = useMediaQuery('(max-width:600px)');

    let { text, animSec } = props;

    if (text == "Hello, I'm Maria. Let me guess what are you feeling." && matches) {
        text = "Hello, I'm Maria.";
    }

    return (
        <div className={TypeWriterStyles.textBox}>
            <p key={text} className={animSec == 1 ? TypeWriterStyles.animTypewriter1sec : TypeWriterStyles.animTypewriter3sec}>
                {text}
            </p>
        </div>
    );
}