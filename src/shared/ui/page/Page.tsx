import { useEffect } from 'react';
import type { ChildrenType } from '@/src/shared/types/Children.ts';
import { Footer } from '@/src/shared/ui/footer/Footer.tsx';
import { Header } from '@/src/shared/ui/header/Header.tsx';
import { Main } from '@/src/shared/ui/main/Main.tsx';

export const Page = ({ children }: { children: ChildrenType }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
