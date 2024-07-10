export default function Button(props: { btnName: string; clsName: string }) {
  return <button className={`${props.clsName} btn`}>{props.btnName}</button>;
}
