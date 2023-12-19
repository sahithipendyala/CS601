// MailchimpForm.js

import Head from 'next/head';

const MailchimpForm = () => {
  return (
    <>
      <Head>
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      </Head>
      <div id="mc_embed_shell">
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us21.list-manage.com/subscribe/post?u=346b5ce19ef1439dadc724ece&amp;id=1cf18948fb&amp;f_id=00efeee6f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            <div id="mc_embed_signup_scroll" style={{ textAlign: 'center' }}>
      
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_346b5ce19ef1439dadc724ece_1cf18948fb" tabIndex="-1" value="" />
              </div>
              <div className="optionalParent">
                <div>
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#3498db',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  />
                  <p style={{ margin: '10px 0', fontSize: '14px' }}>
                    <a href="http://eepurl.com/iF98z6" title="Mailchimp - email marketing made easy and fun">
                      <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                        <img
                          className="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{
                            width: '220px',
                            height: '40px',
                            display: 'flex',
                            padding: '2px 0px',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>

        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script type="text/javascript">
          {`
            (function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[0] = 'EMAIL';
              ftypes[0] = 'email';
              fnames[1] = 'FNAME';
              ftypes[1] = 'text';
              fnames[2] = 'LNAME';
              ftypes[2] = 'text';
              fnames[3] = 'ADDRESS';
              ftypes[3] = 'address';
              fnames[4] = 'PHONE';
              ftypes[4] = 'phone';
              fnames[5] = 'BIRTHDAY';
              ftypes[5] = 'birthday';
            })(jQuery);
            var $mcj = jQuery.noConflict(true);
          `}
        </script>
      </div>
    </>
  );
};

export default MailchimpForm;