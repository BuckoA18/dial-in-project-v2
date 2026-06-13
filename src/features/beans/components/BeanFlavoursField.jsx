import { useSelector } from "react-redux";
import { FLAVOURS } from "../../../config";
import { getFlavourCategories } from "../../../utils";
import useModal from "../../../hooks/useModal";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import BeanFlavoursSelector from "./BeanFlavoursSelector";
import Label from "../../../ui/Label";
import FlavourBadge from "../../../ui/FlavourBadge";
import Badge from "../../../ui/Badge";

const BeanFlavoursField = () => {
  const { flavours } = useSelector((state) => state.beans.beanData);
  const { isModalOpen, openModal, closeModal } = useModal();
  const flavourCategories = getFlavourCategories();

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
      <ul className="flex flex-wrap gap-1">
        {flavours.map((flavour) => {
          return (
            <Badge
              className="border-orange-600 bg-orange-600 text-neutral-100"
              key={flavour.id}
            >
              {flavour.label}
            </Badge>
          );
        })}
      </ul>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Modal.Header onClose={closeModal}></Modal.Header>

          <Modal.Body>
            <BeanFlavoursSelector>
              {flavourCategories.map((category) => {
                return (
                  <fieldset
                    key={category}
                    className="flex flex-wrap gap-1 sm:max-w-120"
                  >
                    <legend className="mb-1 text-lg font-semibold">
                      {category}
                    </legend>
                    {FLAVOURS.map((flavour) => {
                      if (flavour.category !== category) return;
                      return (
                        <FlavourBadge flavour={flavour} key={flavour.id} />
                      );
                    })}
                  </fieldset>
                );
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
