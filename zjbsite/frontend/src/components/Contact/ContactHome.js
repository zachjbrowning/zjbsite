import React, {Component} from 'react'
import Logo from '../Nav/Logo'
import getCookie from '../Cookie'

class ContactHome extends Component {
    constructor() {
        super()
        this.submitForm = this.submitForm.bind(this)
    }
    
    componentDidMount() {
        document.body.scrollTo(0,0)
    }
    submitForm(event) {
        event.preventDefault();
        document.getElementById("unsubmitted").style.display = "none"
        document.getElementById("submitted").style.display = "flex"
        const data = new URLSearchParams()
        data.append('name', event.target.elements.name.value)
        data.append('email', event.target.elements.email.value)
        data.append('phone', event.target.elements.name.value)
        data.append('message', event.target.elements.name.value)
        const options = {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type':  'application/x-www-form-urlencoded',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: data
        }
        
        fetch('contact', options).then(response => {return response.json()}).then(json => this.submissionDone(json['result']))
    }
    submissionDone(result) {
        document.getElementById("done").innerHTML = result
        document.getElementById("loading").style.display = "none"
        document.getElementById("done").style.display = 'flex'
    }
    render() {
        return (
            <div className="contact-box contact-header">
                <div id="unsubmitted">
                    Fill out the form below if you want to get in contact with me!
                    <br/>
                    <br/>
                    <form id="contact-form" className="contact-form" onSubmit={this.submitForm}>
                        <input type="text" maxLength={150} required={true} placeholder="name" name="name"/>
                        <input type="email" required={true} placeholder="email" name="email"/>
                        <input type="text" maxLength={15} placeholder="phone" name="phone"/>
                        <textarea required={true} maxLength={2000} rows="4" placeholder="message" name="message"/>
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div id="submitted">
                    <div id="loading" className="form-loading">
                        <Logo/>
                    </div>
                    <div id="done">
                        Form submitted! I'll be in touch as soon as I can.
                    </div>
                </div>
            </div>
        )
    }
}


export default ContactHome