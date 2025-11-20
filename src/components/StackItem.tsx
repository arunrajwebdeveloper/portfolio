import Tooltip from "./Tooltip";

const StackItem = ({
  stack,
}: {
  stack: { title: string; icon: string; alt: string };
}) => {
  return (
    <div className="group w-1/9 p-6 relative">
      <Tooltip title={stack.title} />
      <img
        src={stack.icon}
        alt={stack.alt}
        className="align-middle max-w-full"
      />
    </div>
  );
};

export default StackItem;
