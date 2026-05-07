export const ProductListSkeleton = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: 220,
            height: 250,
            background: "#eee",
            borderRadius: 12,
          }}
        />
      ))}
    </div>
  );
};
