/* jshint esversion: 6 */
/* jshint ignore:start */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyProvider";
import { showTost } from "../showTost";
import axios from "axios";
export var golas = "";
const Golas = () => {
  const { setGoal, basUrl } = useContext(MyContext);

  const [relationshipgoals, setRelationshipGoal] = useState([]);
  const [selectGoal, setSelectGoal] = useState();

  const navigation = useNavigate();

  useEffect(() => {
    axios.post(`${basUrl}goal.php`)
      .then((res) => {
        setRelationshipGoal(res.data.goallist);
      });
  }, []);

  const SubmitHandler = () => {
    if (selectGoal) {
      navigation("/nearby");
      setGoal(selectGoal);
    } else {
      showTost({ title: "Please Select Relationship Goals" });
    }
  };

  return (
    <div>
      <div className="w-[100%] multisteup-wrapper pt-[20px] max-_430_:pt-[0px]">
        <div className="container mx-auto">
          <section className="steps step-1 active  rounded-[40px] relative ">
            <div className="w-[100%] bg-[#EFEDEE]  pt-[30px] z-[999]  pb-[20px] fixed top-[0px] ">
              <div className="bg-white w-[83%] h-[5px] mx-auto rounded-full">
                <div className="bg-[rgba(152,14,255,255)]  rounded-full w-[45%] h-[5px] "></div>
              </div>
            </div>
            {/* <------------------ Title ---------------------> */}
            <div className="text-start w-[100%]">
              <h1 className="text-[28px] max-_430_:text-[26px] font-[600] max-_430_:w-[250px]">
                Your relationship golas 💘
              </h1>
              <p className="text-[20px] mt-[10px] max-_430_:text-[17px] max-_380_:text-[16px]">
                Chooes the type of relationship your're seeking on
                Datify. Lover,friedship, or somethingin between - its's
                your choice.
              </p>
            </div>

            <div className="mt-[20px] w-[100%]">
              {
                relationshipgoals.map((el, index) => {
                  return <button key={index}
                    onClick={() => setSelectGoal(el.id)}
                    className={`text-start mt-[10px] max-_380_:px-[12px] border-[2px] ${selectGoal === el.id ? "border-[#980EFF]" : "border-gray-300"} px-[15px] py-[10px] rounded-[10px]`}
                  >
                    <h1 className="text-[20px] text-black font-[400]">{el.title}</h1>
                    <p className="text-black text-[16px] max-_430_:text-[14px]">{el.subtitle}</p>
                  </button>
                })
              }
            </div>

            <button style={{ background: "rgba(152,14,255,255)" }}
              onClick={SubmitHandler}
              className="btn btn-w-md nextstep mt-[50px]"
            >
              <div className="flex items-center justify-center gap-[10px]">
                <span className="font-bold text-[1.25rem] text-white">Next</span>
                <svg
                  className="mx-6"
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
  );
};

export default Golas;
/* jshint ignore:end */
