/* jshint esversion: 6 */
/* jshint ignore:start */

import React, { useContext, useEffect, useState } from 'react';
import SearchIcon from "../Icon/search.svg";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/MyProvider';
import axios from "axios";
import { showTost } from '../showTost';

const Religion = () => {
  const { setReligion, basUrl } = useContext(MyContext);
  const [Data, setdata] = useState([]);
  const [select, setselect] = useState();

  const naviget = useNavigate();

  const SelectHandler = (i) => {
    setselect(i);
  };

  useEffect(() => {
    axios.post(`${basUrl}religionlist.php`)
      .then((res) => {
        setdata(res.data.religionlist);
      });
  }, []);

  const SubmitHandler = () => {
    if (select) {
      naviget("/preference");
      setReligion(String(select));
    } else {
      showTost({ title: "Please Select Religion" });
    }
  };

  return (
    <div>
      <div className="w-[100%] multisteup-wrapper pt-[20px] max-_430_:h-[100vh]">
        <div className="container mx-auto">
          <section class="steps step-1 active rounded-[40px] relative">
            <div className="w-[100%] bg-[#EFEDEE]  pt-[30px] z-[999]  pb-[20px] fixed top-[0px] ">
              <div className="bg-white w-[83%] h-[5px] mx-auto rounded-full">
                <div className="bg-[rgba(152,14,255,255)]  rounded-full w-[72%] h-[5px] "></div>
              </div>
            </div>
            {/* <------------------ Title ---------------------> */}
            <div className="mt-[10px]">
              <h1 className="text-[28px] max-_430_:text-[27px] font-[600]">
                Discover religion 🤗
              </h1>
              <p className="text-[20px] mt-[10px] max-_430_:text-[20px] max-_380_:text-[16px] max-_430_:w-[320px]">
                Share your interesta, passions, and  hobbies. We'll connect you with people
                who share your enthusiasm.
              </p>
            </div>

            <div className="mt-[20px] w-[100%]">
              <div className="w-[100%] flex items-center gap-[10px] px-[15px] mb-[20px] py-[15px] rounded-[10px] focus-within:border-[rgba(152,14,255,1)] border-gray-300 border-[2px]">
                <img src={SearchIcon} alt="" className="w-[20px] h-[20px]" />
                <input
                  type="search"
                  className="outline-none w-[100%] text-black"
                  placeholder="Search.."
                />
              </div>
              <div className="text-center max-_430_:text-start">
                {
                  Data.map((el, i) => {
                    return <button onClick={() => SelectHandler(el.id)} className={` ${select === el.id ? "border-[rgba(152,14,255,255)] bg-[rgba(152,14,255,255)] text-white" : "border-gray-300 text-black"} text-[18px] max-_430_:text-[14px] border-[2px] mb-[10px] px-[15px] py-[8px] max-_430_:py-[5px] rounded-full me-[10px]`}>{el.title}</button>
                  })
                }
              </div>
            </div>
            {/* <!-- Next Button --> */}
            <button style={{ background: "rgba(152,14,255,255)" }}
              onClick={SubmitHandler}
              class="btn btn-w-md nextstep mt-[50px]"
            >
              <div className="flex items-center justify-center gap-[10px]">
                <span className="font-bold text-[1.25rem] text-white">Next</span>
                <svg
                  class="mx-6"
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75455 5.73075H15.4523L11.3296 1.60802C11.2552 1.53617 11.1959 1.45022 11.155 1.35519C11.1142 1.26016 11.0927 1.15795 11.0918 1.05453C11.0909 0.951108 11.1106 0.848543 11.1498 0.752818C11.189 0.657094 11.2468 0.570128 11.3199 0.496995C11.3931 0.423862 11.48 0.366026 11.5758 0.326862C11.6715 0.287698 11.7741 0.267991 11.8775 0.268889C11.9809 0.269788 12.0831 0.291275 12.1781 0.332096C12.2732 0.372918 12.3591 0.432257 12.431 0.50665L17.8833 5.95896C18.0293 6.10503 18.1113 6.30311 18.1113 6.50965C18.1113 6.71618 18.0293 6.91427 17.8833 7.06033L12.431 12.5126C12.2841 12.6545 12.0873 12.733 11.8831 12.7313C11.6789 12.7295 11.4835 12.6476 11.3391 12.5032C11.1947 12.3587 11.1128 12.1634 11.111 11.9592C11.1092 11.7549 11.1877 11.5582 11.3296 11.4113L15.4523 7.28855H1.75455C1.54797 7.28855 1.34986 7.20649 1.20378 7.06041C1.05771 6.91434 0.975649 6.71623 0.975649 6.50965C0.975649 6.30307 1.05771 6.10495 1.20378 5.95888C1.34986 5.81281 1.54797 5.73075 1.75455 5.73075Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Religion
/* jshint ignore:end */
