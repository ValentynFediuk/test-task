import styles from './singup.module.scss'
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';
import {OutlinedInput} from '../ui/OutlinedInput/OutlinedInput.jsx';
import {useState} from 'react';

const Signup = () => {
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('radio-1')

    const isRadioSelected = (value) => selectedRadioBtn === value

    return (
        <section className={styles.signup}>
            <div className='container'>
                <h2>Working with POST request</h2>
                <form>
                    <OutlinedInput
                        type='text'
                        label='Your Name'
                    ></OutlinedInput>
                    <OutlinedInput
                        type='text'
                        label='Email'
                    ></OutlinedInput>
                    <OutlinedInput
                        type='text'
                        label='Phone'
                        helperText='+38 (XXX) XXX - XX - XX'
                    ></OutlinedInput>
                    <input
                        type='radio'
                        name='radio-btn'
                        checked={isRadioSelected('radio-1')}
                        onChange={() => setSelectedRadioBtn('radio-1')}
                    />
                    <input
                        type='radio'
                        name='radio-btn'
                        checked={isRadioSelected('radio-2')}
                        onChange={() => setSelectedRadioBtn('radio-2')}
                    />
                    <input
                        type='radio'
                        name='radio-btn'
                        checked={isRadioSelected('radio-3')}
                        onChange={() => setSelectedRadioBtn('radio-3')}
                    />
                    <input
                        type='radio'
                        name='radio-btn'
                        checked={isRadioSelected('radio-4')}
                        onChange={() => setSelectedRadioBtn('radio-4')}
                    />
                </form>
                <ButtonPrimary disabled>Sign up</ButtonPrimary>
            </div>
        </section>
    )
}

export default Signup