import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class EtapasUI extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <div style={{ width: '20%'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Confirmar Pagamento</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Faturado e Enviado</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Entrega Efetuada</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    <div>
                        <div style={{ marginTop: 12 }}>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onClick={this.handlePrev}
                                style={{ marginRight: 12 }}
                            />
                            <RaisedButton
                                label={stepIndex === 2 ? 'Finish' : 'Next'}
                                primary={true}
                                onClick={this.handleNext}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EtapasUI;