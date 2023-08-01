import Typography from '@mui/material/Typography';
import type { Variant } from '@mui/material/styles/createTypography';

import { OverrideTextComponent } from 'utils/override';

function TypographyOverride(variant: Variant, component: React.ElementType) {
  return OverrideTextComponent(({ content, id }) =>
    <Typography variant={variant} id={id} component={component} gutterBottom>
      {content}
    </Typography>
  );
}

export default {
  H1: TypographyOverride('h3', 'h1'),
  H2: TypographyOverride('h4', 'h2'),
  P: TypographyOverride('body1', 'p'),
};
