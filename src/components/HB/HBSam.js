import React, { useState } from 'react';
import styles from './HBSam.module.scss';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import "../../styles/styles.scss";


export default function HBSam() {
    const [url, setUrl] = useState(false);
    
    
    const getNew = (text0, text1) => {
        const data = new URLSearchParams()
        data.append('text0', text0)
        data.append('text1', text1)
        const options = {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type':  'application/x-www-form-urlencoded',
            },
            body : data,
        }
        fetch('meme', options)
        .then(res => res.json()).then(res => {
            setUrl(res.data.url);
        })
        .catch(res => console.log(res))
        
    }
    
    function meme(e) {
        e.preventDefault();
        getNew(e.target.elements.text0.value, e.target.elements.text1.value);
        e.target.elements.text0.value = "";
        e.target.elements.text1.value = "";
    }
    
    
    return (
        <div className={styles.cover}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <p className="title is-3">HB SPAM</p>
                    {
                        url ? <div className={styles.result}>
                            <div className={styles.img}>
                                <img alt="be patient, image will load" src={url} />
                            </div>
                            <div>
                                <a onClick={() => setUrl(false)}>Close</a>
                            </div>
                        </div> : <>

                            <p>Fill out this form for your birthday present</p>
                            <div className={styles.formage}>
                                <form onSubmit={meme}>
                                    <div className="field">
                                        <div className="control">
                                            <label className="label">what you want for your bday</label>
                                            <input className="input" name="text0" placeholder="..." required={true} type="text" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                        <label className="label">What you're probably gonna get</label>
                                            <input className="input" name="text1" placeholder="..." required={true} type="text" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button type="submit" className="button is-primary">Go on then</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </>
                    }
                    
                </div>
            </div>

        </div>
    )
}
