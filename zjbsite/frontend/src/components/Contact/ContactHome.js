import React, {Component} from 'react'
import Logo from '../Nav/Logo'
import getCookie from '../Cookie'

class ContactHome extends Component {
    constructor() {
        super()
        this.state = {
            token : getCookie('csrftoken')
        }
        this.submitForm = this.submitForm.bind(this)
    }
    
    componentDidMount() {
        document.body.scrollTo(0,0)
    }
    submitForm(event) {
        event.preventDefault();
        document.getElementById("unsubmitted").style.display = "none"
        document.getElementById("submitted").style.display = "flex"
        const options = {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': this.state.token
            },
            POST: { 
                'name': event.target.elements.name.value,
                'email': event.target.elements.email.value,
                'phone': event.target.elements.phone.value,
                'message': event.target.elements.message.value 
            }
        }
        console.log(options)
        let result = fetch('contact', options)
        console.log(result)
    }
    render() {
        return (
            <div className="contact-box contact-header">
                <div id="unsubmitted">
                    Fill out the form below if you want to get in contact with me!
                    <br/>
                    <br/>
                    <form className="contact-form" onSubmit={this.submitForm}>
                        <input type="text" required={true} placeholder="name" name="name"/>
                        <input type="text" required={true} placeholder="email" name="email"/>
                        <input type="text" placeholder="phone" name="phone"/>
                        <textarea required={true} rows="4" placeholder="message" name="message"/>
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div id="submitted">
                    <div id="loading" className="form-loading">
                        <Logo/>
                    </div>
                </div>
            </div>
        )
    }
}


export default ContactHome