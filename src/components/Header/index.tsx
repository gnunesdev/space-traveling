import Image from 'next/image';
import SpaceLogo from '../../../public/assets/logo.svg';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <SpaceLogo />
      <h1>spacetraveling</h1>
      <span>.</span>
    </div>
  );
}
