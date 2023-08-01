import Typography from '@mui/material/Typography';
import type { Variant } from '@mui/material/styles/createTypography';

import { OverrideTextComponent } from 'utils/override';

function TypographyOverride(variant: Variant, component: React.ElementType, mt: string = '.25em') {
  return OverrideTextComponent(({ content, id }) =>
    <Typography variant={variant} id={id} component={component} mt={mt}>
      {content}
    </Typography>
  );
}

export default {
  H1: TypographyOverride('h3', 'h1'),
  H2: TypographyOverride('h5', 'h2', '1em'),
  P: TypographyOverride('body1', 'p'),
};
