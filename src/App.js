import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId='1028988153170-7pk4ccv93npnacft7oiqv0hi28ej4nl7.apps.googleusercontent.com'>
      <GoogleLogin
        buttonText='Login'
        onSuccess={(response) => {
          console.log('response', response)
          fetch('http://localhost:3000/authentication/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: response.credential
            }),
          }).then(response => response.json()).then((data) => console.log(data));
        }}
        onError={(err) => console.log(err)}
      />
    </GoogleOAuthProvider>
  );
}

export default App;
