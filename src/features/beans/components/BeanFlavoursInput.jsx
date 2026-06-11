import { useState } from "react";
import { flavours } from "../../../config";
import { useDispatch } from "react-redux";
import { addFlavour, deleteFlavour } from "../beansSlice";
import FlavourBadge from "../../../ui/FlavourBadge";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";

const BeanFlavoursInput = ({ selectedFlavours }) => {
  const dispatch = useDispatch();
  const [isFlavoursOpen, setIsFlavoursOpen] = useState(false);

  const handleToggleFlavours = (e) => {
    e.preventDefault();
    setIsFlavoursOpen((prev) => !prev);
  };

  return (
    <div>
      <span className="my-2 flex justify-between">
        <p>Flavours</p>
        <button
          className="mb-4"
          onClick={handleToggleFlavours}
          className="font-semibold text-orange-400"
        >
          Add flavours
        </button>
      </span>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {selectedFlavours?.length > 0 &&
          selectedFlavours.map((flavour) => {
            return (
              <FlavourBadge
                label={flavour.label}
                key={flavour.id}
                className=""
              />
            );
          })}
      </div>
      {isFlavoursOpen && (
        <Modal onToggle={handleToggleFlavours}>
          <Modal.Header onToggle={handleToggleFlavours}>
            <h4 className="text-lg font-semibold">Choose flavours</h4>
          </Modal.Header>

          <Modal.Body>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {flavours?.map((flavour) => {
                const isActive = selectedFlavours?.includes(flavour);
                return (
                  <FlavourBadge
                    label={flavour.label}
                    key={flavour.id}
                    isActive={isActive}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        isActive ? deleteFlavour(flavour) : addFlavour(flavour),
                      );
                    }}
                  />
                );
              })}
            </div>
          </Modal.Body>

          <Modal.Actions>
            <Button className="" onClick={handleToggleFlavours}>
              Save flavours
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
};

export default BeanFlavoursInput;
