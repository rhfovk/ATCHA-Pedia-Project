import React, { Component } from 'react';
import './Profile.scss';

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-container">
          <div className="profile-container-top">
            <div className="options-gradation">
              <img
                className="options"
                alt="options"
                src="/images/settings.png"
              />
            </div>
          </div>
          <div className="profile-container-middle">
            <img className="user-picture" alt="user" src="images/user.png" />
            <div className="profile-info">
              <div className="profile-name">김영호</div>
              <div className="profile-detail">프로필이 없습니다.</div>
            </div>
            <div className="analysis">
              <img className="graph" alt="graph" src="images/bar-chart.png" />
              <div className="analysis-text">취향분석</div>
            </div>
          </div>
          <div className="profile-container-bottom">
            <div className="bottom-top">
              <div className="bottom-top-movie">영화</div>
              <div className="bottom-top-star">★ 42</div>
            </div>
            <div className="bottom-bottom">
              <div className="bottom-top-like">보고 싶어요 32</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
