import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userHooks } from "../../common/api/user";
import { citiesHooks } from "../../common/api/cities";
import {
  Form as BaseForm,
  Input as BaseInput,
  Field as BaseField,
  FieldError as BaseFieldError,
} from "../../common/components/Form";
import * as yup from "yup";

export default () => {
  const navigate = useNavigate();
  const logout = userHooks.useUserLogout();
  const user = userHooks.useUser();

  const logoutEvents = {
    onClick(e) {
      e.preventDefault();
      logout.mutate(undefined, { onSuccess: this.onSuccess });
    },
    onSuccess() {
      navigate("/", { replace: true });
    },
  };

  const personalButton = useFormButton();
  const personalForm = usePersonalForm(personalButton.events);

  const contactButton = useFormButton();
  const contactForm = useContactForm(contactButton.events);

  let cities = citiesHooks.useCities();
  cities = cities?.data ?? [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 xl:container xl:mx-auto px-4 pt-10 pb-5 sm:px-20 sm:py-16 max-sm:-mx-6 max-sm:-mt-4 rounded-xl shadow-md shadow-slate-200 bg-white">
      <div>
        <CustomSection title="Персональные данные">
          <div className="flex items-center mb-10">
            <img src="/users/1.png" alt="#" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full" />
            <span className="flex flex-col text-left ml-6 sm:ml-7 mr-8">
              <span className="font-semibold text-lg sm:text-lg">
                {user.get()?.name} {user.get()?.surname}
              </span>
              <span className="font-normal text-xs sm:text-sm">{user.get()?.email}</span>
            </span>

            <button
              type="button"
              onClick={(e) => logoutEvents.onClick(e)}
              className="ml-auto bg-transparent text-sm sm:text-base text-rose-700 focus:outline-none px-3 py-3 -mr-3"
            >
              Выйти
            </button>
          </div>

          <BaseForm onSubmit={personalForm.form.handleSubmit}>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-6">
              <CustomField title="Имя" required>
                <CustomInput
                  value={personalForm.form.values.name ?? ""}
                  initialValue={personalForm.initialValues.name ?? ""}
                  onChange={personalForm.form.handleChange}
                  onBlur={personalForm.form.handleBlur}
                  name="name"
                  type="text"
                />
                {personalForm.form.touched.name && personalForm.form.errors.name ? (
                  <CustomFieldError text={personalForm.form.errors.name} />
                ) : null}
              </CustomField>
              <CustomField title="Фамилия" required>
                <CustomInput
                  value={personalForm.form.values.surname ?? ""}
                  initialValue={personalForm.initialValues.surname ?? ""}
                  onChange={personalForm.form.handleChange}
                  onBlur={personalForm.form.handleBlur}
                  name="surname"
                  type="text"
                />
                {personalForm.form.touched.surname && personalForm.form.errors.surname ? (
                  <CustomFieldError text={personalForm.form.errors.surname} />
                ) : null}
              </CustomField>
              <CustomField title="Должность">
                <CustomInput
                  value={personalForm.form.values.job_title ?? ""}
                  initialValue={personalForm.initialValues.job_title ?? ""}
                  onChange={personalForm.form.handleChange}
                  onBlur={personalForm.form.handleBlur}
                  name="job_title"
                  type="text"
                />
                {personalForm.form.touched.job_title && personalForm.form.errors.job_title ? (
                  <CustomFieldError text={personalForm.form.errors.job_title} />
                ) : null}
              </CustomField>
              <CustomField title="Название компании" required>
                <CustomInput
                  value={personalForm.form.values.company_name ?? ""}
                  initialValue={personalForm.initialValues.company_name ?? ""}
                  onChange={personalForm.form.handleChange}
                  onBlur={personalForm.form.handleBlur}
                  name="company_name"
                  type="text"
                />
                {personalForm.form.touched.company_name && personalForm.form.errors.company_name ? (
                  <CustomFieldError text={personalForm.form.errors.company_name} />
                ) : null}
              </CustomField>
            </div>
            <CustomButton className="mt-8 mb-4" state={personalButton.state}>
              {personalButton.state === personalButton.states.SUCCESS
                ? "Сохранено"
                : personalButton.state === personalButton.states.ERROR
                ? "Не сохранено"
                : personalButton.state === personalButton.states.LOADING
                ? "Идет сохранение"
                : "Сохранить"}
            </CustomButton>
          </BaseForm>
        </CustomSection>
      </div>

      <div>
        <CustomSection title="Контактная информация">
          <BaseForm onSubmit={contactForm.form.handleSubmit}>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-6">
              <CustomField title="Номер телефона" required>
                <CustomInput
                  value={contactForm.form.values.phone ?? ""}
                  initialValue={contactForm.initialValues.phone ?? ""}
                  onChange={contactForm.form.handleChange}
                  onBlur={contactForm.form.handleBlur}
                  name="phone"
                  type="text"
                />
                {contactForm.form.touched.phone && contactForm.form.errors.phone ? (
                  <CustomFieldError text={contactForm.form.errors.phone} />
                ) : null}
              </CustomField>
              <CustomField title="Город" required>
                <CustomSelect
                  value={contactForm.form.values.city ?? -1}
                  onChange={contactForm.form.handleChange}
                  onBlur={contactForm.form.handleBlur}
                  name="city"
                  options={cities}
                />
                {contactForm.form.touched.city && contactForm.form.errors.city ? (
                  <CustomFieldError text={contactForm.form.errors.city} />
                ) : null}
              </CustomField>
              <CustomField title="Почта" required>
                <CustomInput
                  value={contactForm.form.values.email ?? ""}
                  initialValue={contactForm.initialValues.email ?? ""}
                  onChange={contactForm.form.handleChange}
                  onBlur={contactForm.form.handleBlur}
                  name="email"
                  type="text"
                />
                {contactForm.form.touched.email && contactForm.form.errors.email ? (
                  <CustomFieldError text={contactForm.form.errors.email} />
                ) : null}
              </CustomField>
              <CustomField title="Адрес">
                <CustomInput
                  value={contactForm.form.values.address ?? ""}
                  initialValue={contactForm.initialValues.address ?? ""}
                  onChange={contactForm.form.handleChange}
                  onBlur={contactForm.form.handleBlur}
                  name="address"
                  type="text"
                />
                {contactForm.form.touched.address && contactForm.form.errors.address ? (
                  <CustomFieldError text={contactForm.form.errors.address} />
                ) : null}
              </CustomField>
            </div>
            <CustomButton className="mt-8 mb-4" state={contactButton.state}>
              {contactButton.state === contactButton.states.SUCCESS
                ? "Сохранено"
                : contactButton.state === contactButton.states.ERROR
                ? "Не сохранено"
                : contactButton.state === contactButton.states.LOADING
                ? "Идет сохранение"
                : "Сохранить"}
            </CustomButton>
          </BaseForm>
        </CustomSection>

        <CustomSection title="Документы">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2">
            <CustomField title="Паспорт" tag="div">
              <FileInput />
            </CustomField>
            <CustomField title="Удостоверение" tag="div">
              <FileInput />
            </CustomField>
            <CustomField title="Страховка" tag="div">
              <FileInput />
            </CustomField>
          </div>
          <CustomButton className="mt-8 mb-4">Сохранить</CustomButton>
        </CustomSection>
      </div>
    </div>
  );
};

