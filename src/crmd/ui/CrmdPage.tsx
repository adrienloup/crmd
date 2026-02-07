import { CrmdFilters } from '@/src/crmd/ui/filters/CrmdFilters.tsx';
import { CrmdList } from '@/src/crmd/ui/list/CrmdList.tsx';
import { CrmdPagination } from '@/src/crmd/ui/pagination/CrmdPagination.tsx';
import { CrmdResults } from '@/src/crmd/ui/results/CrmdResults.tsx';
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
