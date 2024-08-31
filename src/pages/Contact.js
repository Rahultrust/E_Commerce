import React from "react";

function Contact() {
  return (
    <section className='container mt-5'>
      {/*Contact heading*/}
      <div className='row'>
        <div className='col-sm-12 text-center mb-4'>
          <a
            className='btn btn-primary'
            target='_blank'
            href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f8876459b9ac2&mfid=1619175810225_f8876459b9ac2#/checkout/openButton'
          >
            {" "}
            Donate Now <i className='fa fa-dollar' />
          </a>
        </div>
        {/*Grid column*/}
        <div className='col-sm-12 mb-4 col-md-5'>
          {/*Form with header*/}
          <div className='card border-primary rounded-0'>
            <div className='card-header p-0'>
              <div className='bg-primary text-white text-center py-2'>
                <h3>
                  <i className='fa fa-envelope' /> Write to us:
                </h3>
                <p className='m-0'>
                  We’ll write rarely, but only the best content.
                </p>
              </div>
            </div>
            <div className='card-body p-3'>
              <div className='form-group'>
                <label> Your name </label>
                <div className='input-group'>
                  <input
                    defaultValue=''
                    type='text'
                    name='data[name]'
                    className='form-control'
                    id='inlineFormInputGroupUsername'
                    placeholder='Your name'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label>Your email</label>
                <div className='input-group mb-2 mb-sm-0'>
                  <input
                    type='email'
                    defaultValue=''
                    name='data[email]'
                    className='form-control'
                    id='inlineFormInputGroupUsername'
                    placeholder='Email'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label>Subject</label>
                <div className='input-group mb-2 mb-sm-0'>
                  <input
                    type='text'
                    name='data[subject]'
                    className='form-control'
                    id='inlineFormInputGroupUsername'
                    placeholder='Subject'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label>Message</label>
                <div className='input-group mb-2 mb-sm-0'>
                  <input type='text' className='form-control' name='mesg' />
                </div>
              </div>
              <div className='text-center'>
                <input
                  type='submit'
                  name='submit'
                  defaultValue='submit'
                  className='btn btn-primary btn-block rounded-0 py-2'
                />
              </div>
            </div>
          </div>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className='col-sm-12 col-md-7'>
          {/*Google map*/}
          <div className='mb-4'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin'
              width='100%'
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=''
              aria-hidden='false'
              tabIndex={0}
            />
          </div>
          {/*Buttons*/}
          <div className='row text-center'>
            <div className='col-md-4'>
              <a className='bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block'>
                <i className='fa fa-map-marker' />
              </a>
              <p> Your Address ….. </p>
            </div>
            <div className='col-md-4'>
              <a className='bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block'>
                <i className='fa fa-phone' />
              </a>
              <p>+91- 8969580199</p>
            </div>
            <div className='col-md-4'>
              <a className='bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block'>
                <i className='fa fa-envelope' />
              </a>
              <p> rahul.kumar525757@gmail.com</p>
            </div>
          </div>
        </div>
        {/*Grid column*/}
      </div>
    </section>
  );
}

export default Contact;
