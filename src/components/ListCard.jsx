export default function ListCard({ brunch }) {
  return (
    <div className="brunch-card">
      <h3>{brunch.name}</h3>
      <p>{brunch.container}</p>
      <p>{brunch.ingredients}</p>
      <p>{brunch.instructions}</p>
    </div>
  );
}