function CustomSection({ title, children }) {
  return (
    <div className="mb-8">
      <div className="uppercase text-gray-600 text-sm sm:text-base font-semibold mb-4">{title}</div>
      <div className="border-gray-200 border-y-2 sm:border-2 sm:rounded-xl px-4 sm:px-8 py-8 max-sm:-mx-4">
        {children}
      </div>
    </div>
  );
}

function CustomField({ className, children, ...props }) {
  return (
    <BaseField
      className={`flex flex-col text-gray-600 text-xs sm:text-base py-2  ${className}`}
      {...props}
    >
      {children}
    </BaseField>
  );
}

function CustomFieldError({ className, text }) {
  return (
    <BaseFieldError className={`text-base text-rose-700 mt-1 ${className}`}>{text}</BaseFieldError>
  );
}

function CustomInput({ className, initialValue, onChange, ...props }) {
  return (
    <BaseInput
      className={`text-sm sm:text-base text-black border-2 mt-2 px-3 py-[10px] bg-zinc-100 focus:bg-zinc-200 focus:outline-none transition ease-in-out duration-150 rounded ${
        props.value === initialValue ? "border-zinc-200" : "border-emerald-700"
      }`}
      onChange={onChange ?? (() => null)}
      {...props}
    />
  );
}

function CustomSelect({ className, options, onFocus, ...props }) {
  return (
    <label className="mt-2 w-full text-zinc-200">
      <div className="relative">
        <select
          className="text-sm sm:text-base text-black border-2 px-4 py-[10px] bg-zinc-100 focus:bg-zinc-200 focus:outline-none transition ease-in-out duration-150 rounded  w-full appearance-none"
          {...props}
        >
          <option value={-1} disabled hidden>
            Не выбрано
          </option>

          {options.map((value, index) => (
            <option value={value.id} key={index}>
              {value.name}
            </option>
          ))}
        </select>

        <div className="absolute top-2 bottom-2 right-1 flex justify-center items-center w-10 mt-2 transition ease-in-out duration-150 pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fill="#000"
              d="M9.244 10.977 5.177 6.911a.84.84 0 0 0-1.183 0 .83.83 0 0 0 0 1.175l5.491 5.491a.83.83 0 0 0 1.175 0l5.492-5.491a.83.83 0 1 0-1.175-1.175l-4.067 4.133-.833.696-.833-.763Z"
            />
          </svg>
        </div>
      </div>
    </label>
  );
}

