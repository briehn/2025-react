import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

import React, { useEffect } from 'react';

const PostRequestComponent = () => {
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'email': 'you@example.com' }),
        });
        

        const result = await response.json();
        console.log('Response:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    postData();
  }, []);

  return <div>Sending POST request...</div>;
};


function App() {

  return (
    <div>
      <PostRequestComponent/>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
