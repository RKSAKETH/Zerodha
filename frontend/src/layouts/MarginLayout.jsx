export default function MarginLayout({ children }) {
  return (
    <div style={{ marginLeft: "15rem", marginRight: "15rem" }}>
      {children}
    </div>
  );
}