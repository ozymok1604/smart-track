import { createStore } from "redux";
import { openDeleteModal, openRoomModal, reducer } from "../../store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { SequenceRoom } from ".";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

test("Sequence Room renders correctly", () => {
  const store = createStore(reducer);
  const dispatchMock = jest.fn();
  store.dispatch = dispatchMock;

  const index = 0;
  const room = {
    id: "693",
    options: [],
    name: "r6",
    doctor: "Doctor",
  };

  render(
    <Provider store={store}>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable key={"allRooms"} droppableId={"allRooms"}>
          {(provided: any) => (
            <>
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable key={room?.id} draggableId={room?.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided?.innerRef}
                      {...provided?.draggableProps}
                      {...provided?.dragHandleProps}
                    >
                      <SequenceRoom key={room.id} room={room} index={index} />
                    </div>
                  )}
                </Draggable>
              </div>
            </>
          )}
        </Droppable>
      </DragDropContext>
    </Provider>
  );

  const roomName = screen.getByText(room.name);
  expect(roomName).toBeInTheDocument();

  const roomDoctor = screen.getByText(room.doctor);
  expect(roomDoctor).toBeInTheDocument();

  const deleteButton = screen.getByAltText("Delete");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(
    dispatchMock(openDeleteModal({ isOpenDeleteModal: true, roomId: room?.id }))
  );

  const editButton = screen.getByAltText("Edit");
  expect(editButton).toBeInTheDocument();
  fireEvent.click(editButton);
  expect(
    dispatchMock(
      openRoomModal({ isOpenRoomModal: true, room: room, type: "edit" })
    )
  );
});
