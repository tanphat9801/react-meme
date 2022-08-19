import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { validateFormChangePassword } from "../../helper";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import { actChangePasswordAsync } from "../../stores/Auth/action";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formPassword, setFormPassword] = useState({
    oldPassword: {
      value: "",
      error: "",
    },
    newPassword: {
      value: "",
      error: "",
    },
    reNewPassword: {
      value: "",
      error: "",
    },
  });

  const handleChangePassword = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const error = validateFormChangePassword({ name, value });

    setFormPassword({
      ...formPassword,
      [name]: {
        value,
        error,
      },
    });
  };

  const checkIsValid = () => {
    const newFormData = {};
    Object.keys(formPassword).forEach((key) => {
      const formValue = formPassword[key];
      newFormData[key] = {
        value: formValue.value,
        error: validateFormChangePassword({
          value: formValue.value,
          name: key,
        }),
      };
    });
    setFormPassword(newFormData);

    if (
      formPassword.oldPassword.error ||
      formPassword.newPassword.error ||
      formPassword.reNewPassword.error
    ) {
      return false;
    }

    return true;
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();

    const valid = checkIsValid();

    if (!valid || loading) {
      return;
    }
    setFormError("");
    setLoading(true);

    const { oldPassword, newPassword, reNewPassword } = formPassword;

    dispatch(
      actChangePasswordAsync(
        oldPassword.value,
        newPassword.value,
        reNewPassword.value
      )
    ).then((res) => {
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
            <h2>Đổi mật khẩu</h2>
            <div className="ass1-login__form">
              {formError && <p className="text-err">{formError}</p>}
              <form onSubmit={handleSubmitChange}>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu cũ"
                  required
                  name="oldPassword"
                  value={formPassword.oldPassword.value}
                  error={formPassword.oldPassword.error}
                  onChange={handleChangePassword}
                />
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu mới"
                  required
                  name="newPassword"
                  value={formPassword.newPassword.value}
                  error={formPassword.newPassword.error}
                  onChange={handleChangePassword}
                />
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Xác nhận mật khẩu mới"
                  required
                  name="reNewPassword"
                  value={formPassword.reNewPassword.value}
                  error={formPassword.reNewPassword.error}
                  onChange={handleChangePassword}
                />
                <div className="ass1-login__send justify-content-center">
                  <Button className="ass1-btn" loading={loading}>
                    Gửi
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

export default ChangePassword;
