import React, { useEffect, useState } from "react";

function App() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => {
        if (prev === "red") return "amber";
        if (prev === "amber") return "green";
        return "red";
      });
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <div className="semaforo p-4 bg-light rounded-3 shadow">
        <div
          className={`light mb-3 ${light === "red" ? "bg-danger" : "bg-dark"}`}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        >
          <i className="fa fa-circle text-white"></i>
        </div>
        <div
          className={`light mb-3 ${light === "amber" ? "bg-warning" : "bg-dark"}`}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        >
          <i className="fa fa-circle text-white"></i>
        </div>
        <div
          className={`light ${light === "green" ? "bg-success" : "bg-dark"}`}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        >
          <i className="fa fa-circle text-white"></i>
        </div>
      </div>
    </div>
  );
}

export default App;

