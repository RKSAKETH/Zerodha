export default function ZeroMarginLayout({ children }) {
  return (
    <div style={{ marginLeft: '10rem', marginRight: '10rem' }}>
      {children}
    </div>
  );
}
