/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';



const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    setId(Date.now());
  }, []);
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
      <Flex as="form" sx={styles.form} {...props} action="https://ml.kundenserver.de/cgi-bin/mailinglist.cgi" method="POST" target="_blank">
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
          <input checked name="subscribe_r" type="hidden" value="subscribe"/>
            <Input
              type="email"
              id={`email-${id}`}
              placeholder="Enter Email address"
              value={email}
              onChange={handleEmail}
            />
          <input maxLength="51" name="mailaccount_r" value={email} size="51" type="hidden"/>
          <input maxLength="51" name="mailaccount2_r" type="hidden" value={email} size="51"/>
                  <input name="FBMLNAME" type="hidden" value="mailinglist@rosai.co.uk"/>
                    <input name="FBLANG" type="hidden" value="en"/>
                      <input name="FBURLERROR_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/error.en.html"/>
                      <input name="FBURLSUBSCRIBE_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/subscribe.en.html"/>
                    <input name="FBURLUNSUBSCRIBE_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/unsubscribe.en.html"/>
              <input name="FBURLINVALID_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/invalid.en.html"/>
          <Button type="submit">{buttonLabel ?? 'Get Started'}</Button>
      </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
