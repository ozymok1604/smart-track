import { useEffect, useState } from "react";
import { Button } from "../../Components/Button";
import { Select } from "../../Components/Select";
import { SequenceRoom } from "../../Components/SequenceRoom";
import { SideBarMenu } from "../../layouts/SideBarMenu";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { RoomModal } from "../../layouts/RoomModal";
import {
  editEmployee,
  openRoomModal,
  renameRooms,
  startShowingAllert,
  stopShowingAllert,
} from "../../store";
import { DeleteModal } from "../../layouts/DeleteModal";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { getFilteredListNames } from "../../utils/getFilteredListNames";
import { Message } from "../../layouts/Message";
import styles from "./styles.module.scss";

const Sequence = ({
  testEmployees,
  testRooms,
}: {
  testEmployees?: Doctor[];
  testRooms?: any[];
}) => {
  const dispatch = useDispatch();
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const room = useSelector((state: SmartTrackState) => state.room);
  const deletedRoom = useSelector((state: SmartTrackState) => state.roomId);
  const selectedDoctor = useSelector(
    (state: SmartTrackState) => state?.selectedDoctor
  );
  const isShowingAllert = useSelector(
    (state: SmartTrackState) => state.isShowingAllert
  );
  const roomModalType = useSelector(
    (state: SmartTrackState) => state.roomModalParameters.type
  );
  const rooms = JSON.parse(
    localStorage.getItem("rooms") || JSON.stringify(testRooms) || "[]"
  );

  const roomColumns = {
    allRooms: {
      rooms: rooms,
    },
    doctorRooms: {
      rooms: selectedDoctor?.rooms || [],
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

  const handleOpenAddRoomModal = () => {
    dispatch(openRoomModal({ isOpenRoomModal: true }));
  };

  const handleStopShowingAllert = () => {
    dispatch(stopShowingAllert(false));
  };

  const [columns, setColumns] = useState(roomColumns);
  const [newDoctorRooms, setNewDoctorRooms] = useState<Room[]>([]);

  useEffect(() => {
    setColumns(roomColumns);
  }, [room, deletedRoom, selectedDoctor]);

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
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.rooms];
    const destItems = [...destColumn.rooms];

    if (
      selectedDoctor?.stopped == true ||
      selectedDoctor?.countInLine == 0 ||
      !selectedDoctor?.name
    ) {
      return;
    } else {
      if (
        selectedDoctor?.countInLine &&
        destItems.length + 1 > selectedDoctor?.countInLine &&
        result.destination.droppableId == "doctorRooms"
      ) {
        return;
      } else {
        if (source.droppableId !== destination.droppableId) {
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
              rooms: getFilteredListNames(destItems),
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
      }
    }
  };
  useEffect(() => {
    setNewDoctorRooms(columns.doctorRooms.rooms as Room[]);
  }, [columns]);
  const hasRooms = !!columns["doctorRooms"].rooms?.[0];

  const handleSaveDoctorRooms = () => {
    doctors.map((doctor: Doctor) => {
      if (doctor.id != selectedDoctor?.id) {
        const otherDoctorRooms: Room[] = doctor?.rooms as Room[];
        const doctorRooms = [] as Room[];
        otherDoctorRooms?.map((room: Room) => {
          const notSame = !newDoctorRooms.some(
            (newRoom: Room) => newRoom.name == room.name
          );
          notSame && doctorRooms.push(room);
        });
        const filteredDoctorRooms = getFilteredListNames(doctorRooms);
        dispatch(editEmployee({ ...doctor, rooms: filteredDoctorRooms }));
      }
    });

    dispatch(
      editEmployee({
        ...selectedDoctor,
        rooms: newDoctorRooms?.map((room: Room) => ({
          id: getRandomNumber(1000).toString(),
          options: room?.options,
          name: room?.name,
          doctor: selectedDoctor?.name,
        })),
      })
    );

    dispatch(
      renameRooms(
        newDoctorRooms?.map((room: Room) => ({
          id: room.id,
          name: room?.name,
          options: room?.options,
          doctor: selectedDoctor?.name,
        }))
      )
    );
    const refreshedEmployees = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );
    const refreshedRooms = JSON.parse(localStorage.getItem("rooms") || "[]");
    const refreshedDoctors = refreshedEmployees.filter(
      (employee: Doctor) => employee.type == "Doctors"
    );
    const allSettedRooms = refreshedDoctors?.map(
      (doctor: Doctor) => doctor.rooms
    );
    const mergedAllSettedRooms = allSettedRooms.flat(1);
    const roomsToRename: Room[] = [];
    refreshedRooms.map((room: Room) => {
      const notExist = mergedAllSettedRooms.some(
        (settledRoom: Room) => settledRoom.name == room.name
      );
      !notExist && roomsToRename.push(room);
    });
    dispatch(
      renameRooms(
        roomsToRename?.map((room: Room) => ({
          id: room.id,
          options: [],
          name: room?.name,
          doctor: "",
        }))
      )
    );
    dispatch(startShowingAllert(true));
    setInterval(handleStopShowingAllert, 3000);
  };

  return (
    <div className={styles.page}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd({ result, columns, setColumns })}
      >
        {isOpenRoomModal && <RoomModal type={roomModalType} />}
        {isOpenDeleteModal && <DeleteModal type="room" />}
        {isShowingAllert && <Message />}
        <SideBarMenu />

        <div className={styles.page_content}>
          <div className={styles.header}>
            <div className={styles.select_container}>
              <div className={styles.title}>Choose a Doctor</div>
              <Select doctors={testEmployees || doctors} />
            </div>
            <Button
              onClick={handleSaveDoctorRooms}
              title="Save"
              type="primary"
            />
          </div>

          <Droppable key={"doctorRooms"} droppableId={"doctorRooms"}>
            {(provided) => (
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
                    <div title="doctorRooms" className={styles.text}>
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
              {(provided) => (
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
                      (room: Room, index: string) => (
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
    </div>
  );
};

export { Sequence };
