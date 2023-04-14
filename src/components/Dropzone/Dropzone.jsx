import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from './Dropzone.module.scss'

export const Dropzone = ({children, formState, setFormState}) => {
    const acceptedFileTypes = ['image/jpeg', 'image/jpg'];
    const maxFileSize = 5 * 1024 * 1024; // 5 Mb in bytes
    const minPhotoSize = 70; // 70x70px
    const maxFiles = 1;
 
    const {errors} = formState
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        const file = acceptedFiles[0];
        if (file.type && !acceptedFileTypes.includes(file.type)) {
            setFormState((prevState) => ({
                ...prevState,
                errors: {
                    ...errors,
                    avatarError: true,
                    avatarErrorMessage: 'The photo format must be jpeg/jpg type.'
                }
            }))
            return;
        }
        if (file.size && file.size > maxFileSize) {
        console.log('File too large:', file.size);
        setFormState((prevState) => ({
            ...prevState,
            errors: {
                ...errors,
                avatarError: true,
                avatarErrorMessage: 'The photo size must not be greater than 5 Mb'
            }
        }))
        return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
          const image = new Image();
          image.src = event.target.result;
          image.onload = function () {
            if (image.width < minPhotoSize || image.height < minPhotoSize) {
                setFormState((prevState) => ({
                    ...prevState,
                    errors: {
                        ...errors,
                        avatarError: true,
                        avatarErrorMessage: 'Minimum size of photo 70x70px'
                    }
                }))
                return;
            }
            setFormState((prevState) => ({
                ...prevState,
                avatar: acceptedFiles,
            }))
          };
        };
      }, []);
    
      const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        onDrop,
        accept: acceptedFileTypes,
        multiple: false,
        maxSize: maxFileSize,
        maxFiles: maxFiles,
      });

    const handleOnClick = (e) => {
        e.preventDefault();
        const fileInput = document.querySelector("input[type='file']");
        if (fileInput) {
        fileInput.click();
        }
    };
    
    return (
        <div className={styles.dropzone}>
         <div className={styles.wrapper} {...getRootProps()} onClick={handleOnClick}>
            <input {...getInputProps()} />
                {children}
            </div>
            {errors.avatarError && <p className={styles.error}>{errors.avatarErrorMessage}</p>}
        </div>
    )
}