interface Props {
  children: JSX.Element;
}

const ExternalLink = ({ children, ...props }: Props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
