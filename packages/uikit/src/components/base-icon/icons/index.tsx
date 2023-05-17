import { ChoiceIcon } from './ChoiceIcon';
import { CloseIcon } from './CloseIcon';
import { DateIcon } from './DateIcon';
import { DeleteIcon } from './DeleteIcon';
import { FileIcon } from './FileIcon';
import { PlusIcon } from './PlusIcon';
import { CloseSmIcon } from './CloseSmIcon';
import { ThemeIcon } from './ThemeIcon';
import { EvroneIcon } from './EvroneIcon';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowRightIcon } from './ArrowRightIcon';
import { UnpaidIcon } from './UnpaidIcon';
import { SickIcon } from './SickIcon';
import { VacationIcon } from './VacationIcon';
import { OpenedEyeIcon } from './OpenedEyeIcon';
import { ClosedEyeIcon } from './ClosedEyeIcon';
import { LockIcon } from './LockIcon';
import { ChevronIcon } from './ChevronIcon';
import { EditIcon } from './EditIcon';
import { HintIcon } from './HintIcon';

export const icons = {
  plus: PlusIcon,
  choice: ChoiceIcon,
  date: DateIcon,
  file: FileIcon,
  delete: DeleteIcon,
  chevron: ChevronIcon,
  close: CloseIcon,
  'close-sm': CloseSmIcon,
  theme: ThemeIcon,
  evrone: EvroneIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  unpaid: UnpaidIcon,
  sick: SickIcon,
  vacation: VacationIcon,
  'opened-eye': OpenedEyeIcon,
  'closed-eye': ClosedEyeIcon,
  lock: LockIcon,
  edit: EditIcon,
  hint: HintIcon,
};
export type IconType = keyof typeof icons;
export const iconTypes = Object.keys(icons) as IconType[];
