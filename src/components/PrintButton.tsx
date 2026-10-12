"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="btn btn--navy"
      onClick={() => window.print()}
      style={{ marginTop: "1.5rem" }}
    >
      Download / print
    </button>
  );
}
