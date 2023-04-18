import clsx from 'clsx'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './Dropzone.module.scss'

export function Dropzone({ children, formState, setFormState }) {
  const acceptedFileTypes = {
    'image/jpeg': ['.jpeg', '.jpg'],
  }
  const maxFileSize = 5 * 1024 * 1024 // 5 Mb in bytes
  const minPhotoSize = 70 // 70x70px
  const maxFiles = 1

  const { errors } = formState
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const file = acceptedFiles[0]

      if (rejectedFiles[0]) {
        rejectedFiles.forEach((rejectedFile) => {
          const { message } = rejectedFile.errors[0]
          setFormState((prevState) => ({
            ...formState,
            errors: {
              ...prevState.errors,
              avatarError: true,
              avatarErrorMessage: message,
            },
          }))
        })
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const image = new Image()
        image.src = event.target.result
        image.onload = () => {
          if (image.width < minPhotoSize || image.height < minPhotoSize) {
            setFormState((prevState) => ({
              ...prevState,
              errors: {
                ...errors,
                avatarError: true,
                avatarErrorMessage: 'Minimum size of photo 70x70px',
              },
            }))
            return
          }
          setFormState((prevState) => ({
            ...prevState,
            avatar: acceptedFiles,
            errors: {
              ...errors,
              avatarError: false,
              avatarErrorMessage: '',
            },
          }))
        }
      }
    },
    [errors, formState, setFormState]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    multiple: false,
    maxSize: maxFileSize,
    maxFiles,
  })

  const handleOnClick = (e) => {
    e.preventDefault()
    const fileInput = document.querySelector("input[type='file']")
    if (fileInput) {
      fileInput.click()
    }
  }

  return (
    <div
      className={clsx(
        styles.dropzone,
        errors.avatarError && styles.dropzone_error
      )}
    >
      <div
        role="button"
        tabIndex={0}
        className={styles.wrapper}
        {...getRootProps()}
        onClick={handleOnClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleOnClick()
          }
        }}
      >
        <input {...getInputProps()} />
        {children}
      </div>
      {errors.avatarError && (
        <p className={styles.error}>{errors.avatarErrorMessage}</p>
      )}
    </div>
  )
}
