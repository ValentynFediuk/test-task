import styles from './hero.module.scss'
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';

const Hero = () => {

    return (
        <section className={styles.hero}>
            <div className={styles.hero_inner}>
                <h1 className={styles.title}>
                    Test assignment for front-end developer
                </h1>
                <p>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                    understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                    They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <ButtonPrimary>Sign up</ButtonPrimary>
            </div>
        </section>
    )
}

export default Hero