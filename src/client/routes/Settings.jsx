import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userHooks } from "../../common/api/user";
import { useFormik } from "formik";
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

  const logoutEvents = {
    onClick(e) {
      e.preventDefault();
      logout.mutate(undefined, { onSuccess: this.onSuccess });
    },
    onSuccess() {
      navigate("/", { replace: true });
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 xl:container xl:mx-auto px-5 pt-10 pb-5 sm:px-20 sm:py-16 max-sm:-mx-6 max-sm:-mt-4 rounded-xl shadow-md shadow-slate-200 bg-white">
      <div>
        <CustomSection title="Персональные данные">
          <div className="flex items-center mb-10">
            <img src="/users/1.png" alt="#" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full" />
            <span className="flex flex-col text-left ml-6 sm:ml-7 mr-8">
              <span className="font-semibold text-lg sm:text-lg">KazGazProm</span>
              <span className="font-normal text-xs sm:text-sm">Kazgazprom@email.com</span>
            </span>

            <button
              type="button"
              onClick={(e) => logoutEvents.onClick(e)}
              className="ml-auto bg-transparent text-sm sm:text-base text-rose-700 focus:outline-none px-3 py-3 -mr-3"
            >
              Выйти
            </button>
          </div>

          <BaseForm>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-6">
              <CustomField title="Имя" required>
                <CustomInput name="name" type="text" />
              </CustomField>
              <CustomField title="Фамилия" required>
                <CustomInput name="surname" type="text" />
              </CustomField>
              <CustomField title="Должность" required>
                <CustomInput name="job_title" type="text" />
              </CustomField>
              <CustomField title="Название компании" required>
                <CustomInput name="company_name" type="text" />
              </CustomField>
            </div>
            <CustomButton className="mt-8 mb-4">Сохранить</CustomButton>
          </BaseForm>
        </CustomSection>
      </div>

      <div>
        <CustomSection title="Контактная информация">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-6">
            <CustomField title="Номер телефона">
              <CustomInput type="text" defaultValue="+7-707-787-8778" />
            </CustomField>
            <CustomField title="Город">
              <CustomInput type="text" defaultValue="Алматы" />
            </CustomField>
            <CustomField title="Почта">
              <CustomInput type="text" defaultValue="nurtas.dauletbaev@mail.com" />
            </CustomField>
            <CustomField title="Адрес">
              <CustomInput type="text" defaultValue="Медеуский район, Пушкина 41б" />
            </CustomField>
          </div>
          <CustomButton className="mt-8 mb-4">Сохранить</CustomButton>
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
      <div className="border-gray-200 border-y-2 sm:border-2 sm:rounded-xl px-5 sm:px-8 py-8 max-sm:-mx-6 ">
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

function CustomInput({ className, ...props }) {
  const defaultValue = props.defaultValue;
  const [currentValue, setCurrentValue] = useState(defaultValue);

  return (
    <BaseInput
      className={`text-sm sm:text-base text-black border-2 mt-2 px-3 py-[10px] bg-zinc-100 focus:bg-zinc-200 focus:outline-none transition ease-in-out duration-150 rounded ${
        currentValue === defaultValue ? "border-zinc-200" : "border-emerald-700"
      }`}
      onChange={(e) => setCurrentValue(e.target.value)}
      {...props}
    />
  );
}

function CustomButton({ className, type, ...props }) {
  return (
    <button
      className={`block rounded-full text-center text-sm sm:text-base px-8 py-3 bg-zinc-900 text-white font-semibold select-none ${className}`}
      type={type ?? "submit"}
      {...props}
    >
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
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        d="M5 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7.81a5 5 0 0 0-1.159-3.2L18.5 1.8A5 5 0 0 0 14.66 0H5Zm1.64 15.5a.64.64 0 0 0-.64.64v.32c0 .354.287.64.64.64h10.72a.64.64 0 0 0 .64-.64v-.32a.64.64 0 0 0-.64-.64H6.64ZM6 11.64a.64.64 0 0 1 .64-.64h10.72a.64.64 0 0 1 .64.64v.32a.64.64 0 0 1-.64.64H6.64a.64.64 0 0 1-.64-.64v-.32Zm.64-5.14a.64.64 0 0 0-.64.64v.32c0 .353.287.64.64.64h7.72a.64.64 0 0 0 .64-.64v-.32a.64.64 0 0 0-.64-.64H6.64Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
