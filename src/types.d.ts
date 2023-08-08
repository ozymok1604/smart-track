type Tab = string;

type IsOpen = boolean;

type Count = number;

type DoctorRow = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: string[];
  rooms?: string[];
};

type Employee = {
  id?: number;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: any[];
  rooms?: string[];
};

type Doctor = {
  id?: number;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: any[];
  rooms?: string[];
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
};

type TrackAction = {
  type: string;
  tab: Tab;
  count: Count;
  isOpenWardOptions: IsOpen;
  stuffModalParameters: StuffModal;
  employee: Employee;
  employeeData: Employee;
  editedEmployee: Employee;
  employeeId: number;
  isOpenDeleteModal: IsOpen;
};

type SmartTrackState = {
  tab: string;
  isOpenWardOptions: IsOpen;
  count: Count;
  stuffModalParameters: StuffModal;
  employee: Employee;
  employeeData: Employee;
  editedEmployee: Employee;
  employeeId: number;
  isOpenDeleteModal: IsOpen;
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
