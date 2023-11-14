import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";

type AppProps = WithAuthenticatorProps

export function App({signOut, user}: AppProps) {

  return (
    <div className="flex flex-col mx-auto w-full min-h-screen">
      <Header user={user} signOut={signOut} />
      <Footer />
    </div>
  )
}

function Header({ user, signOut }:AppProps) {

  console.log((user))

  return <header id="page-header" className="items-center flex justify-between p-4 bg-primary text-neutral-100 shadow-md z-1">
    <h1>
      Cards app
    </h1>
    <nav className="flex items-center space-x-2">
      <span>{user?.username} </span>
      <button onClick={() => signOut!()} className="transition-colors group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-md border shadow-md hover:bg-white/20 active:bg-white/40">
        <span>Sign out {user?.attributes?.email}</span>
      </button>
    </nav>
  </header>;
}

function Footer() {
  return (
    <footer id="page-footer" className="flex flex-none items-center bg-white text-neutral-300">
      <div className="text-center flex flex-col md:text-left md:flex-row text-sm mx-auto px-4 lg:px-8">
        <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
          <span>Created for re:Invent 2023 FWM401</span>
        </div>
      </div>
    </footer>
  );
}

export default withAuthenticator(App);