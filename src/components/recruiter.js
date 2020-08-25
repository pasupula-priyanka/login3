import React from 'react';
import {Button,Form,FormGroup,Input, Label} from 'reactstrap';
import {FacebookLoginButton,GoogleLoginButton,GithubLoginButton} from 'react-social-login-buttons';
import {Link} from 'react-router-dom'

function Signup(){
    return(
        <React.Fragment>
        <Form className="login-form">
        <h1>
         <span className="font-weight-bold">Kickstartx</span>.com
          </h1>
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
        <Label>Company Name</Label>
        <Input type="text" placeholder="Enter your company's name"/>
          </FormGroup>
          <FormGroup>
          <Label>UserName</Label>
        <Input type="text" placeholder="Enter your UserName"/>
          </FormGroup>
          <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter your Email"/>
      </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="password"/>
          </FormGroup>
          <Button className="btn-lg btn-light btn-block">Signup</Button>
          <div className="text-center pt-3">
               Or continue with Facebook or Google or Github
          </div>
          <FacebookLoginButton className="mt-3 mb-3"/>
          <GoogleLoginButton className="mt-3 mb-3"/>
          <GithubLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            <Link to="/">Already existing user?</Link>
          </div>
        </Form>
        </React.Fragment>
    )
}

export default Signup;