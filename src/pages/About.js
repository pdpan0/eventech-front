import React from 'react';

function About({ user, login, logout }) {
  return <div>oi mundo {user.username}
      <button onClick={()=>login('nossa', "delicia")}>Apareça coisa bela</button>
      <button onClick={()=>logout()}>Apareça coisa bela</button>
  </div>;
}

export default About;