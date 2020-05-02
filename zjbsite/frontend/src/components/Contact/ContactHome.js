import React, {Component} from 'react'
import Logo from '../Nav/Logo'

class ContactHome extends Component {
    componentDidMount() {
        document.body.scrollTo(0,0)
    }
    submitForm(event) {
        event.preventDefault();
        const name = event.target.elements.name.value 
        const email = event.target.elements.email.value
        const phone = event.target.elements.phone.value
        const message = event.target.elements.message.value
        console.log(name, email, phone, message)
        document.getElementById("unsubmitted").style.display = "none"
        document.getElementById("submitted").style.display = "flex"
        
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
                    <div className="form-loading">
                        <Logo/>
                    </div>
                </div>
            </div>
        )
    }
}


export default ContactHome