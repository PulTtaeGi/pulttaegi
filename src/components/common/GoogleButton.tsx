// import React from 'react';
// import GoogleLogin from 'react-google-login';

// const clientId = "1077050750600-3ibkmim21jscs4bti61879e4qoqqhr3d.apps.googleusercontent.com";

// export default function GoogleButton({ onSocial }){
//     const onSuccess = async(response) => {
//     	console.log(response);
    
//         const { googleId, profileObj : { email, name } } = response;
        
//         await onSocial({
//             socialId : googleId,
//             socialType : 'google',
//             email,
//             nickname : name
//         });
//     }

//     const onFailure = (error) => {
//         console.log(error);
//     }

//     return(
//         <div>
//             <GoogleLogin
//                 clientId={clientId}
//                 responseType={"id_token"}
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}/>
//         </div>
//     )
// }
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Fragment } from "react";

const GoogleLoginButton = () => {
  return (
    <Fragment>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.error("Failed Login..");
          }}
        />
      </ GoogleOAuthProvider>
    </Fragment >
  );
};

export default GoogleLoginButton;
