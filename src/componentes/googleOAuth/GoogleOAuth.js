import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"
import Cookies from 'universal-cookie';

function GoogleOAuth() {
    const cookies = new Cookies()
  return (
    <div>
        <GoogleOAuthProvider clientId="84916919224-r7qq25ncce5j8u27eu97raudm7cb4nvd.apps.googleusercontent.com">
            <GoogleLogin
                
                onSuccess={credentialResponse => {
                const credentialResponseDecode =jwtDecode(credentialResponse.credential)
                cookies.set('email', credentialResponseDecode.email,{
                    secure: true,
                    sameSite: 'none',
                    path: '/'
                })
                cookies.set('nombres', credentialResponseDecode.name,{
                    secure: true,
                    sameSite: 'none',
                    path: '/'
                })
                cookies.remove('apellidos', {path: "/"});
                window.location.hash = '/sesion'
                }}
                onError={() => {
                console.log('Login Failed');
                }}
                />
        </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleOAuth