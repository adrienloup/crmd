import type { ChildrenType } from '@/src/shared/types/Children.ts';
import styles from '@/src/shared/ui/main/Main.module.scss';

export const Main = ({ children }: { children: ChildrenType }) => {
  return (
    <main
      className={styles.main}
      role="main"
    >
      {children}
    </main>
  );
};
