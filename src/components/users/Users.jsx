import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';
import styles from './users.module.scss'
import User from '../user/User.jsx';

const Hero = () => {

    return (
        <section className={styles.users}>
            <div className='container'>
                <h2>Working with GET request</h2>
                <div className={styles.users_list}>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                </div>
                <ButtonPrimary>Show more</ButtonPrimary>
            </div>
        </section>
    )
}

export default Hero