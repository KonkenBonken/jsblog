export function OverrideCodeComponent(Component: (props: { content: string }) => JSX.Element) {
  return function OverrideWrapper(
    { children: { props: { children: content } } }: { children: { props: { children: string } } }
  ) {
    return <Component content={content} />;
  };
}

export function OverrideTextComponent(Component: (props: { content: string, id?: string }) => JSX.Element) {
  return function OverrideWrapper(
    { children: [content], id }: { children: string[], id: string }
  ) {
    return <Component content={content} id={id} />;
  };
}
