export default function Login() {
  return (
    <div id="login" className="container mx-auto p-4">
      <h2 className="font-bold text-2xl mb-4">Login</h2>
      <form action="#" method="POST">
        <div className="mb-4">
          <label className="font-bold mb-2 block">Nome:</label>
          <input className="border border-gray-400 p-2 w-full rounded-md"></input>
        </div>
        <div className="mb-4">
          <label className="font-bold mb-2 block">E-mail:</label>
          <input className="border border-gray-400 p-2 w-full rounded-md"></input>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 block">Confirme o E-mail:</p>
          <textarea
            id="message"
            name="message"
            className="border border-gray-400 p-2 w-full rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 block">Senha:</p>
          <textarea
            id="Senha"
            name="Senha"
            className="border border-gray-400 p-2 w-full rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 block">Confirme a senha:</p>
          <textarea
            id="Senha"
            name="Senha"
            className="border border-gray-400 p-2 w-full rounded-md"
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
