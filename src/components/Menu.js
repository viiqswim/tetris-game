import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { startGame } from '../actions/actions.js';

injectTapEventPlugin();
let Menu = ({ menuStatus, dispatch }) => {
	let style = {
		width: '50%',
		margin: '0 auto',
		display: menuStatus ? 'block' : 'none',
	};
	return (
		<div>
			<RaisedButton
				label="NewGame"
				primary style={style}
				label="NEW GAME"
				onClick={() => {
					dispatch(startGame());
				}}
			/>
		</div>
	);
};
const mapStateToProps = (state) => {
	console.log(state);
	return { menuStatus: state.menuStatus };
};
Menu = connect(mapStateToProps)(Menu);
Menu.propTypes = {
	dispatch: React.PropTypes.func,
	menuStatus: React.PropTypes.bool,
};
export default Menu;



