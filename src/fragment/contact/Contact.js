import { useTranslation } from 'react-i18next';
import Button from '../../component/button/Button';
import Title from '../../component/title/Title';
import './contact.css';

function Contact() {
  
  let {t} = useTranslation();
    
    return (
      <section id="contact" className='container'>
        <Title text={t("nav.Contact")} />
        <form action="https://formsubmit.co/8d47e0d6cd9ae8cf54f26b3abbb43b02" method="POST">
          <div className='contact-blocks'>
            <div className='contact-block'>             
              <input name='name' type='text' placeholder={t("Name")} required/>
              <input name='email' type='email' placeholder={t("Email")} required/>
              <input name='subject' type='text' placeholder={t("Subject")} required/>
              <input type="text" name="_honey" style={{display:'none'}}/>
            </div>
            <div className='contact-block'>
              <textarea name='message' placeholder={t("Message")} rows="2"/>
              <div className='form-button-container'>
                <Button style='secondary' type='submit' text={t("Send")} />
              </div>
            </div>
          </div>
        </form>
      </section>  
    );

}

export default Contact;