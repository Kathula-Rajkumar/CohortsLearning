// Import React and necessary hooks
import React, { useState, useMemo } from "react";

// Define the component
export const Assignment3 = () => {

  // Initialize `items` as state with a list of objects (each with name and value)
  // This state is static (not changing), so we don't use setItems here
  const [items] = useState([
    { name: "chocolate", value: 10 },
    { name: "biscuits", value: 10 },
    { name: "pen", value: 10 },
    { name: "mouse", value: 100 }
  ]);

  // useMemo is used to optimize the calculation of totalValue.
  // It only recalculates when `items` changes (which it won’t here).
  const totalValue = useMemo(() => {
    let total = 0;

    // Loop through the items array and add up the `value` of each item
    for (let i = 0; i < items.length; i++) {
      total += items[i].value;
    }

    // Return the total to be stored in `totalValue`
    return total;
  }, [items]); // Dependency array — this ensures calculation only when `items` changes

  return (
    <div>
      {/* Render each item in an unordered list */}
      <ul>
        {items.map((item, index) => (
          // Use index as key (OK here because list is static)
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>

      {/* Display the total value calculated from useMemo */}
      <p>Total value : ${totalValue}</p>
    </div>
  );
};


//outputs
total value as 130
