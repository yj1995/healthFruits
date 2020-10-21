import React, { Component } from 'react';
import { FixedHeader } from '../../Common/JS/FixedHeader';
import Spinner from 'react-spinner-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      Search: "",
      mfSchemes: [
        {
          strItemName: "Total fat",
          stritemdesc: "0.3g",
          strItemPrc: "0%",
          subItem: [{
            strItemName: "Saturated fat",
            stritemdesc: "0.1g",
            strItemPrc: "0%"
          }],
        },
        {
          strItemName: "Sodium",
          stritemdesc: "1mg",
          strItemPrc: "0%"
        },
        {
          strItemName: "Total carbohydrate",
          stritemdesc: "23g",
          strItemPrc: "8%",
          subItem: [{
            strItemName: "Dietary fiber",
            stritemdesc: "2.6g",
            strItemPrc: "9%"
          },
          {
            strItemName: "Sugar",
            stritemdesc: "12g",
            strItemPrc: "N.A."
          }]
        },
        {
          strItemName: "Protein",
          stritemdesc: "1.1g",
          strItemPrc: "2%"
        }
      ],
      mfSchemes1: [
        {
          strItemName: "Vitamin D",
          stritemdesc: "0.00mcg",
          strItemPrc: "0%"
        },
        {
          strItemName: "Calcium",
          stritemdesc: "5.00mg",
          strItemPrc: "0%"
        },
        {
          strItemName: "Iron",
          stritemdesc: "0.26mg",
          strItemPrc: "1%"
        },
        {
          strItemName: "Potassium",
          stritemdesc: "358mg",
          strItemPrc: "8%"
        }
      ]
    }
  }
  bindGraph = (strItemName) => {
    this.props.history.push({
      pathname: '/Graph',
      state: {
        strItemName: strItemName
      }
    })
  }

  render = () => {
    var settings = {
      dots: true,
      arrows: true
    };
    const { Search } = this.state;
    return (
      <div className="my_app_container">
        {FixedHeader()}
        <img
          style={{ width: "100%" }}
          className="img-fluid"
          src={require("../img/UpperImage.png")}
          title=""
          alt=""
        />
        <div className="card-body">
          <div className="spin">
            <Spinner visible={this.state.loading}
              spinnerColor={"rgba(0, 0, 0, 0.3)"} />
          </div>
          <div className="row no-gutters" style={{ boxShadow: "0px 7px 12px 0 rgba(75,75,75,0.16)", borderRadius: 20 }}>
            <div className="col-12">
              <form style={{ padding: "10px 16px 5px 16px" }}>
                <div className="login">
                  <div className="form-group">
                    <div className="date-title bold-font">Nutrition Fact</div>
                  </div>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <table cellpadding="0" cellspacing="0" className="list-data">
                          <tr className="removeBorder">
                            <th>Serving size</th>
                            <th style={{ textAlign: "right" }}>100 gm</th>
                          </tr>
                          <div className="bigBoder borderPadding" />
                          <tr className='removeBorder'>
                            <b>Amount per serving</b>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                  <div className="row no-gutters" style={{ marginTop: "20px" }}>
                    <div className="col-12">
                      <div className="form-group">
                        <div className="radio-wrap">
                          <div className="wrapper-1">
                            <div className="date-title bold-font bigBoder borderPadding">
                              <span style={{ fontSize: 28 }}>Calories</span>
                              <span style={{ float: "right" }}>89</span>
                            </div>
                            <div className="d-flex flex-wrap flex-row justify-content-center align-items-center ptb-5">
                              <div className="dc-input">
                                <input type="text" className="form-control search" name="search" id='searchitem' placeholder="Type to search nutrition present" autoComplete="off"
                                  onChange={(e) => this.setState({ Search: e.target.value })} />
                                <img src={require("../img/searchicon.png")} className="search-img" />
                              </div>
                            </div>
                            <br />
                          </div>
                          <tbody>
                            <tr>
                              <td colspan="4">

                                <table cellpadding="0" cellspacing="0" className="list-data">

                                  <tr>
                                    <th style={{ textAlign: "right" }}>% Daily Value *</th>
                                  </tr>
                                </table>

                              </td>
                            </tr>
                          </tbody>
                          {this.state.mfSchemes.map((item, key) => {
                            if (
                              (Search !== "") &&
                              (item.strItemName.toLowerCase().indexOf(Search.toLowerCase()) === -1)
                            ) {
                              return null
                            }
                            return (
                              <tbody>
                                <tr key={key}>
                                  <td colspan="4">

                                    <table cellpadding="0" cellspacing="0" className="list-data">

                                      <tr onClick={() => this.bindGraph(item.strItemName)} className={key === this.state.mfSchemes.length - 1 ? 'removeBorder' : null}>
                                        <span className="bold-font">{item.strItemName}</span>
                                        <span style={{ paddingLeft: 10 }}>{item.stritemdesc}</span>
                                        <span className="bold-font" style={{ float: "right" }}>{item.strItemPrc}</span>
                                        {item.subItem && item.subItem.length && item.subItem.map((subitem) => (
                                          <tr onClick={() => this.bindGraph(subitem.strItemName)}>
                                            <span style={{ paddingLeft: 10 }}>{subitem.strItemName}</span>
                                            <span style={{ paddingLeft: 10 }}>{subitem.stritemdesc}</span>
                                            <span className="bold-font" style={{ float: "right" }}>{subitem.strItemPrc}</span>
                                          </tr>
                                        ))}
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            )
                          })}
                          <div className="bigBoder borderPadding" />
                          {this.state.mfSchemes1.map((item, key) => {
                            if (
                              (Search !== "") &&
                              (item.strItemName.toLowerCase().indexOf(Search.toLowerCase()) === -1)
                            ) {
                              return null
                            }
                            return (
                              <tbody>
                                <tr key={key}>
                                  <td colspan="4">

                                    <table cellpadding="0" cellspacing="0" className="list-data">

                                      <tr onClick={() => this.bindGraph(item.strItemName)} className={key === this.state.mfSchemes.length - 1 ? 'removeBorder' : null}>
                                        <span>{item.strItemName}</span>
                                        <span style={{ paddingLeft: 10 }}>{item.stritemdesc}</span>
                                        <span style={{ float: "right" }}>{item.strItemPrc}</span>
                                      </tr>
                                    </table>

                                  </td>
                                </tr>
                              </tbody>
                            )
                          })}
                          <div className="bigBoder borderPadding" />
                          <span className="fact">The % Daily Value (DV) tells you how much a nutrient in a serving of a food contribute to daily diet 2,000 calories in a day used for general nutrition diet.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ padding: '50px 20px 20px 20px' }}>
          <div style={{ borderLeft: '2px solid #e0d9d9' }}>
            <div style={{ paddingLeft: 30 }}>
              <div><span className='subHeaderList'>Harvest stage</span><span className="circleDot" /></div>
              <tbody>
                <tr>
                  <td colspan="4">
                    <table cellpadding="0" cellspacing="0" className="list-data">
                      <tr>
                        <span className="bold-font fontStyle colorFont">Product Name</span>
                        <span className="colorFont">Papaya</span>
                      </tr>
                      <tr>
                        <span className="bold-font fontStyle colorFont" style={{ paddingRight: 36 }}>Product Variety</span>
                        <span className="colorFont">Pusa Magesty</span>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
              <h2 className="mt-5"><b>Farmer details</b></h2>
              <div className="row no-gutters" style={{ marginTop: "20px" }}>
                <div className="col-12">
                  <div className="form-group">
                    <div className="radio-wrap">
                      <div className="wrapper-1" style={{ background: "rgb(0 163 255 / 19%)", borderRadius: "10px" }}>
                        <img
                          style={{ width: "100px", padding: "10px" }}
                          className="img-fluid"
                          src={require("../img/MySelf.png")}
                          title=""
                          alt=""
                        /><b className="colorFont">Yash Jain</b> <span className="locationStyle colorFont">Parel, Maharashtra</span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gmap-container" style={{ height: "500px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30178.651168546352!2d72.83281087875363!3d19.005113298866522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdd2026ce4c25930!2sDMart%20Ready!5e0!3m2!1sen!2sin!4v1603184795866!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" allowfullscreen="" title=""></iframe>
              </div>
              <div><span className='collectionStyle'>At collection center</span><span className="circleDotCollection" /></div>
              <tbody>
                <tr>
                  <td colspan="4">
                    <table cellpadding="0" cellspacing="0" className="list-data">
                      <tr>
                        <span className="bold-font fontStyle colorFont">Center Name</span>
                        <span className="colorFont">Parel</span>
                      </tr>
                      <tr>
                        <span className="bold-font fontStyle colorFont" style={{ paddingRight: 32 }}>FSSAI License</span>
                        <span className="colorFont">9876543210</span>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
              <div className="gmap-container mt-5" style={{ height: "500px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30178.651168546352!2d72.83281087875363!3d19.005113298866522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdd2026ce4c25930!2sDMart%20Ready!5e0!3m2!1sen!2sin!4v1603184795866!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" allowfullscreen="" title=""></iframe>
              </div>
              <div className="card product-details-tile jioposlite_wrapper">
                <div className="p-3">
                  <Slider className="single-item" {...settings}>
                    <div>
                      <img
                        className="img-fluid"
                        src={require("../img/1.png")}
                        title=""
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="img-fluid"
                        src={require("../img/2.png")}
                        title=""
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        className="img-fluid"
                        src={require("../img/3.png")}
                        title=""
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="wrapper-1 mt-5">
                <h1 className="mt-5" style={{ fontSize: 19 }}><b>Secret behind your fruit's goodness :</b></h1>
                <img
                  style={{ width: "70px", padding: "10px" }}
                  className="img-fluid"
                  src={require("../img/4.png")}
                  title=""
                  alt=""
                /><b style={{ fontSize: 12 }}>Direct from farm</b>

              </div>
              <div className="wrapper-1">
                <img
                  style={{ width: "70px", padding: "10px" }}
                  className="img-fluid"
                  src={require("../img/5.png")}
                  title=""
                  alt=""
                /><b style={{ fontSize: 12 }}>Fully trackable</b>

              </div>
              <div className="wrapper-1">
                <img
                  style={{ width: "70px", padding: "10px" }}
                  className="img-fluid"
                  src={require("../img/6.png")}
                  title=""
                  alt=""
                /><b style={{ fontSize: 12 }}>Export quality</b>

              </div>
              <div><span className='deliveryText'>Delivering with love and care for you to relish</span><span className="circleDotDelivery" /></div>
            </div>
          </div>
          <div style={{ paddingTop: 70 }}>
            <div className="bigBoder borderPadding" />
            <h3 className="mt-5 colorFont"><b>About Demo Group</b></h3>
            <div className="colorFont" style={{ padding: "20px 0px" }}>
              Learning from crops division from demo group is India's best branded fruit company and a market leader in controlled cultivation
              and marketing of high quality fruits to domastic and international customers in specially responsible manner.
            </div>
            <div className="colorFont" style={{ paddingBottom: 40 }}>
              We are happy to serve fresh delicious fruits.
            </div>
            <div className="bigBoder borderPadding" />
          </div>
        </div>
      </div>
    )
  }
}


export default Home;