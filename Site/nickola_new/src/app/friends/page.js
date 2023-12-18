import Image from "next/image";
import Link from "next/link";

export default function Friends() {
  const friendRequests = [
    {
      name: "Джон Картер",
      avatar: "/john.png",
    },
    {
      name: "Джейн Смит",
      avatar: "/jane.png",
    },
  ];

  const users = [
    {
      name: "Джеймс Смит",
      email: "john@test.com",
      avatar: "/james.png",
    },
    {
      name: "Джеймс Смит",
      email: "john@test.com",
      avatar: "/james.png",
    },
    {
      name: "Джеймс Смит",
      email: "john@test.com",
      avatar: "/james.png",
    },
  ];

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
              <Link className="text-gray-200 hover:text-white" href="/chat">
                Чат
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

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Друзья</h1>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Заявки в друзья</h2>

          <div className="space-y-3">
            {friendRequests.map((request) => (
              <div key={request.id} className="flex items-center">
                <Image
                  src={request.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full"
                  width={48}
                  height={48}
                />

                <div className="ml-4 text-gray-700">
                  <div>{request.name}</div>
                  <div className="flex space-x-2">
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 text-sm">
                      Принять
                    </button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 text-sm">
                      Отклонить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white mt-8 p-4 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Твои друзья</h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            {users.map((user) => (
              <div key={user.email}>
                <Image
                  src={user.avatar}
                  alt=""
                  className="w-16 h-16 rounded-full mx-auto"
                  width={64}
                  height={64}
                />
                <div>{user.name}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-8 flex-shrink-0">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2023 Language Translator Inc.
        </div>
      </footer>
    </div>
  );
}
