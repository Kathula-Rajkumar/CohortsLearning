import React, { useCallback, useState, memo } from 'react';

// React.memo prevents this component from re-rendering unless its props change
const CounterButtons = memo(function CounterButtons({ onIncrement, onDecrement }) {
  console.log("CounterButtons re-rendered"); // This logs only when props change

  return (
    <div>
      {/* Buttons use the memoized callbacks passed from the parent */}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});

export default function Assignment1() {
  console.log("Assignment1 re rendered"); // Logs every time parent component renders

  // State to hold the current count
  const [count, setCount] = useState(0);

  // useCallback memoizes this function so it doesn't get recreated on every render
  const handleIncrement = useCallback(() => {
    // Functional update ensures we're using the most recent state value
    setCount(currentCount => currentCount + 1);
  }, []); // Empty dependency array means this callback never changes

  const handleDecrement = useCallback(() => {
    setCount(currentCount => currentCount - 1);
  }, []);

  return (
    <div>
      {/* Displays the current count */}
      <p>Count: {count}</p>

      {/* Passing memoized callbacks to a memoized child */}
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}


// learnings 
1.React.memo to prevent unwanted child re-renders

2.useCallback to stabilize function references



 What happens if CounterButtons re-renders?
If CounterButtons re-renders on every parent render, it’s not a functional problem—the app will still work exactly the same.
But it can cause performance issues in larger apps.

✅ No problem when:
CounterButtons is simple (like yours — a few buttons and no heavy computation)

The app is small or medium-sized

No complex children or slow operations are inside it

🟢 Conclusion: For small apps and components like yours, even if it re-renders, it’s perfectly fine.

⚠️ Potential problems when:
The component has expensive UI rendering (e.g., charts, long lists, animations)

It's part of a frequently updating tree (e.g., chat UI, real-time dashboards)

It triggers effects or calculations on every render

In these cases, unnecessary re-renders can noticeably slow things down, especially on lower-end devices.
  
