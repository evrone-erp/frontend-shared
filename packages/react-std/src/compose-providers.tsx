import type { ReactNode } from 'react';
import { createElement } from 'react';

type ComposeProvidersProps = { providers: JSX.Element[]; children: ReactNode };

export function ComposeProviders({ providers, children }: ComposeProvidersProps): JSX.Element {
  return providers.reduceRight(
    (c, providerElement): ReactNode => createElement(providerElement.type, providerElement.props, c),
    children,
  ) as JSX.Element;
}
