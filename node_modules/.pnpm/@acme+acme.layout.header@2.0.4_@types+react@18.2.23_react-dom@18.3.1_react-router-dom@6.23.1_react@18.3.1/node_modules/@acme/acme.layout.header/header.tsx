import { Link } from '@bitdesign/sparks.navigation.link';
import { Header as SparksHeader } from '@bitdesign/sparks.layout.header';
import { Logo } from '@bitdesign/sparks.content.logo';
import type { ReactNode } from 'react';
import styles from './header.module.scss';

export type HeaderProps = {
  children?: ReactNode;
};

/**
 * header UI component for the Acme platform.
 */
export function Header({ children }: HeaderProps) {
  return (
    <SparksHeader className={styles.header} logo={<Logo href='/' src='https://static.bit.dev/extensions-icons/acme.svg' name='Acme' slogan='Platform' />}>
      <Link href='/discussions'>Discussions</Link>
      {children}
    </SparksHeader>
  );
}
