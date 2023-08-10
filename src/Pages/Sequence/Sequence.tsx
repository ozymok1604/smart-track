import { useEffect, useState } from "react";
import { Button } from "../../Components/Button";
import { Select } from "../../Components/Select";
import { SequenceRoom } from "../../Components/SequenceRoom";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { useSelector } from "react-redux";
import { RoomModal } from "../../layouts/RoomModal";
import { useDispatch } from "react-redux";
import { openRoomModal } from "../../store";

import { DeleteModal } from "../../layouts/DeleteModal";

import styles from "./styles.module.scss";

const Sequence = () => {
  const dispatch = useDispatch();
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const room = useSelector((state: SmartTrackState) => state.room);
  const editedRoom = useSelector((state: SmartTrackState) => state.editedRoom);
  const deletedRoom = useSelector((state: SmartTrackState) => state.roomId);
  const roomModalType = useSelector(
    (state: SmartTrackState) => state.roomModalParameters.type
  );

  const rooms = JSON.parse(localStorage.getItem("rooms") || "[]");

  const roomColumns = {
    allRooms: {
      rooms: rooms,
    },
    doctorRooms: {
      rooms: [],
    },
  };

  const doctors = employees.filter(
    (employee: Doctor) => employee.type == "Doctors"
  );

  const isOpenRoomModal = useSelector(
    (state: SmartTrackState) => state.roomModalParameters.isOpenRoomModal
  );
  const isOpenDeleteModal = useSelector(
    (state: SmartTrackState) => state.deleteModalParameters.isOpenDeleteModal
  );

  const options = doctors?.map((doctor: Doctor) => ({
    title: doctor.name,
    value: doctor.name,
  }));

  const handleOpenAddRoomModal = () => {
    dispatch(openRoomModal({ isOpenRoomModal: true }));
  };

  const [columns, setColumns] = useState(roomColumns);

  useEffect(() => {
    setColumns(roomColumns);
  }, [room, deletedRoom, editedRoom]);

  const onDragEnd = ({
    result,
    columns,
    setColumns,
  }: {
    result: any;
    columns: any;
    setColumns: any;
  }) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.rooms];
      const destItems = [...destColumn.rooms];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          rooms: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          rooms: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.rooms];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          rooms: copiedItems,
        },
      });
    }
  };

  const hasRooms = columns["doctorRooms"].rooms[0] ? true : false;

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd({ result, columns, setColumns })}
      >
        {isOpenRoomModal && <RoomModal type={roomModalType} />}
        {isOpenDeleteModal && <DeleteModal type="room" />}
        <SideBarMenu />

        <div className={styles.page_content}>
          <div className={styles.header}>
            <div className={styles.select_container}>
              <div className={styles.title}>Choose a Doctor</div>
              <Select options={options} />
            </div>
            <Button title="Save" type="primary" />
          </div>

          <Droppable key={"doctorRooms"} droppableId={"doctorRooms"}>
            {(provided, snapshot) => (
              <>
                <div
                  style={{
                    justifyContent: !hasRooms ? "space-around" : "flex-start",
                  }}
                  className={styles.rooms_box}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {!hasRooms && (
                    <div className={styles.text}>
                      Drag and Drop rooms to the box
                    </div>
                  )}
                  {columns["doctorRooms"]?.rooms?.map(
                    (room: any, index: any) => (
                      <SequenceRoom room={room} index={index} />
                    )
                  )}
                </div>
              </>
            )}
          </Droppable>
          <div className={styles.title}>Drag and Drop rooms to the box</div>
          <div className={styles.rooms_table}>
            <Droppable key={"allRooms"} droppableId={"allRooms"}>
              {(provided, snapshot) => (
                <>
                  <div
                    className={styles.rooms_table}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Button
                      onClick={handleOpenAddRoomModal}
                      type="addRoom"
                      title="Add a Room"
                    />
                    {provided.placeholder}
                    {columns["allRooms"]?.rooms?.map(
                      (room: any, index: any) => (
                        <SequenceRoom room={room} index={index} />
                      )
                    )}
                  </div>
                </>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export { Sequence };
