// iremos simular o cabecalho da logo ignite
import styles from './Header.module.css'; // importacao do css exclusivo do cabecalho
import igniteLogo from '../imagens/igniteLogo.svg';//importacao da imagem do cabecalho

export function Header() {
  return (
    <header className={styles.header}>
      <img src= {igniteLogo} alt= "logotipo do ignite " />
    </header>
  );
}