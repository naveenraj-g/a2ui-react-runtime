import { Text } from "./text";
import { Row } from "./row";
import { Column } from "./column";
import { Image } from "./image";
import { Icon } from "./icon";
import { Button } from "./button";
import { Card } from "./card";
import { Tabs } from "./tabs";
import { Modal } from "./modal";
import { Checkbox } from "./checkbox";
import { TextField } from "./text-field";
import { DateTimeInput } from "./datetime-input";
import { Slider } from "./slider";
import { MultipleChoice } from "./multiple-choice";
import { List } from "./list";
import { Divider } from "./divider";
import { Video } from "./video";
import { AudioPlayer } from "./audio-player";
import { Table } from "./table";

export type ComponentConfig = {
  component: React.ComponentType<any>;
};

export type Catalog = {
  [key: string]: ComponentConfig;
};

export const DEFAULT_CATALOG: Catalog = {
  Text: { component: Text },
  Row: { component: Row },
  Column: { component: Column },
  Image: { component: Image },
  Icon: { component: Icon },
  Button: { component: Button },
  Card: { component: Card },
  Tabs: { component: Tabs },
  Modal: { component: Modal },
  CheckBox: { component: Checkbox },
  TextField: { component: TextField },
  DateTimeInput: { component: DateTimeInput },
  Slider: { component: Slider },
  MultipleChoice: { component: MultipleChoice },
  List: { component: List },
  Divider: { component: Divider },
  Video: { component: Video },
  AudioPlayer: { component: AudioPlayer },
  Table: { component: Table },
};
