import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


 
function Login() {
    return (
<Grid>
    <Header> Login </Header>
      <Form size= "large" >
      <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type='email' />
      <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
        
        
        <button class="ui inverted secondary button" type="submit">Login</button>
      </Form>
  </Grid>
);

}

export default Login;