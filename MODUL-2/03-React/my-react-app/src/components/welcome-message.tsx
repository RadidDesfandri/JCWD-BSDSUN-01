interface IWelcomeMessageProps {
  name: string;
  message: string;
  indicatorMessage?: string;
  isError?: boolean;
}

function WelcomeMessage(props: IWelcomeMessageProps) {
  const indicatorStyle = {
    color: props.isError ? "red" : "white",
    backgroundColor: props.isError ? "none" : "black",
    borderRadius: "999px",
    padding: "4px 16px",
    border: props.isError ? "1px solid red" : "none",
  };

  return (
    <div>
      <h1>
        Hi {props.name}!, {props.message}
      </h1>

      {props.indicatorMessage && (
        <span style={indicatorStyle}>
          {props.isError ? "Error!" : props.indicatorMessage}
        </span>
      )}
    </div>
  );
}

export default WelcomeMessage;
