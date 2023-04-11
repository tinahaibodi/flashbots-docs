import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import { Analytics } from '@vercel/analytics/react';
import { MetaMaskProvider } from "metamask-react"
type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <MetaMaskProvider>
        <Layout {...props} />
        <Analytics />
      </MetaMaskProvider>
    </>
  );
}
