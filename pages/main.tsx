import Header from '../components/Header';
import WorkOrderList from '../components/WorkOrderList';

const Main = () => {
  return (
    <div className="h-full">
      <Header />
      <h1>Main Page</h1>
      <WorkOrderList />
    </div>
  );
};

export default Main;
