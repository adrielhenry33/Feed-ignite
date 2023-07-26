// iremos simular o cabecalho da logo ignite
import styles from './Header.module.css'; // importacao do css exclusivo do cabecalho

export function Header() {
  return (
    <header className={styles.header}>
      <strong> Ignite feed </strong>
    </header>
  );
}