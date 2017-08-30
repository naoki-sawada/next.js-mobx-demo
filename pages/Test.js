import { observer } from 'mobx-react';

@observer
export default class Test extends React.Component {
  render() {
    return (
      <div>
        <div>hello, world!</div>
        <div>{this.props.stores.nowDateStore.nowDate}</div>
      </div>
    );
  }
}
