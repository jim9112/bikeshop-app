const WorkOrderList = () => {
  return (
    <div className="bg-white">
      <header className="w-full grid grid-cols-5">
        <h2>Customer</h2>
        <h2>Recieved</h2>
        <h2>Status</h2>
        <h2>Amnt Due</h2>
        <h2>Description</h2>
      </header>
      <div className="w-full grid grid-cols-5"></div>
    </div>
  );
};

export default WorkOrderList;
