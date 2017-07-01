import {
    DATA,
    getDataFromServer
} from "../services/card";
import Cards from "../component/card/Cards";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        [DATA]: state.cards[ DATA ]
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        getDataFromServer
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
