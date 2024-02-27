interface BtnProps {
  add: () => void;
  remove: () => void;
}

const FieldArrayButtons = ({ add, remove }: BtnProps) => (
  <div className="flex gap-2">
    <button type="button" onClick={add} className="button-secondary">
      +
    </button>
    <button type="button" onClick={remove} className="button-secondary ml-auto">
      -
    </button>
  </div>
);

export default FieldArrayButtons;
