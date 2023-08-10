import styles from './Sidebar.module.css';

export function Sidebar()
{
    return(
      <aside className={styles.sidebar}>
        <img className={styles.cover} src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=72'
        />
        <div className={styles.profile}>
          <strong> Adriel Henry</strong>
          <span>Web developer</span>
        </div>

        <footer>
          <a href='#'>
            Editar seu perfil
          </a>
        </footer>
      </aside>
    );
}