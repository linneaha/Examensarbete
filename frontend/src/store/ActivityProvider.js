import ActivityContext from "./activity-context";

const ActivityProvider = (props) => {
  const addActivityHandler = (activity) => {};
  const editActivityHandler = (activity) => {};
  const deleteActivityHandler = (activity) => {};

  const activityContext = {
    activities: [],
    addActivity: addActivityHandler,
    editActivity: editActivityHandler,
    deleteActivity: deleteActivityHandler,
  };

  return (
    <ActivityContext.Provider value={activityContext}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
