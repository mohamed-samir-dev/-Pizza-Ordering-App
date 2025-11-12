import Link from 'next/link';

export default function LoginLink() {
  return (
    <div className="mt-6 text-center">
      <p className="text-gray-400">
        Already have an account?{' '}
        <Link href="/login" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
}