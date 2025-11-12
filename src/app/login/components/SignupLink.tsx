import Link from 'next/link';

export default function SignupLink() {
  return (
    <div className="mt-6 text-center">
      <p className="text-gray-400">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">
          Sign up
        </Link>
      </p>
    </div>
  );
}