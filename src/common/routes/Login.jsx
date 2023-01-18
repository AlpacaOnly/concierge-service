import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="bg-white sm:bg-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-fill">
        <div className="hidden lg:flex lg:justify-center">
          <div className="self-center px-12">
            <svg viewBox="0 0 52 50" fill="none" className="w-10 h-10 lg:w-96 lg:h-96 mb-8">
              <path
                className="fill-zinc-700 stroke-bgzinc-700"
                strokeWidth="0.5"
                d="M3 3.476C3 3.213 3.213 3 3.477 3h38.619a.476.476 0 1 1 0 .951H3.954V41.53a.476.476 0 0 1-.954 0V3.476ZM8.721 46.524c0-.262.214-.475.477-.475H47.34V8.47a.476.476 0 0 1 .954 0v38.054a.476.476 0 0 1-.477.476H9.198a.476.476 0 0 1-.477-.476ZM47.672 4.531a.475.475 0 0 0 .01-.672.478.478 0 0 0-.673-.012L3.622 45.707a.475.475 0 0 0-.011.672.478.478 0 0 0 .674.012L47.672 4.53Z"
              />
              <path
                className="fill-zinc-700 stroke-bgzinc-700"
                strokeWidth="0.5"
                d="M15.855 9.892h-1.71a2.117 2.117 0 0 0-.27-.743 2 2 0 0 0-1.156-.899 2.61 2.61 0 0 0-.8-.118c-.51 0-.96.127-1.353.383-.393.252-.701.623-.924 1.113-.222.486-.333 1.08-.333 1.783 0 .714.11 1.316.333 1.806.226.486.534.854.924 1.104.393.246.842.369 1.348.369.28 0 .543-.037.787-.11.246-.075.467-.186.662-.332a2.03 2.03 0 0 0 .782-1.268l1.71.009c-.064.444-.203.86-.416 1.25-.21.389-.486.732-.828 1.03-.34.295-.74.526-1.197.694a4.477 4.477 0 0 1-1.523.246c-.822 0-1.557-.19-2.203-.57-.646-.38-1.155-.93-1.527-1.647-.372-.717-.557-1.578-.557-2.581 0-1.007.187-1.867.562-2.582.375-.717.885-1.266 1.531-1.646.646-.38 1.378-.57 2.194-.57.522 0 1.006.073 1.454.219.448.146.847.36 1.198.643.35.28.638.623.864 1.03.228.405.378.867.448 1.387ZM41.242 35.491c.317.222.497.532.54.93h1.632a2.43 2.43 0 0 0-.444-1.395 2.846 2.846 0 0 0-1.184-.953c-.5-.231-1.082-.347-1.746-.347-.655 0-1.242.116-1.76.347a2.96 2.96 0 0 0-1.23.962 2.404 2.404 0 0 0-.448 1.446c0 .669.223 1.206.668 1.61.448.401 1.057.7 1.828.898l1.065.274c.336.085.628.183.878.292.253.106.45.24.59.401.14.158.212.36.215.602a1.122 1.122 0 0 1-.243.703 1.572 1.572 0 0 1-.658.465c-.277.11-.6.164-.97.164a2.74 2.74 0 0 1-.96-.16 1.596 1.596 0 0 1-.69-.483 1.413 1.413 0 0 1-.301-.812h-1.669c.025.62.186 1.147.485 1.578.302.432.72.76 1.252.986.537.224 1.17.337 1.898.337.75 0 1.388-.116 1.915-.347.53-.234.935-.558 1.216-.971.28-.417.42-.899.42-1.446 0-.404-.076-.757-.228-1.058a2.35 2.35 0 0 0-.622-.77 3.594 3.594 0 0 0-.882-.53 6.044 6.044 0 0 0-1.02-.333l-.877-.219a5.557 5.557 0 0 1-.572-.168 2.615 2.615 0 0 1-.516-.247 1.21 1.21 0 0 1-.37-.365.943.943 0 0 1-.133-.506c.003-.234.072-.442.206-.625.134-.182.327-.326.58-.433a2.34 2.34 0 0 1 .91-.16c.503 0 .911.111 1.225.333Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col sm:justify-center sm:px-4 md:px-8">
          <form className="max-w-[500px] w-full mx-auto bg-white px-6 sm:px-14 py-20 lg:-ml-4 rounded-lg">
            <div className="mb-8 text-gray-800">
              <h2 className="text-4xl font-bold mb-3">Личный кабинет</h2>
              <p className="font-medium text-sm sm:text-base">
                <span className="mr-1">Нет аккаунта?</span>
                <Link to="#" className=" text-sky-600">
                  Создать аккаунт
                </Link>
              </p>
            </div>

            <Field name="Почта">
              <Input type="text" />
            </Field>
            <Field name="Пароль">
              <Input type="password" />
            </Field>

            <Link
              className="block rounded text-center text-lg w-full my-8 py-3 sm:py-4 bg-zinc-900 shadow-lg shadow-500/50 hover:shadow-gray-500/30 text-white font-semibold"
              to="/panel/settings"
            >
              Войти
            </Link>

            <Link to="#" className="text-sky-600 text-sm sm:text-base font-medium block mt-12">
              Восстановление аккаунта
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

function Field({ tag, name, className, children }) {
  const Wrapper = tag ?? "label";

  return (
    <Wrapper className={`flex flex-col text-gray-600 py-2 ${className}`}>
      <span>{name}</span>
      {children}
    </Wrapper>
  );
}

function Input({ className, ...props }) {
  return (
    <input
      className={`text-base sm:text-lg text-black border-2 border-zinc-200 mt-2 px-4 py-2 sm:py-3 focus:bg-zinc-200 focus:outline-none transition ease-in-out duration-150 rounded ${className}`}
      {...props}
    />
  );
}
