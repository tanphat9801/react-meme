import { useState } from "react";
import { Link } from "react-router-dom";
import { validateForm } from "../../helper";
import Input from "../../shared/Input/Input";
import { useDispatch } from "react-redux";
import { actLoginAsync } from "../../stores/Auth/action";
import Button from "./../../shared/Button/Button";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isDirty, setIsDirty] = useState(true);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: {
      value: "admin@gmail.com",
      error: "",
    },
    password: {
      value: "123123",
      error: "",
    },
  });

  const handleOnChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value.trim();
    const error = validateForm({ value, name });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });
    setIsDirty(true);
  };

  const checkIsValid = () => {
    if (!isDirty) {
      setFormData({
        email: {
          value: "",
          error: validateForm({
            value: "",
            name: "email",
          }),
        },
        password: {
          value: "",
          error: validateForm({
            value: "",
            name: "password",
          }),
        },
      });
      return false;
    }

    if (formData.email.error || formData.password.error) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = checkIsValid();

    if (!valid) {
      console.log("error");
      return;
    }

    const { email, password } = formData;
    if (loading) {
      return;
    }
    setLoading(true);
    setFormError("");
    dispatch(actLoginAsync(email.value, password.value)).then((res) => {
      if (res.check) {
        console.log("thanh cong");
      } else {
        console.log("that bai ");
        setFormError(res.error);
      }
      setLoading(false);
    });
  };

  return (
    <>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <h2>Đăng nhập</h2>
            <div className="ass1-login__form">
              <p className="text-err">{formError}</p>
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email.value}
                  name="email"
                  onChange={handleOnChange}
                  autoComplete="off"
                  error={formData.email.error}
                />
                <Input
                  type="password"
                  placeholder="Nhập password"
                  name="password"
                  value={formData.password.value}
                  onChange={handleOnChange}
                  autoComplete="off"
                  error={formData.password.error}
                />
                <div className="ass1-login__send">
                  <Link to="/register">Đăng ký một tài khoản</Link>
                  <Button loading={loading} type="submit" className="ass1-btn">
                    Đăng Nhập
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
