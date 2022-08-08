import './control_panel.css';
declare class ControlPanel {
    constructor();
    clearFields(type: string): void;
    enableUpdateFields(): void;
    disableUpdateFields(): void;
}
export default ControlPanel;
