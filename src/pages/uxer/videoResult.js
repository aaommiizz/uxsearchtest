import React from 'react'
import { Button, ButtonToolbar } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

import NavbarUXer from '../../components/utils/navbarUXer'
import PlayVideo from '../../components/videoresult/video'
import ExperProfile from '../../components/videoresult/experimenterProfile'

import '../../static/css/uxer/videoresult.css'


class VideoResult extends React.Component {
  render() {
    return (
      <div>
        <NavbarUXer />
        <PlayVideo />
        <ExperProfile />
      </div>
    )
  }
}

export default VideoResult;