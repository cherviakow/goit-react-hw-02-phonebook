import { Component } from "react";
import css from "./ContactForm.module.css"

class ContactForm extends Component {

state ={
 name: '',
 number: '',
}    


hangleChange = ({target})=>{
this.setState({
    [target.name]: target.value,
});
}

handleSubmit = (e)=>{
e.preventDefault();
}


render(){
    return(
    <>
    <h1>Phonebook</h1>
        <div className={css.formDiv}>
            <form onSubmit={this.handleSubmit}>
                Name
                <input
                className={css.contactInput}
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.hangleChange}
                value={this.state.name}
                 /> 
            </form>
            <form>
                Number
                <input
                className={css.contactInput}
                type="text"
                name="number"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.hangleChange}
                value={this.state.number}
                 /> 
            </form>
            <button className={css.sabmitBtn}>Add contact</button>



        </div>

        </>
    )



}



}

export default ContactForm;
