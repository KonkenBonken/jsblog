interface OverrideProp {
  children: {
    props: {
      children: string
    }
  }
}

type Override = (props: { content: string }) => JSX.Element;

export default function OverrideComponent(Component: Override) {
  return function OverrideWrapper(
    { children: { props: { children: content } } }: OverrideProp
  ) {
    return <Component content={content} />;
  };
}
