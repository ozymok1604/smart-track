import styles from "./styles.module.scss";
import Close from "../../assets/Close.svg";
import Edit from "../../assets/Edit.svg";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { openDeleteModal, openRoomModal } from "../../store";

const SequenceRoom = ({ room, index }: { room?: Room; index?: any }) => {
  const dispatch = useDispatch();
  const handleOpenDeleteModal = () => {
    dispatch(openDeleteModal({ isOpenDeleteModal: true, roomId: room?.id }));
  };
  const handleOpenEditRoomModal = () => {
    dispatch(
      openRoomModal({ isOpenRoomModal: true, room: room, type: "edit" })
    );
  };
  return (
    <Draggable key={room?.id} draggableId={room?.id} index={index}>
      {(provided) => (
        <div
          ref={provided?.innerRef}
          {...provided?.draggableProps}
          {...provided?.dragHandleProps}
        >
          <div className={styles.room}>
            <div className={styles.header}>
              <img
                onClick={handleOpenDeleteModal}
                className={styles.svg}
                src={Close}
                alt="Close"
              />
              <img
                onClick={handleOpenEditRoomModal}
                className={styles.svg}
                src={Edit}
                alt="Edit"
              />
            </div>
            <div className={styles.title_container}>
              <div className={styles.title}>{room?.name}</div>
            </div>
            <div className={styles.doctor}>{room?.doctor}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export { SequenceRoom };
