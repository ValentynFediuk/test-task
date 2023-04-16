import styles from './Singup.module.scss'
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary.jsx';
import { OutlinedInput } from '../ui/OutlinedInput/OutlinedInput.jsx';
import { useEffect, useState } from 'react';
import { Dropzone } from "../Dropzone/Dropzone.jsx";
import { $api } from '../../http/axios';
import { useToken, useUsers } from '../../hooks'
import {useContext} from 'react'
import {UsersDispatchContext, UsersContext} from '../../store'
import {Spiner} from '../index'

const NAME_VALIDATION_REGEXP = /^[A-Za-z0-9_]{2,60}$/
const EMAIL_VALIDATION_REGEXP = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const PHONE_VALIDATION_REGEXP = /^[\+]{0,1}380([0-9]{9})$/

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        avatar: [],
        isFromValid: false,
        errors: {
            nameError: false,
            nameErrorMessage: '',
            emailError: false,
            emailErrorMessage: '',
            phoneError: false,
            phoneErrorMessage: '',
            avatarError: false,
            avatarErrorMessage: ''
        }
    }) 

    const {name, email, phone, avatar, isFromValid, errors} = formState

    const [selectedRadioBtn, setSelectedRadioBtn] = useState('radio-1')
    const [positions, setPositions] = useState([])
    const isRadioSelected = (value) => selectedRadioBtn === value

    const usersState = useContext(UsersContext)
    const dispatch = useContext(UsersDispatchContext)

    const getPositions = async () => {
        try {
            const {data} = await $api.get('/positions')
            setPositions(data.positions)
        } catch (error) {
            console.log(error);
        }
    }

    const handleInputName = (event) => {
        const newValue = event.target.value.trim()
        const nameError = !NAME_VALIDATION_REGEXP.test(newValue)

        setFormState((prevState) => ({
            ...prevState,
            name: newValue,
            errors: {
                ...errors,
                nameError,
                nameErrorMessage: 'Username should contain 2-60 characters'
            }
        }))
    }

    const handleInputEmail = (event) => {
        const emailError = !EMAIL_VALIDATION_REGEXP.test(email.trim())
        setFormState((prevState) => ({
            ...prevState,
            email: event.target.value,
            errors: {
                ...errors,
                emailError,
                emailErrorMessage: 'Invalid email address. Please enter a valid email address in the format example@gmail.com.'
            }
        }))
    }

    const handleInputPhone = (event) => {
        const newValue = event.target.value.trim()

        const phoneError = !PHONE_VALIDATION_REGEXP.test(newValue)
        setFormState((prevState) => ({
            ...prevState,
            phone: event.target.value,
            errors: {
                ...errors,
                phoneError,
                phoneErrorMessage: 'Invalid phone number. Number should start with code of Ukraine +380'
            }
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("position_id", Number(selectedRadioBtn.split('-')[1]));
        formData.append("photo", avatar[0]);
        try {
            const token = await useToken()
            await $api.post('/users', formData, {headers: {"Token": token}})
            const {users} = await useUsers(1)
            dispatch({ type: 'registerUser', users: users })
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getPositions()
    }, [])

    useEffect(() => {
        NAME_VALIDATION_REGEXP.test(name) &&
        EMAIL_VALIDATION_REGEXP.test(email) &&
        PHONE_VALIDATION_REGEXP.test(phone) &&
        avatar[0] &&
        setFormState((prevState) => ({
                ...prevState,
                isFromValid: true
        }))
    }, [name, email, phone, avatar])

    return (
        <section className={styles.signup}>
            <div className='container'>
                <h2>Working with POST request</h2>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <OutlinedInput
                        type='text'
                        label='Your Name'
                        onChange={(event) => handleInputName(event)}
                        value={name}
                        error={errors.nameError}
                        errorMessage={errors.nameErrorMessage}
                    />
                    <OutlinedInput
                        type='text'
                        label='Email'
                        onChange={(event) => handleInputEmail(event)}
                        value={email}
                        error={errors.emailError}
                        errorMessage={errors.emailErrorMessage}
                    />
                    <OutlinedInput
                        type='text'
                        label='Phone'
                        helperText='+38 (XXX) XXX - XX - XX'
                        onChange={(event) => handleInputPhone(event)}
                        value={phone}
                        error={errors.phoneError}
                        errorMessage={errors.phoneErrorMessage}
                    />
                    <div className={styles.radio_btns}>
                        {positions?.map((position) => (
                        <div key={position.id} className={styles.radio_btn_wrapper}>
                            <input
                                id={`radio-${position.id}`}
                                type='radio'
                                name='radio-btn'
                                checked={isRadioSelected(`radio-${position.id}`)}
                                onChange={() => setSelectedRadioBtn(`radio-${position.id}`)}
                            />
                            <label htmlFor={`radio-${position.id}`}>{position.name}</label>
                        </div>
                        ))}
                    </div>
                    <div className={styles.dropzone}>
                        <Dropzone
                            formState={formState}
                            setFormState={setFormState}
                        >
                            <button>Upload</button>
                            {avatar[0] ?
                             <p>{avatar[0]['name']}</p> 
                            :
                            <p>Upload your photo</p>}
                            
                        </Dropzone>
                    </div>
                    {usersState.loading
                        ? 
                        <Spiner />
                        :
                        <ButtonPrimary type='submit' disabled={!isFromValid}>Sign up</ButtonPrimary>
                    }
                </form>
            </div>
        </section>
    )
}

export default Signup