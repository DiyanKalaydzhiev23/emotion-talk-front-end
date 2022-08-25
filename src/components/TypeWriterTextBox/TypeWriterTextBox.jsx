import TypeWriterStyles from './TypeWriterStyles.module.scss';


export default function TypeWriterTextBox(props) {
    const { text, animSec } = props;

    return (
        <div className={TypeWriterStyles.textBox}>
            <p key={text} className={animSec == 1 ? TypeWriterStyles.animTypewriter1sec : TypeWriterStyles.animTypewriter3sec}>
                {text}
            </p>
        </div>
    );
}