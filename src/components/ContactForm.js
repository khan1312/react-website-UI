import { Send } from '@mui/icons-material';
import './ContactForm.css'

function ContactForm () {

    
    return(
        <>
  <h1>Contact Us</h1>
        <div className='main'>
            
            <div className='form-side'>
          
            <form action='https://formspree.io/f/xayrzjza' method='POST'>
                <input type='text' name='Name' placeholder='Name' autoComplete='off'  required/>
                <input type='email' name='email' placeholder='Email' autoComplete='off'  required />
                <input type='number' name='phone' placeholder='Phone' autoComplete='off'  required />
                <input type='text' name='subject' placeholder='Subject' autoComplete='off'  required />
                <input type='file' name='file' placeholder='Upload' autoComplete='off'  required />
                <textarea placeholder='Message' name='message'   rows={3}/>
                <input  className="aplbtn" type='submit' value="Apply Now" />
              
            </form>
            </div>

            <div className='text-side'>
             <p><b><i class="fa-solid fa-location-dot"></i> Address :</b>  Ganganager,Bangalore, Karnataka 560032 </p>
             <p><b><i class="fa-solid fa-envelope"></i> Email :</b>  info@gmail.com</p>
             <p><b><i class="fa-solid fa-phone-volume"></i> Phone :</b>  7875010669 </p>
             
            </div>

            

        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492875466!2d77.3012694531081!3d12.954459531495921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716461887384!5m2!1sen!2sin" 
             width="100%"
              height="350" style={{border:0}}
              AllowFullScreen="" loading="fast" 
              referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default ContactForm;