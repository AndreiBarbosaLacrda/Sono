
import styles from './styles.module.css';

export function boasvindas() {
  return (
    <div className={styles['boas-vindas']}>
      <h2>Bem-vindo ao Contado!</h2>
      <p>Use os botões a abixo para contara pois vc é tão burro que não consegue fazer isso de cabeça</p>
    </div>
  );
}


import image from '../images.jfif';
export function Imagem() {
  return (
    <div className='fff'>
      <img src={image} alt="Imagem" />
    </div>
  );
}