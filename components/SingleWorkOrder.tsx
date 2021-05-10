type ComponentProps = {
  lastName: string;
  firstName: string;
  recieved: string;
  status: string;
  amntDue: number;
  notes: string;
};

const SingleWorkOrder = ({
  lastName,
  firstName,
  recieved,
  status,
  amntDue,
  notes,
}: ComponentProps) => {
  return (
    <div className="w-full grid grid-cols-5">
      <p>{`${lastName}, ${firstName}`}</p>
      <p>{recieved}</p>
      <p>{status}</p>
      <p>{amntDue}</p>
      <p>{notes}</p>
    </div>
  );
};

export default SingleWorkOrder;
