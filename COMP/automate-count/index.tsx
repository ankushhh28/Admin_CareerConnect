import { useEffect, useState } from "react";

const Automate_Count = ({
  end,
  duration,
}: {
  end: number;
  duration: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor((duration * 1000) / end);
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Automate_Count;
