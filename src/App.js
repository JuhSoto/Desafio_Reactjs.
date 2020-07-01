import React, { useState, useEffect} from "react";
import api from './services/api'
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {
    // TODO
    const {data} = await api.post('repositories', {
      title: "Novo projeto",
      url: "https://github.com/JuhSoto",
      techs: ["React"]
      
    })
    
    setRepositories([...repositories, data])
  }

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`repositories/${id}`)

      setRepositories(repositories.filter(repository => repository.id !== id))
    }
    
    

  return (
    <div>
      <ul data-testid="repository-list">{

        repositories.map(repository =>
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
          
        </li>
        )
      }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );

  }
export default App;
