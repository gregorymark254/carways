import React from 'react'
import {Link} from 'react-router-dom'

const Faqs = () => {
  return (
    <main>
      <div className="text-center p-4">
        <h3 className="text-2xl font-bold">FAQs Page</h3>
        <p>FOOTZY / Faqs</p>
      </div>

      <div className="bg-[#f1ebf5]">
        <div className="container mx-auto p-4">
          <div className="text-center py-6">
            <h2>How can we help you?</h2>
            <p>Ask a question or describe the problem you are facing.</p>
          </div>

          <h3 className="text-center">Help Guides</h3>
          <div className="grid grid-cols-4 gap-6 p-6">
            <div>
              <h4>CRM & HELP DESK</h4>
              <ul>
                <li><Link to="">Eleifend tellus</Link></li>
                <li><Link to="">Vamus elementum</Link></li>
                <li><Link to="">Consequat vitae</Link></li>
                <li><Link to="">Dictum felis eu</Link></li>
              </ul>
            </div>
            <div>
              <h4>CMS INTEGRATION</h4>
              <ul>
                <li><Link to="">Eleifend tellus</Link></li>
                <li><Link to="">Vamus elementum</Link></li>
                <li><Link to="">Consequat vitae</Link></li>
                <li><Link to="">Dictum felis eu</Link></li>
              </ul>
            </div>
            <div>
              <h4>SHOPPING CARTS</h4>
              <ul>
                <li><Link to="">Eleifend tellus</Link></li>
                <li><Link to="">Vamus elementum</Link></li>
                <li><Link to="">Consequat vitae</Link></li>
                <li><Link to="">Dictum felis eu</Link></li>
              </ul>
            </div>
            <div>
              <h4>CMS BLOCK</h4>
              <ul>
                <li><Link to="">Eleifend tellus</Link></li>
                <li><Link to="">Vamus elementum</Link></li>
                <li><Link to="">Consequat vitae</Link></li>
                <li><Link to="">Dictum felis eu</Link></li>
              </ul>
            </div>
          </div>

          <h3 className="text-center p-4">Popular Questions</h3>
          <div className="md:grid grid-cols-2 gap-4 py-6  divide-x-2">
            <div>
              <h3><u>Account Questions</u></h3>
              <h3>Eleifend option congue nihil imperdiet ?</h3>
              <p>Anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                 Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
              </p>
              <br />
              <h3>I am not getting any reply from Your Company</h3>
              <p>Sometimes, emails goes to SPAM, so also check your SPAM(JUNK) mails.
                If you haven't receive any email from us email us at support [at] templatemela [dot] com.
              </p>
              <br />
              <h3>How do I get my download?</h3>
              <p>After complete your payment Instant Download link will be available. You can download your products 
                from the "My Downloadable Product" under "My Account". Also There is a link on top of the website "My Downloads".
                You can download your products from there.
              </p>
              <br />
              <h3>Error to extract ZIP File, I can not extract ZIP file even I have password.</h3>
              <p>Anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                Please make sure you are using Windows PC to extract ZIP file.
              </p>
       
            </div>

            <div>
              <h3><u>General Questions</u></h3>
            </div>
          </div>
          
          <div className="md:grid grid-cols-3 gap-4 py-12">
            <div>
              <h3>Live Chat</h3>
              <p>Chat Directly With A Megnor Guru For Immediate Answers To Your Questions.</p>
            </div>
            <div>
              <h3>EMAIL US</h3>
              <p>Reach Us By Email Any Time! We’ll Do Our Best To Respond As Quickly As Possibl</p>
            </div>
            <div>
              <h3>CALL US 24X7</h3>
              <p>Talk To Us Directly For Additional Help Immediate Answers To Your Questions.</p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default Faqs
