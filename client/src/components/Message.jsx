export default function Message({ name, message }) {
  return (
    <div className="comment">
      <span>{name}</span>
      <p>{message}</p>
    </div>
  );
}
