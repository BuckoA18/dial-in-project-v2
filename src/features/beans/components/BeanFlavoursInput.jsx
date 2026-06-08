import { useState } from "react";
import FlavourBadge from "../../../ui/FlavourBadge";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";

const BeanFlavoursInput = ({
  flavours,
  selectedFlavours,
  onToggleFlavours,
}) => {
  const [isFlavoursOpen, setIsFlavoursOpen] = useState(false);

  const handleToggleFlavours = (e) => {
    e.preventDefault();
    setIsFlavoursOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={handleToggleFlavours}
        className="mt-2 text-left font-semibold text-orange-400"
      >
        Add flavours
      </button>
      {isFlavoursOpen && (
        <Modal onToggle={handleToggleFlavours}>
          <Modal.Header onToggle={handleToggleFlavours}>
            <h4 className="text-lg font-semibold">Choose flavours</h4>
          </Modal.Header>

          <Modal.Body>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {flavours?.map((flavour) => {
                console.log(flavour.id);
                console.log(selectedFlavours);
                const isActive = selectedFlavours.includes(flavour.id);
                return (
                  <FlavourBadge
                    label={flavour.label}
                    key={flavour.id}
                    isActive={isActive}
                    onClick={() => onToggleFlavours(flavour.id)}
                  />
                );
              })}
            </div>
          </Modal.Body>

          <Modal.Actions>
            <Button className="bg-green-500">Save</Button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
};

export default BeanFlavoursInput;
