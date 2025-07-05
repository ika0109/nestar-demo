// "use client";

import { useState } from "react";

export default function Community() {
    console.log("COMMUNITY COMPONENT - PAGES ROUTING ")
  const [title, setTitle] = useState<string>("hello mit");

  return (
    <div>
      COMMUNITY
      <button onClick={() => alert(title)} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
}
