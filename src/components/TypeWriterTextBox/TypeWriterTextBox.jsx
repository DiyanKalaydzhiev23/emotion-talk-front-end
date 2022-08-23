import TypeWriterStyles from './TypeWriterStyles.module.scss';


export default function TypeWriterTextBox(props) {
    
    return (
        <div className={TypeWriterStyles.textBox}>
            <p className={TypeWriterStyles.animTypewriter}>
                Hello, I'm Maria. Let me guess what are you feeling.
            </p>
        </div>
    );
}