import React from "react";
import { NavLink } from "react-router-dom";


function Refer() {
  return (
    <div className="container">
      <div className="pt-4 pb-4">UI/UX {">"} Refer&Earn</div>
      <div className="row d-flex justify-content-between align-content-center">
        <div className="col-lg-6 col-sm-12 p-2 text-center d-flex flex-column justify-content-around wallet-detail">
          <div className="d-flex justify-content-between align-items-center flex-wrap ">

            <div>
              <span className="title">Referral Earning</span>
              <div className="earning">₹ 2,500</div>
            </div>

            <div>
              <span className="title">Total Referrals</span>
              <div className="earning">7</div>
            </div>

            <div>
              <span className="title">Wallet Balance</span>
              <div className="earning">₹ 500</div>
            </div>

            <div className="mt-3">
              <button>Withdraw Balance</button>
            </div>

          </div>
          
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex mt-sm-3 flex-column justify-content-center pt-3">
            <h1>Your Referral Code </h1>
            <div className="referral-code-box d-flex justify-content-center align-items-center">
              <h3 className="code">EDCH54</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="referral-working pt-5">
        <div className="row">
          <h3 className="title mb-4">How does it work ?</h3>

          <div className="col-lg-6 pb-4 ">
          <div className="d-flex">
          <div>
              <img className="icon" src="./images/group.svg" alt="group" />
            </div>
            <div className="detail">
              <div className="detail-title">Invite your Friends</div>
              <div className="detail-des">
                Share the link tutedude.com with your friends
              </div>
            </div>
          </div>
         
          </div>

          <div className="col-lg-6 pb-4 ">
          <div className="d-flex ">
          <div>
              <img className="icon" src="./images/tag.svg" alt="tag" />
            </div>
            <div className="detail">
              <div className="detail-title">Friend purchases any course</div>
              <div className="detail-des">
              Using your REFERRAL CODE in the payments page
              </div>
            </div>
          </div>
          </div>

          <div className="col-lg-6 pb-4 ">
           <div className="d-flex">
           <div>
              <img className="icon" src="./images/rupee.svg" alt="rupee" />
            </div>
            <div className="detail">
              <div className="detail-title">You get ₹ 200 as referral money</div>
              <div className="detail-des">
              On total purchase the friend makes, into your wallet
              </div>
            </div>
           </div>
          </div>

          <div className="col-lg-6 pb-4">
            <div className="d-flex">
            <div>
              <img className="icon" src="./images/percent.svg" alt="percent" />
            </div>
            <div className="detail">
              <div className="detail-title">Your Friend gets ₹ 200 Off </div>
              <div className="detail-des">You get ₹ 200 as referral money
              </div>
            </div>
            </div>
          </div>

          <div className="col-lg-6 pb-4">
          <div className="d-flex">
          <div>
              <img className="icon" src="./images/wallet.svg" alt="wallet" />
            </div>
            <div className="detail">
              <div className="detail-title">Transfer money from wallet</div>
              <div className="detail-des">
              When the wallet balance reaches ₹200 or more, you can withdraw it
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
      <div className="pt-5">
        <div className="mb-4">
          <NavLink to="/friend-refer">Friend Who Enrolled</NavLink>
        </div>
        <div>
          <NavLink href="/">Terms & Conditions</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Refer;
