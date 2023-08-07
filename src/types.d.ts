type Tab = string;

type IsOpen = boolean;

type Count = number;

type DoctorRow = {
  name?: string;
  email?: string;
  phone?: string;
  allerts?: string[];
  rooms?: string[];
};

type Doctor = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  allerts?: any[];
};

type RowType = string;

type AssistantRow = {
  name: string;
  email: string;
  phone: string;
};
type ReceptionistRow = {
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
  isOpenAddStuffModal: IsOpen;
  worker: Doctor;
};

type SmartTrackState = {
  tab: string;
  isOpenWardOptions: IsOpen;
  count: Count;
  isOpenAddStuffModal: IsOpen;
  worker: Doctor;
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
