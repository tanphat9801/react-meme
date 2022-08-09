import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { validateForm, validateFormRegister } from "../../helper";
import { useNotAutheticated } from "../../hook/useNotAutheticated";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import { actRegisterAsync } from "../../stores/Auth/action";

const RegisterPage = () => {
  useNotAutheticated();
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    repassword: {
      value: "",
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
  };

  const checkIsValid = () => {
    const newFormData = {};
    Object.keys(formData).forEach((key) => {
      const formValue = formData[key];
      newFormData[key] = {
        value: formValue.value,
        error: validateFormRegister({
          value: formValue.value,
          name: key,
        }),
      };
    });
    setFormData(newFormData);

    if (
      formData.email.error ||
      formData.password.error ||
      formData.fullname.error ||
      formData.repassword.error
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = checkIsValid();

    if (!valid || loading) {
      return;
    }
    setFormError("");
    setLoading(true);
    const actAsync = actRegisterAsync({
      fullname: formData.fullname.value,
      email: formData.email.value,
      password: formData.password.value,
      repassword: formData.repassword.value,
    });
    dispatch(actAsync).then((res) => {
      if (res.check) {
        history.push("/login");
      } else {
        setFormError(res.error);
        setLoading(false);
      }
    });
  };

  return (
    <>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <h2>Đăng ký một tài khoản</h2>
            <div className="ass1-login__form">
              {formError && <p className="text-err">{formError}</p>}
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Tên hiển thị"
                  name="fullname"
                  onChange={handleOnChange}
                  value={formData.fullname.value}
                  error={formData.fullname.error}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleOnChange}
                  value={formData.email.value}
                  error={formData.email.error}
                />
                <Input
                  type="password"
                  placeholder="Mật khẩu"
                  name="password"
                  autoComplete="off"
                  onChange={handleOnChange}
                  value={formData.password.value}
                  error={formData.password.error}
                />
                <Input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  name="repassword"
                  autoComplete="password"
                  onChange={handleOnChange}
                  value={formData.repassword.value}
                  error={formData.repassword.error}
                />
                <div className="ass1-login__send">
                  <Link to="/login">Đăng nhập</Link>
                  <Button type="submit" className="ass1-btn" loading={loading}>
                    Đăng ký
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

export default RegisterPage;
