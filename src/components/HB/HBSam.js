import React, { useState } from 'react';
import styles from './HBSam.module.scss';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import "../../styles/styles.scss";


export default function HBSam() {
    const [url, setUrl] = useState(false)
    
    const instance = axios.create({
        baseURL : "https://api.imgflip.com/caption_image",
        header: {
            "content-type": "application/json",
          },
    })
    
    const getNew = async (text0, text1) => {
        let res = await instance.post("/", {
            template_id : 181913649,
            username : "mbappek",
            password : "password",
            text0 : text0,
            text1 : text1,
        })
        console.log(res.data);
    }
    
    function meme(e) {
        e.preventDefault();
        console.log(e.target.elements.text0.value, e.target.elements.text1.value);
        setUrl("YEET");
    }
    
    
    return (
        <div className={styles.cover}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <p className="title is-3">HB SPAM</p>
                    {
                        url ? <>

                            <a onClick={() => setUrl(false)}>Close</a>
                        </> : <>

                            <p>Fill out this form for your birthday present</p>
                            <div className={styles.formage}>
                                <form onSubmit={meme}>
                                    <div className="field">
                                        <div className="control">
                                            <label className="label">what you want for your bday</label>
                                            <input name="text0" placeholder="..." required={true} type="text" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                        <label className="label">"What you're probably gonna get</label>
                                            <input name="text1" placeholder="..." required={true} type="text" />
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
