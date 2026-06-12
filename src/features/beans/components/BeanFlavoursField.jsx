import { flavours } from "../../../config";
import useModal from "../../../hooks/useModal";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import BeanFlavoursSelector from "./BeanFlavoursSelector";
import Label from "../../../ui/Label";
import FlavourBadge from "../../../ui/FlavourBadge";

const BeanFlavoursField = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className="my-2 flex justify-between text-neutral-400">
        <Label>Flavours</Label>
        <button
          type="button"
          className=""
          onClick={openModal}
          className="font-semibold text-orange-400"
        >
          Add flavours
        </button>
      </div>
      {/* <ul className="flex flex-wrap gap-1 sm:gap-2">
        {selectedFlavours?.length > 0 &&
          selectedFlavours.map((flavour) => {
            return <FlavourBadge label={flavour.label} key={flavour.id} />;
          })}
      </ul> */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Modal.Header onClose={closeModal}>
            <legend className="text-lg font-semibold">Choose flavours</legend>
          </Modal.Header>

          <Modal.Body>
            <BeanFlavoursSelector>
              {flavours?.map((flavour) => {
                return <FlavourBadge key={flavour.id} flavour={flavour} />;
              })}
            </BeanFlavoursSelector>
          </Modal.Body>

          <Modal.Actions>
            <Button onClick={closeModal}>Save flavours</Button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
};

export default BeanFlavoursField;
