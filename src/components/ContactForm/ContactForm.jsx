import { Component } from "react";
import css from "./ContactForm.module.css"

class ContactForm extends Component {

state ={
 name: '',
 number: '',
}    


hangleChange = event=>{
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
}

handleSabmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });

}


render(){
    return(
    <div>
    <h1>Phonebook</h1>
        <div className={css.formDiv}>
            <form onSubmit={this.handleSabmit}>
                <label>
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
                 </label>
            </form>
            <form>
                Number
                <input
                className={css.contactInput}
                type="tel"
                name="number"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.hangleChange}
                value={this.state.number}
                 /> 
                 <button className={css.sabmitBtn} type="submit">Add contact</button>
            </form>
        </div>

        </div>
    )
}
}

export default ContactForm;
