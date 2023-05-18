import React from "react";
import loginbg from "./login-bg.jpg";
import styles from "./Login.module.css";
import logo from "./Gupta-Promoters-Logo.svg";

function Login() {
  return (
    <div>
      <div className={styles.mainBox}>
        <div className="container my-5">
          <div className="row ml-0 mr-0">
            <div className="col-md-6 px-0 d-flex align-items-center justify-content-center">
              <div style={{ width: "50%" }}>
                <img className="img-fluid" src={logo} alt="logo" />
                <form>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className={styles.btn}>
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <img
                className="img-fluid"
                src={loginbg}
                alt="login-bg"
                style={{ height: "515px", borderRadius: "0 14px 14px 0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
