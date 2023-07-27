import { Header } from './Components/Header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <aside> 
        sidebar
       </aside>
       <main>
        <Post
          author="Diego Fernandes"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
        />
        <Post
          author="Gabriel Buzzi"
          content="Um novo post muito legal"
        />
        <h1>teste brnch</h1>
    
       </main>
      </div>
    </div>
  );
}
/*<aside> signica colocar de lado, tudo o que
estiver entre os asides fica lateralmente na 
pagina*/