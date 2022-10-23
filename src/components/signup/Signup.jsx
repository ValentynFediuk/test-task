import styles from './singup.module.scss'
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';
import {OutlinedInput} from '../ui/OutlinedInput/OutlinedInput.jsx';

const Hero = () => {

    return (
        <section className={styles.signup}>
          <div className='container'>
              <h2>Working with POST request</h2>
              <form>
                <OutlinedInput
                    type='text'
                    label='Name'
                >

                </OutlinedInput>
              </form>
              <ButtonPrimary disabled>Sign up</ButtonPrimary>
          </div>
        </section>
    )
}

export default Hero