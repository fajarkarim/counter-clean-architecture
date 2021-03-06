import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../store';
import { CounterViewData, createCounterViewData } from './CounterViewData';
import { CounterWidget } from './components/CounterWidget';
import { ChangeCounterInteractor } from '../../useCases/ChangeCounterInteractor';
import { ToggleViewModeInteractor } from '../../useCases/ToggleViewModeInteractor';

type CounterPageProps = {
  changeCounterInteractor: ChangeCounterInteractor;
  counter: CounterViewData;
  toggleViewModeInteractor: ToggleViewModeInteractor;
};

const mapStateToProps = (state: StoreState): Partial<CounterPageProps> => {
  return {
    counter: createCounterViewData(state.counter, state.viewMode)
  };
};

class CounterPage extends React.Component<CounterPageProps, {}> {
  render () {
    const {
      counter,
      changeCounterInteractor,
      toggleViewModeInteractor
    } = this.props;

    return (
      <div>
        <h1>Clean Architecture Sample</h1>

        <button onClick={toggleViewModeInteractor.toggleViewMode}>
          {counter.viewModeButtonText}
        </button>

        <CounterWidget
          counter={counter}
          changeCounterInteractor={changeCounterInteractor}
        />
      </div>
    );
  }
}

export default connect<{}, {}, Partial<CounterPageProps>>(mapStateToProps)(CounterPage);
