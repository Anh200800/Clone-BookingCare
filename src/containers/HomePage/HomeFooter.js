import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import  facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";



class HomeFooter extends Component {
  render() {
      return (
        <div className="home-footer">
              <p>&copy;2022 BookingCare. </p>
              <div className="logo-footer">

            <a target="_blank" href="https://www.facebook.com/bookingcare">
              <img class="logo-social" src={facebook} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC9l2RhMEPCIgDyGCH8ijtPQ"
              >
              <img class="logo-social" src={youtube} />
            </a>
          
                </div>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
