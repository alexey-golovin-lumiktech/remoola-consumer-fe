import LoginForm from "./LoginForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [k: string]: string | string[] | undefined };
}) {
  const next =
    (Array.isArray(searchParams?.next) ? searchParams.next[0] : searchParams?.next) || "/dashboard";
  return <LoginForm nextPath={next} />;
}
