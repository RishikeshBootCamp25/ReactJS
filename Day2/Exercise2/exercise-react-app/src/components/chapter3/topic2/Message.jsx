export default function Message({ text = "", name = "", about = "" }) {
  return (
    <>
      <p>{text}</p>
      <p><strong>{name}</strong></p>
      <p>{about}</p>
    </>
  );
}