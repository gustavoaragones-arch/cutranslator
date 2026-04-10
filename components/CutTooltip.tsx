type Props = {
  label: string;
  x: number;
  y: number;
};

export default function CutTooltip({ label, x, y }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: y + 12,
        left: x + 12,
        zIndex: 999,
        pointerEvents: "none",
        background: "linear-gradient(135deg, #3B0A1E, #7A1F3D)",
        color: "#f5ece6",
        padding: "6px 10px",
        borderRadius: "8px",
        fontSize: "13px",
        border: "1px solid rgba(240,217,142,0.3)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
      }}
    >
      {label}
    </div>
  );
}
