import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b">
        {React.Children.map(children, (child, index) => (
          <div
            onClick={() => setActiveTab(index)}
            className={`p-3 cursor-pointer text-center border-r border-gray-300 text-xl font-semibold 
            text-blue-900 hover:text-blue-600
            ${activeTab === index ? "bg-gray-200" : ""}`}
          >
            {child.props.title}
          </div>
        ))}
      </div>
      <div className="p-4">{children[activeTab].props.children}</div>
    </div>
  );
};

const Tab = ({ title, children }) => {
  return (
    <React.Fragment>
      {title && <h3 className="text-lg font-medium">{title}</h3>}
      {children}
    </React.Fragment>
  );
};

export { Tabs, Tab };
