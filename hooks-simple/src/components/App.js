import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [currentResource, setCurrentResource] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setCurrentResource('posts')}>
          Posts
        </button>
        <button onClick={() => setCurrentResource('todos')}>
          Todos
        </button>
      </div>
      <ResourceList resource={currentResource}/>
    </div>
  );
}

export default App;