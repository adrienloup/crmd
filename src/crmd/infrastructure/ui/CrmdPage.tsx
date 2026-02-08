import { CrmdFilters } from '@/src/crmd/infrastructure/ui/filters/CrmdFilters.tsx';
import { CrmdList } from '@/src/crmd/infrastructure/ui/list/CrmdList.tsx';
import { CrmdPagination } from '@/src/crmd/infrastructure/ui/pagination/CrmdPagination.tsx';
import { CrmdResults } from '@/src/crmd/infrastructure/ui/results/CrmdResults.tsx';
import { Page } from '@/src/shared/ui/page/Page.tsx';

export const CrmdPage = () => {
  return (
    <Page>
      <CrmdFilters />
      <CrmdResults />
      <CrmdList />
      <CrmdPagination />
    </Page>
  );
};
