import React, { Component } from 'react';
import Dialog from './shared/Dialog';

class CancelableDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog 
                title="Cancellation Dialog"
                dialogButtons={<Buttons/>}>
                <p>Do you wand to cancel ... ?</p>
            </Dialog>
        );
    }
}

let Buttons = (prop) => <div>
    <button type="button">OK</button>
    <button type="button">Cancel</button>
</div>

export default CancelableDialog;