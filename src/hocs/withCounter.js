/* @flow */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle, pure, type HOC } from 'recompose'
import * as CounterActions from '~/reducers/counter'
import { type State as RootState } from '~/reducers'

type OuterProps = {}

type Props = {
  value: number,
  actions: typeof CounterActions
}

const connector = connect(
  (state: RootState, _props) => {
    return state.counter
  },
  dispatch => ({ actions: bindActionCreators({ ...CounterActions }, dispatch) })
)

const withCounter: HOC<Props, OuterProps> = compose(
  connector,
  pure,
  lifecycle({
    componentDidMount() {
      console.log('mounted')
    }
  })
)

export default withCounter
