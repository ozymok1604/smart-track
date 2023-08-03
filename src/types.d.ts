type Tab = string;

type IsOpen = boolean;

type Option = {
  title: string;
  value: string;
};

type TrackAction = {
  type: string;
  tab: Tab;
  isOpen: IsOpen;
};

type ModalAction = {
  type: string;
  isOpen: IsOpen;
};

type SmartTrackState = {
  tab: string;
  isOpen: IsOpen;
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
