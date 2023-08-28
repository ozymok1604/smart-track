type Tab = string;

type IsOpen = boolean;

type Count = number;

type AllertModalParameters = {
  isOpen?: IsOpen;
  type?: string;
};

type AllertData = {
  id?: string;
  title?: string;
  style?: string;
};

type DoctorRow = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: string[];
  rooms?: Room[];
};

type MenuItem = {
  title?: string;
  img?: any;
  link?: any;
};

type Employee = {
  stopped?: boolean;
  countInLine?: number;
  id?: number;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: any[];
  rooms?: Room[];
};

type Doctor = {
  stopped?: boolean;
  countInLine?: number;
  id?: number;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: any[];
  rooms?: Room[];
};

type Assistant = {
  id?: number;
  type?: string;
  name?: string;
  email?: string;
};

type Receptionist = {
  id?: number;
  type?: string;
  name?: string;
  email?: string;
};

type RowType = string;

type AssistantRow = {
  id?: number;
  name: string;
  email: string;
  phone: string;
};
type ReceptionistRow = {
  id?: number;
  name: string;
  email: string;
  phone: string;
};

type Option = {
  title: string;
  value: string;
  style: string;
};

type Room = {
  id?: any;
  name?: string;
  options?: any[];
  doctor?: string;
};

type DeleteModalParameters = {
  roomId?: string;
  employeeId?: string;
  isOpenDeleteModal?: IsOpen;
};

type RoomModalParameters = {
  room?: Room;
  type?: string;
  isOpenRoomModal?: IsOpen;
};

type TrackAction = {
  type: string;
  tab: Tab;
  isOpenMenu?: IsOpen;
  count: Count;
  isOpenWardOptions: IsOpen;
  stuffModalParameters: StuffModal;
  employee: Employee;
  employeeData: Employee;
  editedEmployee: Employee;
  employeeId: number;
  deleteModalParameters: DeleteModalParameters;
  roomModalParameters: RoomModalParameters;
  room: Room;
  editedRoom: Room;
  selectedDoctor?: Doctor;
  roomId: string;
  isShowingAllert?: boolean;
  allertData?: AllertData;
  selectedRooms?: Room[];
  allertModalParameters?: AllertModalParameters;
  allert?: AllertData;
  editedAllert?: AllertData;
};

type SmartTrackState = {
  tab: string;
  isOpenWardOptions: IsOpen;
  count: Count;
  isOpenMenu?: IsOpen;
  stuffModalParameters: StuffModal;
  employee: Employee;
  employeeData: Employee;
  editedEmployee: Employee;
  employeeId: number;
  editedRoom: Room;
  roomModalParameters: RoomModalParameters;
  deleteModalParameters: DeleteModalParameters;
  selectedDoctor?: Doctor;
  selectedRooms?: Room[];
  isShowingAllert?: boolean;
  allertModalParameters?: AllertModalParameters;
  room: any;
  editedAllert?: AllertData;
  allertData?: AllertData;
  allert?: AllertData;
  roomId: string;
};

type SelectOption = {
  value: string;
  title: string;
};

type DispatchType = (args: TrackAction) => TrackAction;

type menuItem = {
  title: string;
  img: any;
  link: string;
};

type ButtonProps = {
  title: string;
  type: string;
};

type StuffModal = {
  isOpen?: boolean;
  type?: string;
};
