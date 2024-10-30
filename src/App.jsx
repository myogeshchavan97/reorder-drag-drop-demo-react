import { Reorder } from "framer-motion";
import React, { useState } from "react";
import { FaGripLines, FaVideo } from "react-icons/fa";
import chapters from "./utils/constants";

function App() {
  const [listItems, setListItems] = useState(chapters);

  return (
    <div className="p-5 text-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Course Chapters</h1>
      <Reorder.Group
        className="max-w-md mx-auto mt-20"
        values={listItems}
        onReorder={setListItems}
      >
        {listItems.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
            whileDrag={{ scale: 1.05 }}
            className="flex items-center p-4 mb-5 bg-gray-100 rounded-lg shadow-md cursor-grab"
          >
            {/* Drag Icon */}
            <FaGripLines className="mr-3 text-gray-400" />

            {/* Video Icon */}
            <FaVideo className="mr-3 text-blue-500" />

            {/* Chapter Title */}
            <span className="text-gray-700 font-medium">{item.title}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default App;
