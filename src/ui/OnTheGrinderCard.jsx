import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

import LinkButton from "./LinkButton";
import IconButton from "./IconButton";
import Modal from "./Modal";
import Card from "./Card";

const OnTheGrinderCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Card>
      <OnTheGrinderCard.Info>
        <span>
          <h3 className="text-2xl font-bold">Brasil Santos</h3>
          <p className="text-xs font-semibold text-neutral-500">
            Caffee Montana
          </p>
        </span>
        <IconButton onClick={handleOpenModal}>
          <Maximize2 />
        </IconButton>
      </OnTheGrinderCard.Info>

      <OnTheGrinderCard.Stats>
        <StatCard label="Total shots" value={2} />
        <StatCard label="Other stat" value={4} />
      </OnTheGrinderCard.Stats>

      <OnTheGrinderCard.Actions>
        <LinkButton to="beans" className="rounded-2xl border-2 p-2">
          Change Beans
        </LinkButton>
        <button className="grow rounded-2xl bg-orange-600 p-2 font-semibold">
          Pull Shot
        </button>
      </OnTheGrinderCard.Actions>

      {isModalOpen && (
        <Modal onCloseModal={handleCloseModal}>
          <OnTheGrinderCard.Info>
            <span>
              <h3 className="text-2xl font-bold">Brasil Santos</h3>
              <p className="text-xs font-semibold text-neutral-500">
                Caffee Montana
              </p>
            </span>
            <IconButton onClick={handleCloseModal}>
              <Minimize2 />
            </IconButton>
          </OnTheGrinderCard.Info>
        </Modal>
      )}
    </Card>
  );
};

OnTheGrinderCard.Info = ({ children }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

OnTheGrinderCard.Stats = ({ children }) => {
  return <div className="flex justify-center gap-2">{children}</div>;
};

const StatCard = ({ label, value }) => {
  return (
    <div className="flex min-h-28 min-w-20 grow flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-800 p-2">
      <h4 className="text-lg font-semibold text-neutral-400">{label}</h4>
      <span className="font-mono text-2xl font-semibold text-neutral-400">
        {value}
      </span>
    </div>
  );
};

OnTheGrinderCard.Actions = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

export default OnTheGrinderCard;
