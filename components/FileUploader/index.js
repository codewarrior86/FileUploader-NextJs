import styles from './style.module.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FileUploader = ({ onSuccess }) => {
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const inputText = "jasa membuat";
        const arrayLocatio = [3.321123, -13.991321];

        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }


        data.append('name', inputText);
        data.append("location", JSON.stringify(arrayLocatio));

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                console.log('Success boss')
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
                console.log('Error : ', e)
            })
    };

    return (
        <form
            method="post"
            action="#"
            id="#"
            onSubmit={onSubmit}
        >
            <div className={`form-group ${styles.files}`}>
                <label>Upload Your File </label>
                <input type="file"
                    onChange={onInputChange}
                    className="form-control"
                    multiple />
            </div>

            <button>Submit</button>
        </form>
    )

}