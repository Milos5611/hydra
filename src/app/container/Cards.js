import {
    DATA,
    DATA_SAFE,
    getLocationData,
    getSafeLocation
}
    from
        "../services/card";
import Cards from "../component/card/Cards";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {
        [DATA]: state.cards[ DATA ],
        [DATA_SAFE]: state.cards[ DATA_SAFE ]
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        getLocationData,
        getSafeLocation
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
