import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ConnectView } from 'src/sections/connect/view';

// ----------------------------------------------------------------------

export default function Page() {
  console.log('ConnectPage loaded'); // Debugging log
  return (
    <>
      <Helmet>
        <title> {`Connect - ${CONFIG.appName}`}</title>
      </Helmet>

      <ConnectView />
    </>
  );
}
