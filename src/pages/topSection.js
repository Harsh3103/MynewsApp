import React from 'react';
import topNews1 from '../assests/images/top-news-1.jpg'; // Update paths as necessary
import topNews2 from '../assests/images/top-news-2.jpg';
import topNews3 from '../assests/images/top-news-3.jpg';
import topNews4 from '../assests/images/top-news-4.jpg';
import topNews5 from '../assests/images/top-news-5.jpg';

function TopNews() {
  return (
    <div className="top-news">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 tn-left">
            <div className="tn-img">
              <img src={topNews1} alt="Top News 1" />
              <div className="tn-content">
                <div className="tn-content-inner">
                  <a className="tn-date" href="">
                    <i className="far fa-clock"></i>05-Feb-2020
                  </a>
                  <a className="tn-title" href="">
                    Lorem ipsum dolor sit amet adipiscing elit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 tn-right">
            <div className="row">
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews2} alt="Top News 2" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Integer faucibus pharetra odio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews3} alt="Top News 3" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Nulla vitae pharetra ligula
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews4} alt="Top News 4" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Ut ac euismod tellus a blandit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews5} alt="Top News 5" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Cras ac egestas sem nec euismod
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNews;
