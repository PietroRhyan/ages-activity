import { useState } from "react";

export function Counter() {
  const [counting, setCounting] = useState(0);

  function adding() {
    setCounting(counting + 1)
  }

  return (
    <div>
      <button onClick={adding}>Adicionar</button>
      <p>{counting}</p>
    </div>
  )
}