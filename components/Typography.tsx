import Typography from '@mui/material/Typography';
import type { Variant } from '@mui/material/styles/createTypography';

import { OverrideTextComponent } from 'utils/override';

function TypographyOverride(variant: Variant) {
  return OverrideTextComponent(({ content, id }) =>
    <Typography variant={variant} id={id} gutterBottom>
      {content}
    </Typography>
  );
}

export default {
  H1: TypographyOverride('h1'),
  H2: TypographyOverride('h2'),
  P: TypographyOverride('body1'),
};
