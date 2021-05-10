import { useState } from 'react';
import { sampleData } from '../lib/sampleWorkOrders';
import SingleWorkOrder from './SingleWorkOrder';

const WorkOrderList = () => {
  const [workOrder, setWorkOrder] = useState(sampleData);
  return (
    <div className="bg-white container mx-auto">
      <header className="w-full grid grid-cols-5">
        <h2>Customer</h2>
        <h2>Recieved</h2>
        <h2>Status</h2>
        <h2>Amnt Due</h2>
        <h2>Description</h2>
      </header>
      <div className="w-full">
        {workOrder.map((singleOrder) => (
          <SingleWorkOrder
            key={singleOrder.id}
            lastName={singleOrder.lastName}
            firstName={singleOrder.firstName}
            recieved={singleOrder.recieved}
            status={singleOrder.status}
            amntDue={singleOrder.amntDue}
            notes={singleOrder.notes}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkOrderList;
