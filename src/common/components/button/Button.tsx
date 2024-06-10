import'./Button.scss'

export type ButtonArg = {
  onClick: () => void;
  child: JSX.Element | JSX.Element[];
};

export function Button(arg: ButtonArg) {
  return <div className="buttonBG" onClick={arg.onClick}>{arg.child}</div>;
}
