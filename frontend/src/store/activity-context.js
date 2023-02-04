import React from "react";

const ActivityContext = React.createContext({
  activities: [],
  addActivity: (activity) => {},
  editActivity: (activity) => {},
  deleteActivity: (activity) => {},
});

export default ActivityContext;
