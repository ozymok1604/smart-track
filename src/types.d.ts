type Tab = string;

type TabAction = {
  type: string;
  tab: Tab;
};

type SmartTrackState = {
  tab: string;
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
