import Link from "../../node_modules/next/link";
export default function NotFoundCatchAll() {
    return (
        <div>
        <h1>Page Not found - 404!</h1>
        <div>
          <Link href="/">Go back to Home</Link>
        </div>
    </div>
    )
}