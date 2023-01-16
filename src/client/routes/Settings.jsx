export default () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 xl:container xl:mx-auto px-3 py-10 sm:px-20 sm:py-16 max-sm:-mx-3 max-sm:-mt-4 rounded-xl shadow-md shadow-slate-200 bg-white">
      <div>
        <Section title="Персональные данные">
          <div className="flex items-center mb-10">
            <img src="/users/1.png" alt="#" className="w-12 h-12 lg:w-14 lg:h-14 rounded-full" />
            <span className="flex flex-col text-left ml-6 sm:ml-7">
              <span className="font-semibold text-lg">KazGazProm</span>
              <span className="font-normal text-sm">Kazgazprom@email.com</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <Field name="Имя" type="text" value="Нуртас" />
            <Field name="Фамилия" type="text" value="Даулетбаев" />
            <Field name="Должность" type="text" value="HR Manager" />
            <Field name="Название компании" type="text" value="KazGazProm" />
          </div>
          <Button className="mt-8 mb-4">Сохранить</Button>
        </Section>
      </div>

      <div>
        <Section title="Контактная информация">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <Field name="Номер телефона" type="text" value="+7-707-787-8778" />
            <Field name="Город" type="text" value="Алматы" />
            <Field name="Почта" type="text" value="nurtas.dauletbaev@mail.com" />
            <Field name="Адрес" type="text" value="Медеуский район, Пушкина 41б" />
          </div>
          <Button className="mt-8 mb-4">Сохранить</Button>
        </Section>
        <Section title="Документы">...</Section>
      </div>
    </div>
  );
};

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <div className="uppercase text-gray-600 text-sm sm:text-base font-semibold mb-4">{title}</div>
      <div className="border-gray-200 border-y-2 sm:border-2 sm:rounded-xl px-3 sm:px-8 py-8 max-sm:-mx-3 ">
        {children}
      </div>
    </div>
  );
}

function Field({ name, ...props }) {
  return (
    <label className="flex flex-col text-gray-600 text-sm sm:text-base py-2">
      <span>{name}</span>
      <Input {...props} />
    </label>
  );
}

function Input({ className, ...props }) {
  return (
    <input
      className="text-base text-black border-2 border-zinc-200 mt-2 px-4 py-[10px] bg-zinc-100 focus:bg-zinc-200 focus:outline-none transition ease-in-out duration-150 rounded"
      {...props}
    />
  );
}

function Button({ className, ...props }) {
  return (
    <button
      type="button"
      className={`block rounded-full text-center text-base px-8 py-3 bg-zinc-900 text-white font-semibold ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
