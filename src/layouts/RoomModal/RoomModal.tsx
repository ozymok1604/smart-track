import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoom, openRoomModal, editRoom } from "../../store";
import { Button } from "../../Components/Button";
import Close from "../../assets/Close.svg";
import { Field } from "../../Components/Field";
import { getRandomNumber } from "../../utils/getRandomNumber";
import styles from "./styles.module.scss";

const RoomModal = ({ type }: { type?: string }) => {
  const dispatch = useDispatch();

  const room = useSelector(
    (state: SmartTrackState) => state.roomModalParameters.room
  );

  const handleCloseModal = () => {
    dispatch(openRoomModal({ isOpenRoomModal: false }));
  };

  const [roomName, setRoomName] = useState<any>(room ? room.name : "");

  const handleRoomChange = (e: any) => {
    setRoomName(e.target.value);
  };

  const roomId = getRandomNumber(1000).toString();

  const handleSaveForm = () => {
    type == "edit"
      ? dispatch(
          editRoom({
            options: room?.options,
            name: roomName,
            doctor: "",
            id: room?.id,
          })
        )
      : dispatch(
          addRoom({ options: [], name: roomName, doctor: "", id: roomId })
        );
    handleCloseModal();
  };

  return (
    <div onClick={handleCloseModal} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className={styles.close_container}>
          <img
            onClick={handleCloseModal}
            className={styles.close}
            alt="Close"
            src={Close}
          />
        </div>
        <div className={styles.header}>
          <div className={styles.header_title}>
            {type == "edit" ? "Edit Room" : "Add new Room"}
          </div>
        </div>

        <Field
          value={roomName}
          onChange={handleRoomChange}
          title="Name"
          placeholder="Name"
        />

        <div className={styles.footer}>
          <Button
            onClick={handleSaveForm}
            type="primary"
            title={type == "edit" ? "Edit" : "Save"}
          />
        </div>
      </div>
    </div>
  );
};

export { RoomModal };
