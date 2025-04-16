import React, { useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  const tambah = () => {
    setAngka(angka + 1);
  };

  return (
    <div style={Styles.container}>
      <button onClick={tambah} style={Styles.button}>
        Tambah keranjang
      </button>
    </div>
  );
}

const Styles = {
  container: {
    margin: "10px",
    padding: "10px",
    justifyContent: "left",
    alignItems: "left",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "15px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Counter;
