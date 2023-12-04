import Link from "next/link";

export default function Register() {
  return (
    <div className="bg-gray-100 font-sans flex flex-col min-h-screen">
      <header className="bg-indigo-600">
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link className="text-white font-bold text-2xl" href="/">
            Общение на разных языках
          </Link>

          <ul className="flex space-x-4 text-lg">
            <li>
              <Link className="text-gray-200 hover:text-white" href="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/register">
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-200 hover:text-white"
                href="/selectedPeople"
              >
                Поиск собеседника
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/friends">
                Друзья
              </Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-white" href="/profile">
                Профиль
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Создайте аккаунт
        </h1>

        <form className="max-w-md mt-8 mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Имя пользователя</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Пароль</label>
            <input type="password" className="border p-2 w-full" />
          </div>
          <div className="text-center">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              Регистрация
            </button>
          </div>
          <div className="mt-4 text-center">
            Уже есть аккаунт?{" "}
            <Link className="text-indigo-500" href="/login">
              Войдите
            </Link>
          </div>
        </form>
      </main>

      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2023 Language Translator Inc.
        </div>
      </footer>
    </div>
  );
}
