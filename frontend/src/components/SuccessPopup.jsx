import React, { useEffect } from "react";

const SuccessPopup = ({ message = "Success", onClose, duration = 3000 }) => {
  useEffect(() => {
    const t = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div
      className="position-fixed top-0 start-50 translate-middle-x mt-4"
      style={{ zIndex: 99999, pointerEvents: "auto" }}
    >
      <div
        className="d-flex align-items-center shadow-lg"
        style={{
          background: "linear-gradient(90deg,#1fa26a,#15aabf)",
          color: "white",
          borderRadius: 12,
          padding: "12px 18px",
          minWidth: 300,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
        role="status"
      >
        <div style={{ fontSize: 20, marginRight: 12 }}>✅</div>

        <div style={{ flex: 1, fontWeight: 600 }}>{message}</div>

        <button
          onClick={() => onClose?.()}
          aria-label="close"
          className="btn"
          style={{
            color: "white",
            background: "transparent",
            border: "none",
            padding: 0,
            marginLeft: 12,
          }}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
