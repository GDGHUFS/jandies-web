import { FC, ReactElement } from 'react';

import Layout from '@/components/Layout';

import ContributionCalendar from './contributionCalender';


const UserPage: FC = (): ReactElement => {
  return (
    <Layout>
      <div>
        <ContributionCalendar username="ggsong0328" year={2024} />
      </div>
    </Layout>
  );
};

export default UserPage;
