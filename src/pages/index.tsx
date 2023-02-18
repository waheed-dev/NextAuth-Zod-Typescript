import {useSession, signIn, signOut, getSession} from "next-auth/react"
import {session} from "next-auth/core/routes";
import {NextPageContext} from "next";


export default function Home() {
  const {data : session} = useSession()

    if(session) {
        return <>
            <div className={'text-red-600 text-4xl bg-green-300'}>  Signed in as {session.user?.name} <br/></div>

            <img className={'w-32 h-32 rounded-full'} src={session.user?.image!} alt="user image"/>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
  return (
      <>

        <div className={'text-red-600 text-4xl bg-yellow-300'}>welcome</div>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </>

  )
}

export async function getServerSideProps (ctx : NextPageContext) {
  const session = await getSession(ctx)
  console.log(session)
  return {
    props : {session}
  }
}