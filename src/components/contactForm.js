import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_9h6t5a8','template_0vgjacl',e.target,'user_rLcknqGM3eVPUmTnndWOJ').then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
    }

    return(
        <div>
            <h1 className="text-center m-3">Email Services</h1>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}