function CustomButton({ className, state, type, ...props }) {
  return (
    <button
      className={`flex justify-center items-center rounded-full text-center text-sm sm:text-base px-8 py-3 bg-zinc-900 text-white font-semibold select-none ${className} ${
        state === "loading" ? "bg-zinc-900" : state === "success" ? "bg-emerald-800" : "bg-zinc-800"
      }`}
      type={type ?? "submit"}
      disabled={state === "loading"}
      {...props}
    >
      <div role="status">
        {state === "loading" && (
          <svg
            aria-hidden="true"
            className="w-5 h-5 -ml-3 mr-3 text-gray-200 animate-spin dark:text-zinc-100 fill-zinc-500"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill="#0D0D0D"
              d="M85.66 22.303a4.125 4.125 0 0 1 .342 5.82l-43.997 49.5a4.125 4.125 0 0 1-6.167 0L13.84 52.873a4.125 4.125 0 0 1 6.162-5.478L38.92 68.676l40.92-46.035a4.124 4.124 0 0 1 5.82-.338Z"
            />
          </svg>
        )}

        {state === "success" && (
          <svg
            aria-hidden="true"
            className="w-5 h-5 -ml-3 mr-3 dark:text-zinc-100 fill-white stroke-white"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              strokeWidth="3.2"
              d="M85.66 22.303a4.125 4.125 0 0 1 .342 5.82l-43.997 49.5a4.125 4.125 0 0 1-6.167 0L13.84 52.873a4.125 4.125 0 0 1 6.162-5.478L38.92 68.676l40.92-46.035a4.124 4.124 0 0 1 5.82-.338Z"
            />
          </svg>
        )}
      </div>
      {props.children}
    </button>
  );
}

function FileInput({ className, ...props }) {
  const target = useRef(null);

  const defaultFile = props.file ?? null;
  const [selectedFile, setSelectedFile] = useState(defaultFile);

  const onFileChange = (e) => {
    setSelectedFile(target.current.files[0]);
  };

  const onFileDelete = () => {
    if (target) target.current.value = "";
    setSelectedFile(null);
  };

  return (
    <>
      <label
        className={`flex items-center text-base text-black whitespace-nowrap border-2 mt-2 px-2 sm:pl-3 sm:pr-4 py-[10px] bg-zinc-100 hover:bg-zinc-200 transition ease-in-out duration-150 rounded cursor-pointer ${
          selectedFile === defaultFile ? "border-zinc-200" : "border-emerald-700"
        }`}
      >
        <FileIcon className={`w-5 h-5 shrink-0 ${selectedFile ? "fill-black" : "fill-gray-500"}`} />

        <input
          ref={target}
          className={`${className}`}
          type="file"
          onChange={onFileChange}
          hidden
          {...props}
        />

        <span className="ml-2 sm:ml-3 grow-[1] overflow-hidden text-sm sm:text-base">
          {selectedFile ? selectedFile.name : "Не выбрано"}
        </span>
      </label>

      {selectedFile ? (
        <button
          type="button"
          className="mt-3 text-rose-700 self-start text-sm"
          onClick={onFileDelete}
        >
          Удалить
        </button>
      ) : (
        <span className="block h-5" />
      )}
    </>
  );
}

function FileIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M5 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7.81a5 5 0 0 0-1.159-3.2L18.5 1.8A5 5 0 0 0 14.66 0H5Zm1.64 15.5a.64.64 0 0 0-.64.64v.32c0 .354.287.64.64.64h10.72a.64.64 0 0 0 .64-.64v-.32a.64.64 0 0 0-.64-.64H6.64ZM6 11.64a.64.64 0 0 1 .64-.64h10.72a.64.64 0 0 1 .64.64v.32a.64.64 0 0 1-.64.64H6.64a.64.64 0 0 1-.64-.64v-.32Zm.64-5.14a.64.64 0 0 0-.64.64v.32c0 .353.287.64.64.64h7.72a.64.64 0 0 0 .64-.64v-.32a.64.64 0 0 0-.64-.64H6.64Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function usePersonalForm(props) {
  const user = userHooks.useUser();

  const [initialValues, setinitialValues] = useState({
    name: user.get()?.name ?? "",
    surname: user.get()?.surname ?? "",
    job_title: user.get()?.job_title ?? "",
    company_name: user.get()?.company_name ?? "",
  });

  const propsOnSuccess = props.onSuccess;

  props.onSuccess = () => {
    setinitialValues({
      name: form.values.name,
      surname: form.values.surname,
      job_title: form.values.job_title,
      company_name: form.values.company_name,
    });

    if (propsOnSuccess instanceof Function) {
      propsOnSuccess();
    }
  };

  const tools = useFormTools(props);

  const form = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      name: yup.string().required("Это поле обязательное!"),
      surname: yup.string().required("Это поле обязательное!"),
      company_name: yup.string().required("Это поле обязательное!"),
    }),
    validateOnChange: false,
    onSubmit: tools.events.onSubmit.bind(tools.events),
  });

  return {
    form,
    initialValues,
    loading: tools.state.loading,
  };
}

function useContactForm(props) {
  const user = userHooks.useUser();

  const [initialValues, setinitialValues] = useState({
    phone: user.get()?.phone ?? "",
    city: user.get()?.city ?? "",
    email: user.get()?.email ?? "",
    address: user.get()?.address ?? "",
  });

  const propsOnSuccess = props.onSuccess;

  props.onSuccess = () => {
    setinitialValues({
      phone: form.values.phone,
      city: form.values.city,
      email: form.values.email,
      address: form.values.address,
    });

    if (propsOnSuccess instanceof Function) {
      propsOnSuccess();
    }
  };

  const tools = useFormTools(props);

  const form = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      phone: yup
        .string()
        .required("Это поле обязательное!")
        .matches(/^\S*$/, "Введите его без пробелов")
        .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, "Введите номер телефона"),
      email: yup.string().required("Это поле обязательное!").email("Введите адрес почты"),
      city: yup.string().required("Это поле обязательное!"),
    }),
    validateOnChange: false,
    onSubmit: tools.events.onSubmit.bind(tools.events),
  });

  return {
    form,
    initialValues,
    loading: tools.state.loading,
  };
}

function useFormTools(props) {
  props = {
    onLoading: props?.onLoading ?? (() => null),
    onSuccess: props?.onSuccess ?? (() => null),
    onError: props?.onError ?? (() => null),
    onAnyResult: props?.onAnyResult ?? (() => null),
  };

  const user = userHooks.useUser();
  const update = userHooks.useUserUpdate();
  const [loading, setLoading] = useState(false);

  const filters = {
    takeOnlyChanged(data) {
      const form = data;

      return Object.keys(data).reduce((_data, key) => {
        if (form[key] === "") form[key] = null;
        if (form[key] !== user.get()?.[key]) _data[key] = form[key];
        return _data;
      }, {});
    },
  };

  const events = {
    onSubmit(data) {
      data = filters.takeOnlyChanged(data);
      const nothingChanged = !Object.keys(data).length;
      if (nothingChanged) return;
      if (loading) return;

      setLoading(true);
      props.onLoading();

      update.mutate(data, {
        onSuccess: this.onSuccess.bind(this, data),
        onError: this.onError,
        onSettled: this.onAnyResult,
      });
    },
    onSuccess(data) {
      props.onSuccess();
      user.set({
        ...user.get(),
        ...data,
      });
    },
    onError(e) {
      props.onError(e);
    },
    onAnyResult() {
      setLoading(false);
      props.onAnyResult();
    },
  };

  return { events, state: { loading } };
}

function useFormButton() {
  const states = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
    DEFAULT: "default",
  };

  const [state, setState] = useState(states.DEFAULT);

  return {
    state,
    states,
    events: {
      onLoading() {
        setState(states.LOADING);
      },
      onSuccess() {
        setState(states.SUCCESS);
      },
      onError() {
        setState(states.ERROR);
      },
      onAnyResult() {
        setTimeout(() => setState(states.DEFAULT), 3000);
      },
    },
  };
}
