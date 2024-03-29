import Link from '@material-ui/core/Link';
import React, { forwardRef, memo } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type AppLinkVariant =
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'overline'
  | 'srOnly'
  | 'inherit'
  | undefined;

export type AppLinkProps = {
  to: string;
  variant: AppLinkVariant;
  className?: string;
  text: string;
};

const CollisionLink = forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'innerRef'>
>((props, ref) => <RouterLink innerRef={ref as any} {...props} />);

export const AppLink = memo(({ text, ...rest }: AppLinkProps) => {
  return (
    <Link component={CollisionLink} {...rest}>
      {text}
    </Link>
  );
});
