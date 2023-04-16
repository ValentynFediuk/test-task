import styles from './Hero.module.scss'
import {Button, Title} from 'components'

export const Hero = () => {

    return (
        <section className={styles.hero}>
            <div className={styles.hero_inner}>
                <Title typeTitle='h1' size='l' className={styles.title}>
                    Test assignment for front-end developer
                </Title>
                <p>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                    understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                    They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <Button typeBtn='button' appearance='primary' text='Sign up'/>
            </div>
        </section>
    )
}